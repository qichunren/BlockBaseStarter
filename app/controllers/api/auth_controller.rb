module Api
  class AuthController < ApplicationController
    # POST /api/auth/register.json
    def register
      user = User.new(user_params)

      if user.save
        token = generate_token(user.id)
        render json: { token: token }, status: :created
      else
        render json: { message: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end

    # POST /api/auth/login.json
    def login
      user = User.find_by(email: params[:email])

      if user&.authenticate(params[:password])
        token = generate_token(user.id)
        render json: { token: token }
      else
        render json: { message: t('.invalid_credentials') }, status: :unauthorized
      end
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end

    def generate_token(user_id)
      JWT.encode({ user_id: user_id, exp: 24.hours.from_now.to_i },
                Rails.application.credentials.secret_key_base)
    end
  end
end

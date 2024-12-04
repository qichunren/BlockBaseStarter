module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user

    attr_reader :current_user
  end

  private

  def authenticate_user
    header = request.headers["Authorization"]
    token = header.split(" ").last if header

    begin
      decoded = JWT.decode(token, Rails.application.credentials.secret_key_base)[0]
      puts "decoded: #{decoded.inspect}"
      @current_user = User.find(decoded["user_id"])
      puts "current_user: #{@current_user.inspect}"
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      puts "JWT::DecodeError, ActiveRecord::RecordNotFound"
      render json: { message: t(".unauthorized") }, status: :unauthorized
    end
  end

  def authenticate_user!
    render json: { message: t(".login_required") }, status: :unauthorized unless current_user
  end
end

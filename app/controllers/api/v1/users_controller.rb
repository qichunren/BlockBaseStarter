module Api
  module V1
    class UsersController < ApplicationController
      include Authentication
      include Pagy::Backend

      def index
        @pagy, @users = pagy(User.order(created_at: :desc),
                            items: params[:per_page] || 10)

        render json: {
          users: @users.map { |user| user_json(user) },
          meta: pagy_metadata(@pagy)
        }
      end

      private

      def user_json(user)
        {
          id: user.id,
          email: user.email,
          created_at: user.created_at.iso8601
        }
      end
    end
  end
end

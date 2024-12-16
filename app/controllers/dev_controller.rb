class DevController < ApplicationController
  before_action :ensure_development_environment

  def credentials
    @credentials = Rails.application.credentials.config
    render json: @credentials
  end

  private

  def ensure_development_environment
    unless Rails.env.development?
      render json: { error: 'Only available in development environment' }, status: :forbidden
    end
  end
end

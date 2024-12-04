module App
  class HomeController < ApplicationController
    # GET /app
    def index
      render layout: false
    end
  end
end

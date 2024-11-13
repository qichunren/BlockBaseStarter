module App
  class HomeController < ApplicationController
    def index
      render layout: "react_app"
    end
  end
end

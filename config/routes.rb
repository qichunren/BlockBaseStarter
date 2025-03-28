Rails.application.routes.draw do
  namespace :app do
    # fallback route for react-router
    get "(*path)", to: "home#index", constraints: ->(req) { req.format == :html }
    root "home#index"
  end
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index ]
    end

    post "register", to: "auth#register"
    post "login", to: "auth#login"
  end

  if Rails.env.development?
    get "dev/credentials", to: "dev#credentials"
  end
end

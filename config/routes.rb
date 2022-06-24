Rails.application.routes.draw do
  
  resources :reviews
  resources :users
  resources :recipes
  resources :categories
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # login session route
  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
end

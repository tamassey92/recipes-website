Rails.application.routes.draw do
  
  resources :reviews
  resources :users, only: [:create]
  resources :recipes, only: [:index, :show]
  resources :categories, only: [:index, :show]

  # Initially Authenticate User
  get '/authorized_user', to: 'users#show'

  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

end

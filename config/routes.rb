Rails.application.routes.draw do
  namespace :api do
    resources :workouts, only: [:index, :show, :create]
  end
end

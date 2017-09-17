Rails.application.routes.draw do
  namespace :api do
    resources :workouts, only: [:index, :show, :create, :destroy] do
      resources :exercises, only: [:index, :create]
    end
  end
end

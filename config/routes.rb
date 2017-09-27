Rails.application.routes.draw do
  namespace :api do
    resources :workouts, only: [:index, :show, :create, :update, :destroy] do
      resources :exercises, only: [:index, :create, :destroy]
    end
  end
end

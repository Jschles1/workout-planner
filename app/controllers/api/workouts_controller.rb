class API::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts, status: 200
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout, status: 200
  end
end
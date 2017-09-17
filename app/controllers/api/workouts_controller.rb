class API::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts, status: 200
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout, status: 200
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render status: 200
    else
      render status: 422
    end
  end

  private

  def workout_params
    params.permit(:title)
  end
end
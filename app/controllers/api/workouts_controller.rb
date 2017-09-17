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
      render json: @workout, status: 200
    else
      render json: { errors: @workout.errors }, status: 422
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
  end

  private

  def workout_params
    params.require(:workout).permit(:title)
  end
end
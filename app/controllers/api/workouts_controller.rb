class API::WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]
  
  def index
    @workouts = Workout.all
    render json: @workouts, status: 200
  end

  def show
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

  def update
    @workout.update(workout_params)
    if @workout.save
      render json: @workout, status: 200
    else
      render json: { errors: @workout.errors }, status: 422
    end
  end

  def destroy
    @workout.destroy
  end

  private

  def workout_params
    params.require(:workout).permit(:title, :workout_type, :suggested, :likes)
  end

  def set_workout
    @workout = Workout.find(params[:id])
  end
end
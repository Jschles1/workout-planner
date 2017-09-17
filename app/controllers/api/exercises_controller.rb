class API::ExercisesController < ApplicationController
  before_action :set_workout

  def index
    render json: @workout.exercises, status: 200
  end

  def create
    @exercise = @workout.exercises.create(exercise_params)
    render json: @exercise, status: 201
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :reps, :sets, :rest_period)
  end

  def set_workout
    @workout = Workout.find(params[:workout_id])
  end
end
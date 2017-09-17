class API::ExercisesController < ApplicationController
  before_action :set_workout

  def index
    render json: @workout.exercises, status: 200
  end

  def create
    @exercise = @workout.exercises.create(exercise_params)
    if @exercise.save
      render json: @exercise, status: 201
    else
      render json: { errors: @exercise.errors }, status: 422
    end
  end

  def destroy
    @exercise = @workout.exercises.find_by!(id: params[:id]) if @workout
    @exercise.destroy
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :reps, :sets, :rest_period)
  end

  def set_workout
    @workout = Workout.find(params[:workout_id])
  end
end
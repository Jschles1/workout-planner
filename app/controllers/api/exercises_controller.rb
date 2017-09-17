class API::ExercisesController < ApplicationController
  before_action :set_workout

  def index
    render status: 200
  end

  private

  def set_workout
    @workout = Workout.find(params[:workout_id])
  end
end
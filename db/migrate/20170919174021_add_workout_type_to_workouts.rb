class AddWorkoutTypeToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :workout_type, :string
  end
end

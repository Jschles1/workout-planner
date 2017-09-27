class AddSuggestedToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :suggested, :boolean, default: false
  end
end

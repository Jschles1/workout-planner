class AddInfoUrlToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :info_url, :string
  end
end

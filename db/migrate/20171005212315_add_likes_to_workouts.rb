class AddLikesToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :likes, :integer
  end
end

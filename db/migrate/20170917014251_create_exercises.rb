class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.references :workout, foreign_key: true
      t.integer :reps
      t.integer :sets
      t.integer :rest_period

      t.timestamps
    end
  end
end

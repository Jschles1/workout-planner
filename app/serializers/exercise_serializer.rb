class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :reps, :sets, :rest_period, :workout_id
end

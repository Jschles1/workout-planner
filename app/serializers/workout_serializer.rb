class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :workout_type, :suggested, :info_url
  has_many :exercises
end

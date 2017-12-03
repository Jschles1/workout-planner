class Workout < ApplicationRecord
  has_many :exercises, dependent: :destroy
  validates :title, :workout_type, presence: true
end

class Workout < ApplicationRecord
  has_many :exercises, dependent: :destroy
  validates :title, :workout_type, presence: true
  validates :likes, numericality: { only_integer: true }
end

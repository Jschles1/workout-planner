class Exercise < ApplicationRecord
  belongs_to :workout
  validates :name, :reps, :sets, :rest_period, presence: true
  validates :reps, :sets, :rest_period, numericality: { only_integer: true, greater_than: 0 }
end

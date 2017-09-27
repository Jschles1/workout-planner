class Exercise < ApplicationRecord
  belongs_to :workout
  validates :name, :reps, :sets, :rest_period, presence: true
  validates :reps, :sets, :rest_period, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end

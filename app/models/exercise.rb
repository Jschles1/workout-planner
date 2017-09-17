class Exercise < ApplicationRecord
  belongs_to :workout
  validates :name, :reps, :sets, :rest_period, presence: true
end

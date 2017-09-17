class Workout < ApplicationRecord
  has_many :exercises, dependent: :destroy
  validates :title, presence: true
end

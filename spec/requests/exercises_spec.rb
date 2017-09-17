require 'rails_helper'

RSpec.describe 'Exercises API', type: :request do

  let!(:workout) { create(:workout) }
  let!(:exercises) { create_list(:exercise, 5, workout_id: workout.id) }
  let(:workout_id) { workout.id }
  let(:exercise_id) { exercises.first.id }

end
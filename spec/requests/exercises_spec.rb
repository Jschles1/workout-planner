require 'rails_helper'

RSpec.describe 'Exercises API', type: :request do

  let!(:workout) { create(:workout) }
  let!(:exercises) { create_list(:exercise, 5, workout_id: workout.id) }
  let(:workout_id) { workout.id }
  let(:exercise_id) { exercises.first.id }

  # GET /api/workouts/:workout_id/exercises
  describe 'GET /api/workouts/:workout_id/exercises' do
    before { get "/api/workouts/#{workout_id}/exercises" }

    context 'if the workout exists' do
      it 'returns a status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all of the workout\'s exercises' do
        expect(json.size).to eq(5)
      end
    end


  end

end
require 'rails_helper'

RSpec.describe 'Exercises API', type: :request do

  let!(:workout) { create(:workout) }
  let!(:exercises) { create_list(:exercise, 5, workout_id: workout.id) }
  let(:workout_id) { workout.id }
  let(:exercise_id) { exercises.first.id }

  # GET /api/workouts/:workout_id/exercises
  describe 'GET /api/workouts/:workout_id/exercises' do
    before { get "/api/workouts/#{workout_id}/exercises" }

    it 'returns a status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns all of the workout\'s exercises' do
      expect(json.size).to eq(5)
    end
  end

  # POST /api/workouts/:workout_id/exercises
  describe 'POST /api/workouts/:workout_id/exercises' do
    let(:valid_attributes) {
      {
        exercise: {
          name: Faker::Lorem.word,
          reps: Faker::Number.between(1, 30),
          sets: Faker::Number.between(1, 10),
          rest_period: Faker::Number.between(10, 1000)
        }
      }
    }

    context 'upon a valid request' do
      before { post "/api/workouts/#{workout_id}/exercises" }

      it 'returns a status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'creates a new exercise and persists it to the database' do
        expect(json[:name]).to eq(valid_attributes[:exercise][:name])
        expect(json[:reps]).to eq(valid_attributes[:exercise][:reps])
        expect(json[:sets]).to eq(valid_attributes[:exercise][:sets])
        expect(json[:rest_period]).to eq(valid_attributes[:exercise][:rest_period])
      end
    end
  end

end
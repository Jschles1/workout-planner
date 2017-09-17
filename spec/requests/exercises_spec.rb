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
    let(:invalid_attributes) {
      {
        exercise: {
          name: "",
          reps: nil,
          sets: nil,
          rest_period: nil
        }
      }
    }

    context 'upon a valid request' do
      before { post "/api/workouts/#{workout_id}/exercises", params: valid_attributes }

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

    context 'upon an invalid request' do
      before { post "/api/workouts/#{workout_id}/exercises", params: invalid_attributes }

      it 'returns status code 422' do  
        expect(response).to have_http_status(422)
      end 

      it 'returns validation errors' do
        expect(json[:errors][:name]).to eq(["can't be blank"])
        expect(json[:errors][:reps]).to eq(["can't be blank", "is not a number"])
        expect(json[:errors][:sets]).to eq(["can't be blank", "is not a number"])
        expect(json[:errors][:rest_period]).to eq(["can't be blank", "is not a number"])
      end
    end
  end

end
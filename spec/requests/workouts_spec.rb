require 'rails_helper'

RSpec.describe 'Workouts API', type: :request do

  let!(:workouts) { create_list(:workout, 10) }
  let(:workout_id) { workouts.first.id }

  # GET /api/workouts
  describe 'GET /api/workouts' do
    before { get '/api/workouts' }

    it 'returns a status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns an array of workouts in JSON' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  # GET /api/workouts/:id
  describe 'GET /api/workouts/:id' do
    before { get "/api/workouts/#{workout_id}" }

    it 'returns a status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns the workout object in JSON' do
      expect(json).not_to be_empty
      expect(json[:id]).to eq(workout_id)
    end
  end

  # POST /api/workouts
  describe 'POST /api/workouts' do
    let(:valid_attributes) {
      { title: Faker::Lorem.word }
    }
    let(:invalid_attributes) {
      { title: "" }
    }

    context 'upon a valid request' do    
      before { post "/api/workouts/", params: valid_attributes }
    
      it 'returns a status code 200' do
        expect(response).to have_http_status(200)
      end

    end

    context 'upon an invalid request' do
      before { post "/api/workouts/", params: invalid_attributes }

      it 'returns a status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

end
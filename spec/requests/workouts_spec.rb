require 'rails_helper'

RSpec.describe 'Workouts API', type: :request do

  let(:workouts) { create_list(:workout, 10) }
  let(:workout_id) { workouts.first.id }

  # GET /api/workouts
  describe 'GET /api/workouts' do
    before { get '/api/workouts' }

    # itx 'returns an array of workouts in JSON' do
    # end

    it 'returns a status code 200' do
      expect (response).to have_http_status(200)
    end
  end

end
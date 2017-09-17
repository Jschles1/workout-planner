require 'rails_helper'

RSpec.describe Exercise, type: :model do
  it { should belong_to(:workout) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:reps) }
  it { should validate_presence_of(:sets) }
  it { should validate_presence_of(:rest_period) }
end

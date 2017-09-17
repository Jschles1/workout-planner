FactoryGirl.define do
  factory :exercise do
    name { Faker::Lorem.word }
    workout_id nil
    reps { Faker::Number.between(1, 30) }
    sets { Faker::Number.between(1, 10) }
    rest_period { Faker::Number.between(10, 1000) }
  end
end
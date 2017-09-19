FactoryGirl.define do
  factory :workout do
    title { Faker::Lorem.word }
    workout_type { Faker::Lorem.word }
  end
end
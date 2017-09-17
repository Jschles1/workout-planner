FactoryGirl.define do
  factory :workout do
    title { Faker::Lorem.word }
  end
end
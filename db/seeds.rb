# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Workout.create(id: 1, 
              title: "Starting Strength Workout A", 
              workout_type: "Weightlifting", 
              suggested: true,
              info_url: "https://www.bodybuilding.com/fun/novice-lifters-start-here.html",
              likes: 0)
  Exercise.create(workout_id: 1, name: "Barbell Squat", reps: 5, sets: 3, rest_period: 4)
  Exercise.create(workout_id: 1, name: "Bench Press", reps: 5, sets: 3, rest_period: 4)
  Exercise.create(workout_id: 1, name: "Deadlift", reps: 5, sets: 1, rest_period: 0)

Workout.create(id: 2, 
              title: "Starting Strength Workout B", 
              workout_type: "Weightlifting", 
              suggested: true,
              info_url: "https://www.bodybuilding.com/fun/novice-lifters-start-here.html",
              likes: 0)
  Exercise.create(workout_id: 2, name: "Barbell Squat", reps: 5, sets: 3, rest_period: 4)
  Exercise.create(workout_id: 2, name: "Overhead Press", reps: 5, sets: 3, rest_period: 4)
  Exercise.create(workout_id: 2, name: "Deadlift", reps: 5, sets: 1, rest_period: 0)

Workout.create(id: 3, 
              title: "Jason Blaha's 5x5 Novice Program Workout A",
              workout_type: "Full Body",
              suggested: true,
              info_url: "https://www.muscleandstrength.com/workouts/jason-blaha-ice-cream-fitness-5x5-novice-workout",
              likes: 0)
  Exercise.create(workout_id: 3, name: "Squats", reps: 5, sets: 5, rest_period: 5)
  Exercise.create(workout_id: 3, name: "Bench Press", reps: 5, sets: 5, rest_period: 5)
  Exercise.create(workout_id: 3, name: "Bent Over Row", reps: 5, sets: 5, rest_period: 5)
  Exercise.create(workout_id: 3, name: "Barbell Shrugs", reps: 8, sets: 3, rest_period: 2)
  Exercise.create(workout_id: 3, name: "Tricep Extensions", reps: 8, sets: 3, rest_period: 2)
  Exercise.create(workout_id: 3, name: "Straight Bar or Inline Curls", reps: 8, sets: 3, rest_period: 2)
  Exercise.create(workout_id: 3, name: "Hyperextensions with Plate", reps: 10, sets: 2, rest_period: 2)
  Exercise.create(workout_id: 3, name: "Cable Crunches", reps: 10, sets: 3, rest_period: 2)

Workout.create(id: 4, 
              title: "Jason Blaha's 5x5 Novice Program Workout B",
              workout_type: "Full Body",
              suggested: true,
              info_url: "https://www.muscleandstrength.com/workouts/jason-blaha-ice-cream-fitness-5x5-novice-workout",
              likes: 0)
  Exercise.create(workout_id: 4, name: "Squats", reps: 5, sets: 5, rest_period: 5)
  Exercise.create(workout_id: 4, name: "Deadlift", reps: 5, sets: 1, rest_period: 0)
  Exercise.create(workout_id: 4, name: "Standing Press", reps: 5, sets: 5, rest_period: 5)  
  Exercise.create(workout_id: 4, name: "Bent Over Row (10% lighter than workout A)", reps: 5, sets: 5, rest_period: 5)
  Exercise.create(workout_id: 4, name: "Close Grip Bench Press", reps: 8, sets: 3, rest_period: 2)
  Exercise.create(workout_id: 4, name: "Straight Bar or Inline Curls", reps: 8, sets: 3, rest_period: 2)
  Exercise.create(workout_id: 4, name: "Cable Crunches", reps: 10, sets: 3, rest_period: 2)
  
Workout.create(id: 5,
              title: "Women's Bodyweight Circuit",
              workout_type: "Bodyweight",
              suggested: true,
              info_url: "https://www.muscleandstrength.com/workouts/2-at-home-circuit-workouts-for-women",
              likes: 0)
  Exercise.create(workout_id: 5, name: "Bodyweight Squats", reps: 10, sets: 3, rest_period: 0)
  Exercise.create(workout_id: 5, name: "Pushups", reps: 10, sets: 3, rest_period: 0)
  Exercise.create(workout_id: 5, name: "Bodyweight Lunge", reps: 10, sets: 3, rest_period: 0)
  Exercise.create(workout_id: 5, name: "Chin Up or Resistance Band Pull Down", reps: 10, sets: 3, rest_period: 0)
  Exercise.create(workout_id: 5, name: "Tricep Bench Dip", reps: 10, sets: 3, rest_period: 0)


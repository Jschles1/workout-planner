## Workout Planner

### Introduction

This single page application is built with a React-Redux front-end with a Rails API back-end. It allows users to create new workouts and add/remove exercises to each workout. 

### Usage

clone this repo and install the needed gems:

```
$ bundle install
```

Next, migrate the database:

```
$ rails db:migrate
```

Now run the app using:

```
$ rake start
```

### Instructions

To add to your list of workouts, click the "Create New Workout" button on the navbar, fill out the form fields of "Workout Title" and "Workout Type", and click "Submit".

Click the "Workouts" button on the navbar to see your current list of workouts. To remove a workout from the list, click the "Delete Workout" button of the workout you want to remove.

To see the list of exercises in a particular workout, click that workout's "View Workout" button. To add an exercise to the workout, fill out the form on the bottom of the page and click "Submit". You can specify the exercise name, the number of repetitions, the number of sets, and rest period between sets. Click the "Delete Exercise" button to delete the selected exercise.

## Contributing

Bug reports and pull requests are welcome on GitHub at [this project's repository][workout-planner]. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This Web Application is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
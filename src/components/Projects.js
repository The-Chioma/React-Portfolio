/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Job App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/SecondProject">
                Github repository
              </a>
              <br />
              <a href="https://protected-retreat-49639.herokuapp.com">
                Live website
              </a>
            </p>
          </div>

          <hr />

          <a href="https://protected-retreat-49639.herokuapp.com">
            <img
              className="card-img-top"
              src="../assets/jobapp.jpg"
              alt="Card image cap"
            />
          </a>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recipe App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/FirstProject">
                Github repository
              </a>
              <br />
              <a href="https://the-chioma.github.io/FirstProject/">
                Live website
              </a>
            </p>
          </div>
          <hr />
          <a href="https://the-chioma.github.io/FirstProject/">
            <img
              className="card-img-top"
              src="../assets/recipe.jpg"
              alt="Card image cap"
            />
          </a>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Fitness App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/Workout-Tracker">
                Github repository
              </a>
              <br />
              <a href="https://eva-workout-tracker.herokuapp.com/">
                Live website
              </a>
            </p>
          </div>
          <hr />
          <a href="https://eva-workout-tracker.herokuapp.com/">
            <img
              className="card-img-top"
              src="../assets/fitness-app.jpg"
              alt="Card image cap"
            />
          </a>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Quiz App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/homework04-CodeQuiz">
                Github repository
              </a>
              <br />
              <a href="https://the-chioma.github.io/homework04-CodeQuiz/">
                Live website
              </a>
            </p>
          </div>
          <hr />
          <a href="https://the-chioma.github.io/homework04-CodeQuiz/">
            <img className="card-img-top" src="../assets/quiz.jpg" alt="Card image cap" />
          </a>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Password App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/homework03-PasswordGenerator">
                Github repository
              </a>
              <br />
              <a href="https://the-chioma.github.io/homework03-PasswordGenerator/">
                Live website
              </a>
            </p>
          </div>
          <hr />
          <a href="https://the-chioma.github.io/homework03-PasswordGenerator/">
            <img
              className="card-img-top"
              src="../assets/password.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              <a href="https://github.com/The-Chioma/homework03-PasswordGenerator">
                Github repository
              </a>
              <br />
              <a href="https://the-chioma.github.io/homework06-WeatherDashboard/">
                Live website
              </a>
            </p>
          </div>
          <hr />
          <a href="https://the-chioma.github.io/homework06-WeatherDashboard/">
            <img
              className="card-img-top"
              src="../assets/weather.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
    </div>
    </>
  );
};

export default Projects;

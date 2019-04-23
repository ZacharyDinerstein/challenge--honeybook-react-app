import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="card-container">
      <div className="row">
        <div className="card col-sm-12 col-md-3">
          <img src="" alt="" className="card__img--main" />
          <img src="" alt="" className="card__img--stamp" />
          <div className="card__text-wrapper">
            <div className="card__text-container--top">
              <h2 className="card__name">Full Name</h2>
              <div className="card__sub-text-container">
                <p className="card__job-title">Job Title</p>
                <p className="card__text--divider">|</p>
                <p className="card__company-name">@CompanyName</p>
              </div>
            </div>
            <div className="card__text-container--bottom card__sub-text-container d-none">
              <p className="card__phone-num--label">Phone Number</p>
              <p className="card__phone-num">123-456-7890</p>
              <p className="card__email">email@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

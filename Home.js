import React from 'react';
import PropTypes from 'prop-types';
import './home.css';

const Home = ({ plans }) => {
  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <span className="plan-name">{plan.name}</span>
            <span className="plan-price">₹ {plan.price}</span>
          </div>
          <div className="card-details">
            <span className="details-link">View details</span>
            <div className="validity-data">
              <div>VALIDITY</div>
              <div>{plan.validity}</div>
            </div>
            <div className="data-per-day">
              <div>DATA</div>
              <div>{plan.data}</div>
            </div>
            <div className="subscriptions">
              <div>SUBSCRIPTIONS</div>
              <div>{plan.subscriptions.map((sub, subIndex) => (
                <img key={subIndex} src={sub} alt="subscription" />
              ))}</div>
            </div>
          </div>
          <button className="recharge-button">Recharge</button>
        </div>
      ))}
    </div>
  );
};

Home.defaultProps = {
  plans: [
    {
      name: 'Plan Basic',
      price: 199,
      validity: '28 days',
      data: '1GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    
      ]
    },
    {
      name: 'Plan Standard',
      price: 399,
      validity: '56 days',
      data: '1.5GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
        
      ]
    },
    {
      name: 'Plan Premium',
      price: 599,
      validity: '84 days',
      data: '2GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',

      ]
    },
    {
      name: 'Plan Ultimate',
      price: 799,
      validity: '90 days',
      data: '3GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        
      ]
    },
    {
      name: 'Plan Super Saver',
      price: 999,
      validity: '180 days',
      data: '1GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      ]
    },
    {
      name: 'Plan Ultra',
      price: 1299,
      validity: '365 days',
      data: '1.5GB/day',
      subscriptions: [
         'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
         'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
     
      ]
    },
    {
      name: 'Plan Mega Saver',
      price: 1499,
      validity: '365 days',
      data: '2GB/day',
      subscriptions: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      ]
    },
    {
      name: 'Plan Family',
      price: 1999,
      validity: '180 days',
      data: '4GB/day',
      subscriptions: [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1200px-Apple_Music_logo.svg.png'

      ]
    },
    {
      name: 'Plan Unlimited',
      price: 2499,
      validity: '365 days',
      data: 'Unlimited',
      subscriptions: [
'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg'


      ]
    },
    
  ]
};

Home.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    validity: PropTypes.string,
    data: PropTypes.string,
    subscriptions: PropTypes.arrayOf(PropTypes.string)
  }))
};

export default Home;

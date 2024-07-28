import React, { useState } from 'react';
import './MobileRechargeForm.css';

const MobileRechargeForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [planType, setPlanType] = useState('prepaid');
  const [operator, setOperator] = useState('');
  const [circle, setCircle] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const circleNames = {
    circle1: 'Andhra Pradesh',
    circle2: 'Assam',
    circle3: 'Bihar/ Jharkhand',
    circle4: 'Chennai',
    circle5: 'Delhi/NCR',
    circle6: 'Gujarat',
    circle7: 'Karnataka',
    circle8: 'Kerala',
    circle9: 'Kolkata',
    circle10: 'Maharashtra and Goa (except Mumbai)',
    circle11: 'MP/Chattisgarh',
    circle12: 'Mumbai',
    circle13: 'Odisha',
    circle14: 'Punjab',
    circle15: 'Rajasthan',
    circle16: 'Tamilnadu',
    circle17: 'West Bengal',
    circle18: 'UP'
  };

  const validate = () => {
    let errors = {};
    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile Number cannot be empty';
    }
    if (!operator) {
      errors.operator = 'Operator cannot be empty';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const operatorNames = {
        operator1: 'BSNL',
        operator2: 'Jio',
        operator3: 'Airtel',
        operator4: 'Tata Docomo',
        operator5: 'MTNL',
        operator6: 'VI'
      };
      const rechargeData = { 
        mobileNumber, 
        planType, 
        operator: operatorNames[operator], 
        circle: circleNames[circle], 
        amount, 
        date: new Date().toLocaleString() 
      };

      const storedData = JSON.parse(localStorage.getItem('rechargeHistory')) || [];
      storedData.push(rechargeData);
      localStorage.setItem('rechargeHistory', JSON.stringify(storedData));

      setSuccessMessage('Recharge Successful!');
      setMobileNumber('');
      setPlanType('prepaid');
      setOperator('');
      setCircle('');
      setAmount('');
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div>
      {successMessage && (
        <div className="success-notification">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mobile-recharge-form">
        <h2>Mobile Recharge</h2>
        
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
          />
          {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
        </div>

        <div className="form-group">
          <label>Plan Type</label>
          <div className="plan-type">
            <label>
              <input
                type="radio"
                value="prepaid"
                checked={planType === 'prepaid'}
                onChange={(e) => setPlanType(e.target.value)}
              />
              Prepaid
            </label>
            <label>
              <input
                type="radio"
                value="postpaid"
                checked={planType === 'postpaid'}
                onChange={(e) => setPlanType(e.target.value)}
              />
              Postpaid
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Operator</label>
          <div className="select-container">
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className={`form-control ${errors.operator ? 'is-invalid' : ''}`}
            >
              <option value="">Select Operator</option>
              <option value="operator1">BSNL</option>
              <option value="operator2">Jio</option>
              <option value="operator3">Airtel</option>
              <option value="operator4">Tata Docomo</option>
              <option value="operator5">MTNL</option>
              <option value="operator6">VI</option>
            </select>
          </div>
          {errors.operator && <div className="invalid-feedback">{errors.operator}</div>}
        </div>

        <div className="form-group">
          <label>Circle</label>
          <div className="select-container">
            <select
              value={circle}
              onChange={(e) => setCircle(e.target.value)}
              className="form-control"
            >
              <option value="">Select Circle</option>
              <option value="circle1">Andhra Pradesh</option>
              <option value="circle2">Assam</option>
              <option value="circle3">Bihar/ Jharkhand</option>
              <option value="circle5">Delhi/NCR</option>
              <option value="circle6">Gujarat</option>
              <option value="circle7">Karnataka</option>
              <option value="circle8">Kerala</option>
              <option value="circle9">Kolkata</option>
              <option value="circle10">Maharashtra and Goa (except Mumbai)</option>
              <option value="circle11">MP/Chattisgarh</option>
              <option value="circle12">Mumbai</option>
              <option value="circle13">Odisha</option>
              <option value="circle14">Punjab</option>
              <option value="circle15">Rajasthan</option>
              <option value="circle16">Tamilnadu</option>
              <option value="circle17">West Bengal</option>
              <option value="circle18">UP</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-confirm">Confirm</button>
      </form>
    </div>
  );
};

export default MobileRechargeForm;

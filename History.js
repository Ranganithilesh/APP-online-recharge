import React, { useEffect, useState } from 'react';
import './History.css';

const History = () => {
  const [rechargeHistory, setRechargeHistory] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('rechargeHistory')) || [];
    setRechargeHistory(storedData);
  }, []);

  return (
    <div className="history-container">
      <h1>Recharge History</h1>
      <p>Here you can view all your past recharges.</p>
      {rechargeHistory.length === 0 ? (
        <p>No recharge history available.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mobile Number</th>
              <th>Plan Type</th>
              <th>Operator</th>
              <th>Circle</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rechargeHistory.map((recharge, index) => (
              <tr key={index}>
                <td>{recharge.date}</td>
                <td>{recharge.mobileNumber}</td>
                <td>{recharge.planType}</td>
                <td>{recharge.operator}</td>
                <td>{recharge.circle}</td>
                <td>{recharge.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;

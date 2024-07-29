import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Recharge.css';

// Replace these URLs with the actual URLs of your payment option images
const gpayImageUrl = 'https://example.com/gpay.png';
const paytmImageUrl = 'https://example.com/paytm.png';
const phonepeImageUrl = 'https://example.com/phonepe.png';

const Recharge = () => {
  const location = useLocation();
  const { plan } = location.state;
  const [number, setNumber] = useState('');
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleRecharge = () => {
    if (number && paymentMethod) {
      // Handle the recharge process here
      console.log(`Recharging with plan: ${plan.name} for number: ${number} using ${paymentMethod}`);
      setSuccess(true);
    } else {
      alert('Please enter a valid number and select a payment method');
    }
  };

  return (
    <div className="recharge-container">
      <h1>Recharge</h1>
      {success ? (
        <p className="recharge-success">Recharge successful for number: {number}</p>
      ) : (
        <>
          <div className="recharge-details">
            <p>Selected Plan: {plan.name}</p>
            <p>Price: ₹ {plan.price}</p>
            <p>Validity: {plan.validity}</p>
            <p>Data: {plan.data}</p>
          </div>
          <input
            type="text"
            placeholder="Enter your number"
            value={number}
            onChange={handleNumberChange}
            className="recharge-input"
          />
          <div className="payment-options">
            <p>Select Payment Method:</p>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHKmxbx-Lb8oq4LqyP93rd1Xm3X_TyVpGR7IGduX62DV8AmsW3x7N6RS63w13hxH2Dbs&usqp=CAU"
              alt="Google Pay" 
              className="payment-image" 
              onClick={() => setPaymentMethod('Google Pay')}
            />
            <img 
              src="data:image/png;base64,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"
              alt="Paytm" 
              className="payment-image" 
              onClick={() => setPaymentMethod('Paytm')}
            />
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEVfJZ////9ZF5ycg8D39PpfH6BcIJ5XEZu1n9F2SKxVDJpkK6Lx7PfCsdlRAJhbHJ2GYrXOv+Hr5fP9+/5jLqGBWbLSxeNoM6RtOqdzQ6v08Picf8J8Ua9uPKiNarnFtNrl3e6njsjaz+eVdr7XzOa4pNOvmM3f1uumjcjm3u+/q9fDstlxRKjIudyXeb/FCSTHAAAEc0lEQVR4nO3d63LaOhSGYVlxJSJAAgzlZMIpDYVs9v1f3jbZmaTFWspM4mJp9Xv/dSad8TMhliULWwiEEEIIIYQQQgghhBBCCCHEI1XV9jH8uZS04r4sZ8a4tg/lT6SMnW93i6Io8t75wTIzKmlMeRpl740Gtu2Dai6l7Ww/zLOr+myIpnw6FNe8S9+ZEO2jT/fSmgVRbklglnU4EM1zQJgtTdvH9/XcPiTMJrLtA/x65kdIWMwZjIv2KUTsTRlcw4WJG82BeBcishgWw0QWFzfmIUTcMhgzPiA+6LaPr4HMwHtt+to9g2FR6DJAzGcMhkUhy9oE6r2RYDBmCLkKEHccTqjCzRc0kcdUyokRTWQxlRKqGyBymEpVRHGgiQMOY4ZQjiYWKw5jRkX8ThIXLMYMoSxN3DgeRD0kiUMWJ9RqNtUniSf+xJ9ciB2SuOcwlRIhYlGyGBZDKxv5jMUJNUQcSSZEs6SIj0zONoHFGx5TKREi8phKVekJtXjDYypVJSfUb5HDXamX5IxYvCnuWUylRGDxhsVdqZfknFjZ2HA52wg3Jogs7kq95NTRT4xuKiXtt88lNbF4s9VXP2hbvZ9q9r380/mF2fWPHX+M2xsoHTm0NVt7dxvN+TbCbN3WFNnS60sN97Ml4u2EGX/hXTvXrDcUDts52dxQ2NL13A2FI/bCYztCw16o6WVsJkI15S4UgfuCTIRqGtgvw0IoXBnYL9NkLY34F+K3c2h/XlPlLa5RKbtadt7yf2gPTx2qk180/P2nttNW1xmV1K8Z1/Meb99qIrPyC5e//4947kx1CSH5R6Tu/cKWphIfB2EtCKMLwloQRheEtSCMLghrQRhdENaCMLogrAVhdEFYC8LogrAWhNEFYS0IowvCWhBGFyGk96cnJ3T+LfgHPkLt34F/JI83OaH1b8DPx9Rd6uSE1Ea3ko2Q2ujWoTYxJyeUxLdgyR1NyQnJL2CUxH6Y5IRCEPvcqGdCpSe01AOF7vyXNekJDbGLKysGXmJ6Qkd+Vbt48HxQlZmlJhSWEmbZs7a/PG1HKWnstOO/kI1aGNo1fJ5MtTVGG2N195/9M/0UsIiFMvjEyyzf7Nb9zvp82IR33kYsFKqRTcMxC00j31CIWahWTeyKjlkYeiAUE6ESDfwSoxYKHXwMNAchNdNnJFTzL39OIxcKGX47AgOhsFvuwg9eHcBB+FViAkJh/+UuFHpOPIKGjVA42fn0qJGGsJpnrD778JNUhELZ8Sk0X1ycBokLL2tNen/2Lsbkm87E2nnyQnF5lpQsl/3dcfH6V5n3Nrv13WBqtUtwNZHo8qpAqcT4Urc6BVX/+n/ZjY3wNaWuX9jJTVgPwvSDMP0gTD8I0w/C9IMw/SBMPwjTj3pqHx+hIJ6dxUhI7CpmJHT+BVNGQmKbGCeh6voWxTkJhfO9smQSzUP2mshNH6+BPF6k+56yk2Hx6404Nq+3es9ZMx+8NeMHvKTcW6z+BhFCCCGEEEIIIYQQQgghhBBCCCH01/UfYcNS0Fh2weUAAAAASUVORK5CYII="
              alt="PhonePe" 
              className="payment-image" 
              onClick={() => setPaymentMethod('PhonePe')}
            />
          </div>
          <button onClick={handleRecharge} className="recharge-button">Confirm Recharge</button>
        </>
      )}
    </div>
  );
};

export default Recharge;

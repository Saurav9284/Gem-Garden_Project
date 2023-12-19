import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PaymentSuccess = () => {

    const naviagte = useNavigate();

    const handlehome = () => {
         naviagte("/")
    }
  return (
    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Payment_Done.gif?20201009142611"
          alt="Payment success animation: Thank you for shopping"
        />
        <div onClick={handlehome} style={{cursor:"pointer"}}>
        <h1>Thanks For Shopping</h1>
            </div>
      </div>
    </div>
  );
};





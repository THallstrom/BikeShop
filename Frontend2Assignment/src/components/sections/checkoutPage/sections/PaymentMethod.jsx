import styled from "styled-components";
import React, { useState } from "react";

const StyledPaymentMethod = styled.div`
    max-width: 35rem;
    margin: 1rem; 
    padding: 1rem;
    gap: 1rem;  
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 5rem;
    flex-direction: column;

   

  input {
    margin-right: 1rem;
  }

  label {
    margin-right: 1rem;
  }
`;

const PaymentMethod = () => {
  const [paymentMethod, setPayment] = useState("");

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  return (
    <div>
      <StyledPaymentMethod>
        <h2>Betalningssätt</h2>
        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Card"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="card">Card</label>
        </div>

        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Swish"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="swish">Swish</label>
        </div>

        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Klarna"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="klarna">Klarna</label>
        </div>
      </StyledPaymentMethod>
    </div>
  );
};

export default PaymentMethod;
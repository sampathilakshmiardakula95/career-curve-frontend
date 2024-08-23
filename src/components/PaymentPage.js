import React from 'react';

const PaymentPage = ({ cost }) => {
    return (
        <div>
            <h2>Payment Confirmation</h2>
            <p>Total cost: ${cost}</p>
            <button onClick={() => alert('Payment successful!')}>Pay Now</button>
        </div>
    );
};

export default PaymentPage;

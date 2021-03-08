import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ISnAFJCfgOPiA9lZe2ceVXZ2tvTBeh4kVXhum4rLLU9Jk52cWPg0En6xKEfoaF35YacBN4IgVZGRRoMl4Ulba3r00gbbVleAX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce Site"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total Price is ${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

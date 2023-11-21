import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51I9sjLKNvbgdSY1hN44CyoPXTqGoKK0sVVO1AYFDfnbdJaz4rFToQpLsLHPlAIlrr0UOvWEITeTCuzwacrf5aL6m00ZppIpdcC");
  }
  return stripePromise;
};

export default getStripe;
import {loadStripe} from '@stripe/stripe-js';

console.log('stripe api key:', process.env.REACT_APP_STRIPE_API_KEY)
export const stripePromise = loadStripe('pk_test_ZOM7AmHB1TNHJWYqvmGvFtNG00LdPH6tS6');
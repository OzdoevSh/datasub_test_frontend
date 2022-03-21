import {$host} from './index';

export const addPayment = async (card_number, expiration_date, cvv, amount) => {
  try {
    const {data} = await $host.post('/add', {card_number, expiration_date, cvv, amount})
    return data
  } catch (error) {
    console.log(error)
  }
  
}

export const getPayments = async () => {
  try {
    const {data} = await $host.get('/payments')
    return data
  } catch (error) {
    console.log(error)
  }
  
}
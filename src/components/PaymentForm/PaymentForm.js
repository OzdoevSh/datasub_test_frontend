import { 
  Box, 
  Container, 
  TextField, 
  Typography, 
  Button, 
  FormControl 
} from '@mui/material';

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { 
  cardNumberFormatter,
  expirationDateFormatter,
  deleteSpaces
} from '../../utils/formatters'
import { addPayment } from '../../http/paymentApi';



function PaymentForm(){

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const initialState = {
    cardNumber: ' ',
    expirationDate: '',
    cvv: '',
    amount: ''
  }

  const [values, setValues] = useState(initialState)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  
  

  const makePayment = async() => {
    const res = await addPayment(
      deleteSpaces(values.cardNumber.substring(0,19)), 
      values.expirationDate.substring(0,5), 
      values.cvv, 
      values.amount
    ) 
    const notify = () => toast.info(`Paid! Amount: ${res.amount} RUB`);
    notify()
    
  }

  return(
    <Container 
      fixed
      sx={{
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
      <Box 
        sx={{
          width: 700,
          height: 500,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
       
        }}
      >
        <Typography variant='h2' color='primary'>Make a payment</Typography>

        <FormControl sx={{width: '80%'}}>
          <TextField
            name="cardNumber"
            value={cardNumberFormatter(values.cardNumber)}
            label="Card number"
            {...register("cardNumber", {
              required: 'Required',
              minLength: {
                value: 19,
                message: 'Incorrect card number'
              },
            })}
            onChange={handleChange('cardNumber')}
           
          />

          <ErrorMessage
            errors={errors}
            name="cardNumber"
            render={({ message }) => <Typography align='left' style={{ color: 'red', fontSize: '12px' }}>{message}</Typography>}
          />
        </FormControl>
        
        <FormControl sx={{width: '80%'}}>
          <TextField
            name="expirationDate"
            value={expirationDateFormatter(values.expirationDate)}
            label="Expiration date"
            {...register("expirationDate", {
              required: 'Required',
              minLength: {
                value: 5,
                message: 'Incorrect expiration date'
              },
              pattern: {
                value: "(?:0[1-9]|1[0-2])/[0-9]{2}",
                message: "Недопустимая электронная почта"
              },
            })}
            onChange={handleChange('expirationDate')}
           
          />

          <ErrorMessage
            errors={errors}
            name="expirationDate"
            render={({ message }) => <Typography align='left' style={{ color: 'red', fontSize: '12px' }}>{message}</Typography>}
          />    
        </FormControl>
        
        <FormControl sx={{width: '80%'}}>
          <TextField
            name="cvv"
            type="number"
            value={values.cvv}
            label="CVV"
            {...register("cvv", {
              required: 'Required',
              minLength: {
                value: 3,
                message: 'Incorrect cvv. This must be 3 symbols'
              },
              maxLength: {
                value: 3,
                message: 'Incorrect cvv. This must be 3 symbols'
              }
            })}
            onChange={handleChange('cvv')}
          />
          <ErrorMessage
            errors={errors}
            name="cvv"
            render={({ message }) => <Typography align='left' style={{ color: 'red', fontSize: '12px' }}>{message}</Typography>}
          />
        </FormControl>

        <FormControl sx={{width: '80%'}}>
          <TextField
            name="amount"
            type="number"
            value={values.amount}
            label="Amount"
            {...register("amount", {
              required: 'Required',
            })}
            onChange={handleChange('amount')}
          />

          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => <Typography align='left' style={{ color: 'red', fontSize: '12px' }}>{message}</Typography>}
          />      
        </FormControl>

        <Button 
          sx={{
            width: '300px'
          }}
          variant='contained' 
          onClick={handleSubmit(makePayment)}
        > 
          Pay
        </Button>
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        info
        
      />
      
    </Container>
  )
}

export default PaymentForm
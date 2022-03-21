const { Typography } = require("@mui/material");
const { default: PaymentList } = require("../../components/PaymentList");

function PaymentsPage(){
  return(
    <div>
      <Typography 
        variant='h3' 
        color='primary' 
        sx={{marginTop: '20px'}}
      >
        Payment list
      </Typography>
      <PaymentList/>
    </div>
  )
}

export default PaymentsPage;
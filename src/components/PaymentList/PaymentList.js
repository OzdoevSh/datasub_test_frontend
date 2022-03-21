import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from '@mui/material'
import { replaceNumbers } from '../../utils/formatters';

const { getPayments } = require("../../http/paymentApi")

function PaymentList() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getPayments()
      setPayments(res)
    }
    fetchData();

  }, [])




  return (
    <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>

      <Table sx={{ width: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='right'>Card Number</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (

            <TableRow
              key={payment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{payment._id}</TableCell>
              <TableCell align="right">{replaceNumbers(String(payment.card_number))}</TableCell>
              <TableCell align="right">{payment.amount} RUB</TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PaymentList
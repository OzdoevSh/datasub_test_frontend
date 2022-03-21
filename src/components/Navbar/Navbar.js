import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

function Navbar(){

  let navigate = useNavigate()

  const handleNavigate = (prop) => {
    navigate(prop)
  }

  return(
    <AppBar position='static'>
      <Toolbar>
        <Typography 
          component='div' 
          onClick={() => handleNavigate('/')} 
          sx={{ 
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Main page
        </Typography>

        <Typography 
          component='div' 
          onClick={() => handleNavigate('/list')} 
          sx={{ 
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Payment list
        </Typography>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
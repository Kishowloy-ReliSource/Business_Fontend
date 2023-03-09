import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useLocation  } from 'react-router-dom';


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2196f3',
});

const StyledIconButton = styled(IconButton)({
  marginRight: '16px',
});


function Navbar(props) {
  const { title } = props;
  const navigate=useNavigate();
  const location =useLocation();
  
    console.log(location.pathname);
  const handleBackClick = () => {
      navigate(-1);
  };
  const logoutButton= () =>{
    navigate('/');
  }


  return (
    <StyledAppBar position="static">
      <Toolbar>
      {location.pathname!='/' &&
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBackClick}
          >
            <ArrowBackIcon />
          </StyledIconButton>
        }
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {location.pathname!='/' &&
        <Button variant='outlined' color='error' onClick={logoutButton}>
            Log Out
          </Button>
}
      </Toolbar>
      
    </StyledAppBar>
  );
}

export default Navbar;

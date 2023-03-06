import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
function DealerPanel() {
  const [clickedButton, setClickedButton] = useState('');

  const navigate= useNavigate();
  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
    if(buttonName=='Bike')
    {
        console.log(buttonName);
        navigate("/bikeCreate");

    }
    else if(buttonName=='Application')
    {
        navigate("/bikelease");
    }
  };

  return (
    <div className="container">
      <Button variant="primary" onClick={() => handleButtonClick('Bike')}>Create Bike</Button>
      <Button variant="primary" onClick={() => handleButtonClick('Application')}>Bike Lease Application</Button>
    </div>
  );
}

export default DealerPanel
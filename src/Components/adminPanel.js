import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

function AdminPanel() {
  const [clickedButton, setClickedButton] = useState('');
  const navigate= useNavigate();
  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
    if(buttonName=='Dealer')
    {
        console.log(buttonName);
        navigate("/dealercreate");

    }
    else if(buttonName=='Application')
    {
        console.log(buttonName);
        navigate("/lesseeApplicationShow");
    }
  };

  return (
    
    <div className="container">
      <Button variant="primary" className='me-5' onClick={() => handleButtonClick('Dealer')}>Create Dealer</Button>
      <Button variant="primary" className='me-5' onClick={() => handleButtonClick('Application')}>Show Lease Application List</Button>
    </div>
  );
}

export default AdminPanel
import { useNavigate  } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
function DealerPanel() {
  const navigate= useNavigate();
  const handleButtonClick = (buttonName) => {
    if(buttonName=='Bike')
    {
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

import { useNavigate } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel() {
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    if (buttonName == "Dealer") {
      console.log(buttonName);
      navigate("/dealercreate");
    } else if (buttonName == "Application") {
      console.log(buttonName);
      navigate("/lesseeApplicationShow");
    }
  };

  return (
    <div className="container">
      <Button
        variant="contained"
        sx={{ m: 4, height: 100, width: 200, p: 4 }}
        onClick={() => handleButtonClick("Dealer")}
      >
        Create Dealer
      </Button>
      <Button
        variant="contained"
        sx={{ m: 4, height: 100, width: 200, p: 4 }}
        onClick={() => handleButtonClick("Application")}
      >
        Show Lease Application
      </Button>
    </div>
  );
}

export default AdminPanel;

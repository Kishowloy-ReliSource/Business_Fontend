import { useNavigate } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";

function DealerPanel() {
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    if (buttonName == "Bike") {
      navigate("/bikeCreate");
    } else if (buttonName == "Application") {
      navigate("/bikelease");
    }
  };

  return (
    <div className="container">
      <Box
        sx={{
          p: 10,
          backgroundColor: "text.disabled",
        }}
      >
        <Button
          variant="primary"
          sx={{ m: 4 }}
          onClick={() => handleButtonClick("Bike")}
        >
          Create Bike
        </Button>
        <Button
          variant="primary"
          sx={{ m: 4 }}
          onClick={() => handleButtonClick("Application")}
        >
          Bike Lease Application
        </Button>
      </Box>
    </div>
  );
}
export default DealerPanel;

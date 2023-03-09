import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Select, { SeectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function BikeRegistrationForm() {
  const initialValues = {
    bikeName: "",
    bikeModel: "",
    bikeYear: "",
    bikeMileage: "40-50",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      return;
    }
    event.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL + "/bikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Successfully Bike created!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          navigate("/dealerpanel");
        } else {
          toast.success(response.status, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <label>
              Bike Name:
              <input
                required
                name="bikeName"
                type="text"
                value={formValues.bikeName}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <br />
            <label>
              Bike Model:
              <input
                required
                type="text"
                name="bikeModel"
                value={formValues.bikeModel}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <br />
            <label>
              Bike Year:
              <input
                required
                type="text"
                name="bikeYear"
                value={formValues.bikeYear}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <br />
            <label>
              Bike Mileage:
              <Select
                required
                variant="filled"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="bikeMileage"
                value={formValues.bikeMileage}
                label="Mileage"
                onChange={(event) => handleChange(event)}
              >
                <MenuItem value="40-50">40-50</MenuItem>
                <MenuItem value="50-60">50-60</MenuItem>
                <MenuItem value="60-70">60-70</MenuItem>
              </Select>
            </label>
            <br />

            <Button type="submit" variant="contained" sx={{ m: 2 }}>
              Register Bike
            </Button>
            <ToastContainer />
          </form>
        </Container>
        <ToastContainer />
      </Box>
    </div>
  );
}

export default BikeRegistrationForm;

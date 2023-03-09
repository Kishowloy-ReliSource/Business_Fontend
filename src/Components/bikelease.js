import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LesseeInfo from "./Others/lesseeInfo";
import CoLesseeInfo from "./Others/colesseeInfo";

function BikeLease() {
  const [brandData, setBrandData] = useState([]);
  const initialValues = {
    lesseeName: "",
    lesseeAddress: "",
    lesseePhone: "",
    lesseeMonthlyIncome: "",
    lesseeDOB: "",
    coLesseeName: "",
    coLesseeAddress: "",
    coLesseePhone: "",
    coLesseeMonthlyIncome: "",
    coLesseeDOB: "",
    downPayment: "",
    bike: null,
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.bike == null || formValues.bike < 0) {
      toast.error("Select a Bike", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } 
    else {
      fetch(process.env.REACT_APP_BASE_URL + "/lessees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formValues,
        }),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Lease Submitted", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } 
          else {
            throw new Error(response.status);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/bikes")
      .then((response) => response.json())
      .then((data) => setBrandData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <CssBaseline />
      <Box sx={{ m: 5 }}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <select
              required
              name="bike"
              value={formValues.bike}
              onChange={(event) => handleChange(event)}
            >
              <option value={-1}> Select a Bike</option>
              {brandData.map((brand, index) => (
                <option value={brand.id}>
                  {brand.brand} {brand.model} {brand.year} {brand.mileage}
                </option>
              ))}
            </select>
            <LesseeInfo formData={formValues} onChangeMethod={handleChange} />
            <CoLesseeInfo formData={formValues} onChangeMethod={handleChange} />

            <h2>Other Information</h2>
            <label>
              Down Payment:
              <input
                required
                name="downPayment"
                type="text"
                value={formValues.downPayment}
                onChange={(e) => handleChange(e)}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
          <ToastContainer />
        </Container>
      </Box>
    </div>
  );
}

export default BikeLease;

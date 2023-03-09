import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("0");
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  let selectedvalue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    selectedvalue = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "0") {
      fetch(process.env.REACT_APP_BASE_URL + "/admins/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      })
        .then((response) => {
          if (response.ok) {
            {
              navigate("/adminpannel");
            }
          } else {
            toast.error("Incorrect Email or Password", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            throw new Error("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (selectedOption === "1") {
      fetch(process.env.REACT_APP_BASE_URL + "/dealers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      })
        .then((response) => {
          if (response.ok) {
            navigate("/dealerpanel");
          } else {
            toast.error("Incorrect Email or Password", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            throw new Error("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ m: 2 }}>
        <Container style={{ background: "#f2f6fc" }} maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <label>
                <Form.Label>Email address</Form.Label>:
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={(event) => handleChange(event)}
                />
              </label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={(event) => handleChange(event)}
                />
              </label>
            </Form.Group>
            <label>
              <Form.Group></Form.Group>

              <Button type="submit" variant="contained" sx={{ mr: 2 }}>
                Log in
              </Button>

              <Select
                variant="filled"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedOption}
                label="Login As"
                onChange={handleOptionChange}
                sx={{ ml: 8 }}
              >
                <MenuItem value="0">Admin</MenuItem>
                <MenuItem value="1">Dealer</MenuItem>
              </Select>
              <ToastContainer />
            </label>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default Login;

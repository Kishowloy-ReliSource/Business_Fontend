import { Grid } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

function RegistrationForm() {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    phone: "",
    status: "",
    dob: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL + "/dealers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    })
      .then((response) => {
        console.log(response.status);
        if (response.ok) {
          toast.success("Dealer successfully created", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else if (response.status == 406) {
          toast.error("Email already in use", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          throw new Error("Email already in use");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Container maxWidth="bg" alignItems="center">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Name:
                <input
                  required
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={(event) => handleChang(event)}
                />
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Email:
                <input
                  required
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={(event) => handleChang(event)}
                />
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Password:
                <input
                  required
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={(event) => handleChang(event)}
                />
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Phone:
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={(event) => handleChang(event)}
                />
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Status:
                <select
                  name="status"
                  value={formValues.status}
                  onChange={(event) => handleChang(event)}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                Date of birth:
                <input
                  required
                  name="dob"
                  type="date"
                  value={formValues.dob}
                  onChange={(event) => handleChang(event)}
                />
              </label>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" sx={{ m: 2 }}>
                Submit
              </Button>
              <ToastContainer />
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
export default RegistrationForm;

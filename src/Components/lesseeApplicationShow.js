import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CssBaseline from "@mui/material/CssBaseline";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const bikeData = useRef([]);
  const foundItem = useRef([null]);

  useEffect(() => {
    loadLeaseData();
    loadBikeData();
  }, []);


  async function loadLeaseData(){
    await fetch(process.env.REACT_APP_BASE_URL +"/lessees")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }
  async function loadBikeData(){
    await fetch(process.env.REACT_APP_BASE_URL +"/bikes")
    .then((response) => response.json())
    .then((data) => (bikeData.current = data))
    .then((data) => setBrandData(data))
    .catch((error) => console.error(error));
  }
  function handleView(item) {
    foundItem.current = brandData.find((i) => i.id === item.bike_id);
    setSelectedItem(item);
    setShow(true);
    setShowModal(true);
  }

  function handleApprove(item) {
    fetch(`${process.env.REACT_APP_BASE_URL}/lessees/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apv: 1, id: item.id }),
    }).then((response) => {
      if (response.ok) {
        toast.success("Bike Lease Approved", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload(false);
      }
    });
  }

  function BikeInformation(bikeId) {
    let bike = brandData.find((i) => i.id === bikeId);
    if(bike)
    {
      return bike.brand + " " + bike.model + " ";  
    }
    else
    {
      return '';
    }
    
  }
  function IsApprove(apv) {
    if (apv == 0) {
      return (
        <TableCell align="right" sx={{ color: "warning.main" }}>
          Pending
        </TableCell>
      );
    } else
      return (
        <TableCell align="right" sx={{ color: "success.main" }}>
          Approved
        </TableCell>
      );
  }

  return (
    <>
      <div className="container">
        <CssBaseline />
        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  fontSize: "1.25rem",
                },
              }}
            >
              <TableCell>Name</TableCell>
              <TableCell align="right">Bike</TableCell>
              <TableCell align="right">Donwpayment</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow>
                <TableCell>{item.lesseename}</TableCell>
                <TableCell align="right">
                  {BikeInformation(item.bike_id)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.1rem",
                  }}
                >
                  {item.downpayment}
                </TableCell>
                {IsApprove(item.approved)}
                <TableCell align="right">
                  <Button variant="contained" onClick={() => handleView(item)}>
                    View
                  </Button>
                </TableCell>
                <TableCell align="right">
                  {item.approved == 0 && (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleApprove(item)}
                    >
                      Approve
                    </Button>
                  )}
                  {item.approved == 1 && (
                    <Button
                      variant="outlined"
                      disabled
                      onClick={() => handleApprove(item)}
                    >
                      Approved
                    </Button>
                  )}
                  <ToastContainer />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {showModal && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedItem.lesseename + " Application "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lessee Name: {selectedItem.lesseename}
              <br />
              Lessee Address: {selectedItem.lesseeaddress}
              <br />
              Lessee Down Payment: {selectedItem.downpayment}
              <br />
              Lessee Income: {selectedItem.lesseemonthlyincome}
              <br />
              Co-Lessee Income: {selectedItem.colesseename}
              <br />
              Co-Lessee Phone: {selectedItem.colessephone}
              <br />
              Bike:
              {foundItem.current.brand +
                " " +
                foundItem.current.model +
                " " +
                foundItem.current.year +
                " " +
                foundItem.current.mileage}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ItemList;

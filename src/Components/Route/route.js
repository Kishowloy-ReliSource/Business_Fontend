import React from "react";
import AdminPanel from "../adminPanel";
import Dealercreate from "../dealercreate";
import DealerPanel from "../dealerPanel";
import BikeCreate from "../bikeCreate";
import Bikelease from "../bikelease";
import Login from "../Login";
import Navbar from "../Navbar";
import Lesseeapplicationshow from "../lesseeApplicationShow";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function CustomRoute() {
  return (
    <BrowserRouter>
      <Navbar title="Bike Business Application" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminpannel" element={<AdminPanel />} />
        <Route path="/dealercreate" element={<Dealercreate />} />
        <Route path="/dealerpanel" element={<DealerPanel />} />
        <Route path="/bikecreate" element={<BikeCreate />} />
        <Route path="/bikelease" element={<Bikelease />} />
        <Route
          path="/lesseeApplicationShow"
          element={<Lesseeapplicationshow />}
        />
      </Routes>
    </BrowserRouter>
  );
}

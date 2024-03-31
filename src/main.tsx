import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Account from "./pages/Account.tsx";
import AddProperty from "./pages/AddProperty.tsx";
import App from "./pages/App.tsx";
import Booking from "./pages/Booking.tsx";
import Calendar from "./pages/Calendar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Draft from "./pages/Draft.tsx";
import EditProperty from "./pages/EditProperty.tsx";
import Integration from "./pages/Integration.tsx";
import PersonnelManagement from "./pages/PersonnelManagement.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import IndividualProperySummary from "./pages/IndvidualPropertySummary.tsx";
import Report from "./pages/Report.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/personnel" element={<PersonnelManagement />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/add" element={<AddProperty />} />
        <Route path="/portfolio/edit/:id" element={<EditProperty />} />
        <Route path="/portfolio/draft" element={<Draft />} />
        <Route path="/portfolio/:id" element={<IndividualProperySummary />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

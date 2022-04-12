import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Form from "../components/Form";

const Register = ({ setUser }) => {
  //   const navigate = useNavigate();
  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1>Register</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form
        afterSubmit={() => {
          setToDashboard(true);
          setUser(true);
        }}
      />
    </>
  );
};

export default Register;

import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import Button from "../components/Button";

const AllEmployeesQuery = gql`
  query {
    employess {
      id
      name
      lastname
    }
  }
`;

const Empleados = () => {
  const { data, error, loading } = useQuery(AllEmployeesQuery);

  if (loading) return <p>loading....</p>;
  // const [employee, setEmployee] = useState({
  //   name: "",
  //   lastname: "",
  //   cedula: "",
  //   phone: "",
  //   location: "",
  //   shirts: 2,
  //   boots: false,
  //   paid: false,
  // });

  return (
    <div className="">
      <p>hola</p>
    </div>
  );
};

export default Empleados;

import { useQuery, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import { createContext } from "../graphql/context";
import { initializeApollo } from "../lib/apollo";
import CreateEmployee from "../views/createEmployee";

const AllEmployeesQuery = gql`
  query {
    employees {
      id
      name
      lastname
    }
  }
`;

const Empleados = () => {
  const { data, error, loading } = useQuery(AllEmployeesQuery);
  console.log(data);

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
    <div className="bg-red-500">
      <CreateEmployee />
      <div className="layout">
        <Table />
      </div>
    </div>
  );
};

export default Empleados;

export const getStaticProps: GetStaticProps = async () => {
  const ctx = await createContext()
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: AllEmployeesQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

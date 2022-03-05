import { useQuery, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import Table from "../components/Table";
import { createContext } from "../graphql/context";
import { initializeApollo } from "../lib/apollo";
import CreateEmployee from "../views/createEmployee";

const AllEmployeesQuery = gql`
  query {
    allEmployees {
      id
      name
      lastname
      cedula
      phone
      location
      shirts
      boots
      paid
      casco
    }
  }
`;

const Empleados = () => {
  const { data, error, loading } = useQuery(AllEmployeesQuery);
  console.log(data);

  if (loading) return <p>loading....</p>;
 

  return (
    <div className="bg-gray-50 h-screen">
      <CreateEmployee />
      <div className="layout pt-5">
        <Table data={data}/>
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
    revalidate:10
  };
};

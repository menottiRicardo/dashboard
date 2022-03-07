import { useQuery, gql } from "@apollo/client";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
// import BottomSheet from "../components/employee/BottomSheet";
import Table from "../components/Table";
import { createContext } from "../graphql/context";
import { initializeApollo } from "../lib/apollo";
import CreateEmployee from "../views/createEmployee";

const BottomSheet = dynamic(
  () => import("../components/employee/BottomSheet")
);
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
  const [id, setId] = useState("");
  const [showBottom, setShowBottom] = useState(false);
  useEffect(() => {
    if (id !== "") {
      setShowBottom(true);
    }
  }, [id]);
  const { data, error, loading } = useQuery(AllEmployeesQuery);
  console.log(id);

  if (loading) return <p>loading....</p>;

  return (
    <div className="bg-gray-50 h-screen">
      <CreateEmployee />
      <div className="layout pt-5">
        <Table data={data} setId={setId} />
        {showBottom && (
          <BottomSheet
            isOpen={showBottom}
            open={() => setShowBottom(false)}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default Empleados;

export const getStaticProps: GetStaticProps = async () => {
  const ctx = await createContext();
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: AllEmployeesQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 10,
  };
};

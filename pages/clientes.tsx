import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ClientCard } from "../components/ClientCard";
import CreateClient from "../views/CreateClient";

const queryAllClients = gql`
  query {
    allClients {
      id
      name
      location
      image
      subClients {
        id
        name
      }
    }
  }
`;
const Clientes = () => {
  const { data, error, loading } = useQuery(queryAllClients);
  console.log(data);
  if (loading) {
    return (
      <div className="bg-gray-50">
        <CreateClient />
        <div className="layout">
          <h1 className="font-black text-3xl">Clientes</h1>
          <div className="bg-white rounded-xl shadow-md mt-4 relative animate-pulse">
            {/* image */}
            <div className="h-1/2 flex justify-center py-4">
              <div className="rounded-xl h-28 w-44 bg-gray-700"></div>
            </div>

            <div className="h-1/2 p-2 flex">
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md mt-4 relative animate-pulse">
            {/* image */}
            <div className="h-1/2 flex justify-center py-4">
              <div className="rounded-full h-28 w-44 bg-gray-700"></div>
            </div>

            <div className="h-1/2 p-2 flex">
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md mt-4 relative animate-pulse">
            {/* image */}
            <div className="h-1/2 flex justify-center py-4">
              <div className="rounded-xl h-28 w-44 bg-gray-700"></div>
            </div>

            <div className="h-1/2 p-2 flex">
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
              <div className="h-1 bg-slate-700 rounded w-1/3 mr-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-50">
      <CreateClient />
      <div className="layout">
        <h1 className="font-black text-3xl">Clientes</h1>
        {data?.allClients?.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Clientes;

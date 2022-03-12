// @ts-nocheck
import { gql, useMutation } from "@apollo/client";
import {
  ChevronDownIcon,
  ClipboardListIcon,
  PlusCircleIcon,
  PuzzleIcon,
  SaveIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import Sheet from "react-modal-sheet";
import Button from "../Button";

interface Props {
  isOpen: boolean;
  setOpen: () => void;
  client: any;
}
const BottomSheet = ({ isOpen, setOpen, client }: Props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState<String>("");
  const [create, { loading, error }] = useMutation(gql`
    mutation ($name: String!, $clientId: String!) {
      createSubClient(name: $name, clientId: $clientId) {
        name
        clientId
      }
    }
  `);

  const [deleteClient] = useMutation(gql`
    mutation ($deleteClientId: String!) {
      deleteClient(id: $deleteClientId) {
        id
      }
    }
  `);

  const addNewSubClient = async () => {
    if (name.length < 1) return;
    const variables = {
      name,
      clientId: client.id,
    };

    const mutate = await create({ variables });
    console.log("mutate", mutate);
  };

  const deleteClientById = async () => {
    if (client?.id === null) {
      return;
    }
    const variables = {
      deleteClientId: client.id,
    };
    const mutate = await deleteClient({ variables });
    setOpen();
  };
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={setOpen}
        snapPoints={[700, 400, 200, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="p-2">
              <div className="flex px-2">
                <div className="w-1/4">
                  <h1 className="font-black text-2xl">
                    {client.name}
                  </h1>
                  <p>{client.location}</p>
                </div>

                <div className="w-full relative">
                  <Image
                    src={"/building.jpg"}
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full bg-gray-500 h-[1px] mt-2"></div>
              <div
                className="flex justify-around items-center mt-2 px-2"
                onClick={() => setShow(!show)}
              >
                <h2 className="text-lg">Anadir nuevo Subcliente</h2>
                <ChevronDownIcon className="w-5" />
              </div>

              {show && (
                <div className="flex justify-around mt-2">
                  <div>
                    <label htmlFor="name" className="font-medium">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Pozuelo"
                      className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <PlusCircleIcon
                    className="w-5"
                    onClick={addNewSubClient}
                  />
                </div>
              )}

              <div className="w-full bg-gray-500 h-[1px] mt-2"></div>

              <div className="flex">
                <h2 className="text-lg p-2">Subclientes</h2>
                <ClipboardListIcon className="w-5" />
              </div>
              {client?.subClients?.map((sub) => (
                <div key={sub.id} className="flex space-x-1">
                  <PuzzleIcon className="w-5 text-black" />
                  <p className="text-gray-700" >
                    {sub.name}
                  </p>
                </div>
              ))}

              <div className="flex justify-around items-center mt-5">
                <Button
                  color="bg-white"
                  border="border-2 border-red-800 active:bg-red-900 transfrom transition-all active:text-white duration-75 active:scale-105 ease-out"
                  text={"Eliminar"}
                  textColor="text-black"
                  onClick={deleteClientById}
                  icon={
                    <XCircleIcon className="w-5 text-red-900 ml-2" />
                  }
                />
                <Button
                  color="bg-green-500"
                  border="border-2 border-green-500"
                  text={"Guardar"}
                  textColor="text-white"
                  onClick={() => console.log("")}
                  icon={
                    <SaveIcon className="w-5 text-white ml-2 transfrom transition-all duration-75 active:scale-105 ease-out" />
                  }
                />
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default BottomSheet;

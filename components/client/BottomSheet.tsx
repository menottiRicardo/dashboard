// @ts-nocheck
import { PlusCircleIcon } from "@heroicons/react/outline";
import React, { SetStateAction } from "react";
import Sheet from "react-modal-sheet";
import Button from "../Button";

interface Props {
  isOpen: boolean;
  setOpen: () => void;
  client: any;
}
const BottomSheet = ({ isOpen, setOpen, client }: Props) => {
  console.log(client);
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
              <h1 className="font-black text-2xl">{client.name}</h1>
              <p>{client.location}</p>
              <div className="w-full bg-gray-500 h-[1px] mt-2"></div>

              <div className="flex justify-around mt-2">
                <h2 className="text-xl">Sub Clientes</h2>
                <PlusCircleIcon className="w-5" />
              </div>
              {client?.subClients?.map((sub) => (
                <p>{sub.name}</p>
              ))}

              <div className="flex justify-around items-center mt-5">
                <Button
                  color="bg-red"
                  border="border-2 border-red-800"
                  text={"Eliminar"}
                  textColor="text-black"
                  onClick={() => console.log("")}
                />
                <Button
                  color="bg-green-500"
                  border="border-2 border-green-500"
                  text={"Guardar"}
                  textColor="text-black"
                  onClick={() => console.log("")}
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

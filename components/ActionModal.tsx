import React from "react";
import Button from "./Button";
import { XIcon } from "@heroicons/react/outline";

interface ActionModaProps {
  text: string;
  closeModal: () => void;
}
const ActionModal = ({ text, closeModal }: ActionModaProps) => {
  return (
    <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">

          {/* text */}
        <p className="font-medium text-xl">{text}</p>

        <div className="flex justify-around items-center mt-4">
          <Button
            color="bg-red-700"
            text={"Eliminar"}
            textColor="text-white"
            onClick={() => console.log("clicked")}
          />
          <Button
            color="bg-white-700"
            border="border-2 border-green-700"
            text={"Cancelar"}
            textColor="text-gren-700"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionModal;

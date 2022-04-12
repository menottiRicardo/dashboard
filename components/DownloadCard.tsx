import React, { useState } from "react";
import ActionModal from "./ActionModal";
import Button from "./Button";

interface DownloadCardProps {
  title: string;
  code: string;
}
const DownloadCard = ({ title, code }: DownloadCardProps) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const bg = show ? "bg-white" : "bg-gray-50";
  return (
    <div
      className={`${bg} m-2 rounded p-2 grid grid-cols-2 items-center shadow-md justify-items-center`}
      onClick={() => setShow(!show)}
    >
      {/* download name */}
      <h1 className="font-medium text-lg">{title}</h1>

      {/* download code */}
      <p className="font-light">{code}</p>
      {show && (
        <div className="w-full col-span-2">
          {/* names */}
          <div className="flex items-center justify-center">
            <div>
              <p className="">Ricardo Menotti</p>
              <p className="">Ricardo Menotti</p>
              <p className="">Ricardo Menotti</p>

              <div className="flex justify-center mt-2">
                <Button
                  color="bg-red-700"
                  text={"Eliminar"}
                  textColor="text-white"
                  onClick={() => setShowModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <ActionModal text="Seguro que deseas eliminar la descarga?" closeModal={() => setShowModal(false)}/>
      )}
    </div>
  );
};

export default DownloadCard;

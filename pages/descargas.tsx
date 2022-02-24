import React, { useState } from "react";
import Button from "../components/Button";
import DownloadCard from "../components/DownloadCard";
import Createdownload from "../views/Createdownload";

const Descargas = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <div className="bg-gray-50">
      <div className="flex items-center justify-center pt-2 layout">
        <Button
          color="bg-blueGray-900"
          text="Registrar Descarga"
          textColor="text-white"
          onClick={() => console.log("clicked")}
        />
      </div>
      {showRegisterModal && <Createdownload />}

      {/* week days */}
      <div className="layout">
        <div id="monday" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
          {/* downloads */}
          <div className="grid grid-cols-2 mt-2">
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
          </div>
        </div>
        <div id="tuesday" className="my-4">
          <h1>Martes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="wed" className="my-4">
          <h1>wed, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="thu" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="frid" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default Descargas;

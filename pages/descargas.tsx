import React from "react";
import Button from "../components/Button";

const Descargas = () => {
  return (
    <div className="layout">
      <div className="flex items-center justify-center pt-2">
        <Button
          color="bg-red-700"
          text="Registrar Descarga"
          textColor="text-white"
          onClick={() => console.log("clicked")}
        />
      </div>

      {/* week days */}

      <div id="monday" className="my-4">
        <h1>Lunes, 12</h1>
        <div className="bg-black w-full h-0.5"></div>
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
  );
};

export default Descargas;

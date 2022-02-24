import React, { useState } from "react";
import Button from "../components/Button";

const Empleados = () => {
  const [employee, setEmployee] = useState({
    name: "",
    lastname: "",
    cedula: "",
    phone: "",
    location: "",
    shirts: 2,
    boots: false,
    paid: false,
  });

  const handleInputs = (inputName, inputValue) => {
    if (inputName === "shirt") {
      setEmployee((prevState) => ({
        ...prevState,
        [inputName]: parseInt(inputValue),
      }));
    } else {
      setEmployee((prevState) => ({
        ...prevState,
        [inputName]: inputValue,
      }));
    }
  };
  return (
    <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
        {/* text */}
        {/* Select client */}
        <h1 className="font-black text-2xl flex justify-center pb-3">
          Registrar Empleado
        </h1>
        <form className="grid">
          {/* nombre */}
          <div className="flex">
            <label htmlFor="name" className="font-medium">
              Nombre:{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ricardo"
              className="border-3 border-blue-600 ml-1 outline-none mb-3"
              value={employee.name}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          {/* apellido */}
          <div className="flex">
            <label htmlFor="name" className="font-medium">
              Apellido:
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Menotti"
              className="border-3 border-blue-600 ml-1 outline-none mb-3"
              value={employee.lastname}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          {/* cedula */}
          <div className="flex">
            <label htmlFor="name" className="font-medium">
              Cedula:
            </label>
            <input
              type="text"
              name="cedula"
              placeholder="8-957-2190"
              className="border-3 border-blue-600 ml-1 outline-none mb-3"
              value={employee.cedula}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          {/* phone */}
          <div className="flex">
            <label htmlFor="name" className="font-medium">
              Telefono:
            </label>
            <input
              type="text"
              name="phone"
              placeholder="63760173"
              className="border-3 border-blue-600 ml-1 outline-none mb-3"
              value={employee.phone}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          {/* location */}
          <div className="flex">
            <label htmlFor="name" className="font-medium">
              Direccion:
            </label>
            <input
              type="text"
              name="location"
              placeholder="Las Cumbres"
              className="border-3 border-blue-600 ml-1 outline-none mb-3"
              value={employee.location}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>
        </form>
        <div className="flex justify-around items-center mt-4">
          <Button
            color="bg-white"
            border="border-2 border-red-800"
            text={"Cancelar"}
            textColor="text-black"
            onClick={() => console.log("clicked")}
          />
          <Button
            color="bg-green-700"
            text={"Crear"}
            textColor="text-white"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Empleados;
import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

const Createdownload = () => {
  const [client, setClient] = useState("pozuelo");
  const [employees, setEmployees] = useState(["ricardo"]);
  const [selectList, setSelectList] = useState([]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  //
  const searchEmployee = async (name: string) => {
    const searchByFirstName = employees.filter((employee) =>
      employee.includes(name)
    );
    setSelectList(searchByFirstName);
    console.log(searchByFirstName);
  };
  const selectEmployee = () => {
    console.log("employee");
  };

  const handleCancel = () => {
    setClient("");
    setShowRegisterModal(false);
  };
  return (
    <>
      <div className="flex items-center justify-center pt-2 layout">
        <Button
          color="bg-blueGray-900"
          text="Registrar Descarga"
          textColor="text-white"
          onClick={() => setShowRegisterModal(true)}
        />
      </div>
      {showRegisterModal && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
            {/* text */}
            {/* Select client */}

            <Dropdown
              initialValue={client}
              values={["pozuelo", "pabo", "avon"]}
              setValue={setClient}
            />
            <div className="relative">
              <input
                type="text"
                onChange={(e) => searchEmployee(e.target.value)}
                className="border-2 rounded-full border-blue-600 px-3 py-2 mt-4 focus:ring-4 focus:ring-blue-900"
              />
              {selectList.length > 0 && (
                <div className="bg-red-200 mt-3 absolute w-1/2 rounded-xl p-2">
                  {selectList.map((name) => (
                    <p
                      key={name}
                      onClick={(name) => selectEmployee()}
                    >
                      {name}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <form></form>
            <div className="flex justify-around items-center mt-4">
              <Button
                color="bg-white"
                border="border-2 border-red-800"
                text={"Cancelar"}
                textColor="text-black"
                onClick={handleCancel}
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
      )}
    </>
  );
};

export default Createdownload;

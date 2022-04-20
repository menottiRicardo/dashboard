import { gql, useQuery } from "@apollo/client";
import {
  FolderAddIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import DateInput from "../components/DateInput";
const AllEmployeesQuery = gql`
  query {
    allEmployees {
      id
      name
      lastname
    }
  }
`;

const AllSubclientsQuery = gql`
  query AllSubclients {
    allSubclients {
      id
      name
    }
  }
`;

const Createdownload = () => {
  const employees = useQuery(AllEmployeesQuery);
  const subclients = useQuery(AllSubclientsQuery);
  console.log(employees, subclients);
  const [client, setClient] = useState(
    subclients?.data?.allSubclients[0]?.name
  );
  const [dateValue, _dateValue] = useState(new Date());
  const [selected, setSelected] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  //
  const searchEmployee = async (name: string) => {
    if (name === "") return setSelectList([]);
    const searchByFirstName = employees.data.allEmployees.filter(
      (employee) => employee.name.toLowerCase().includes(name)
    );

    setSelectList(searchByFirstName);
  };
  const selectEmployee = (name) => {
    console.log(name);
    setSelected(selected.concat(name));
    setSelectList([]);
  };

  const handleCancel = () => {
    setClient("");
    setShowRegisterModal(false);
  };

  const deleteEmployee = (id: string) => {
    const filtered = selected.filter(
      (employee: any) => employee.id !== id
    );
    setSelected(filtered);
  };

  return (
    <>
      <div
        className="flex justify-between w-full bg-white p-2 rounded-xl"
        onClick={() => setShowRegisterModal(!showRegisterModal)}
      >
        <a className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-full p-2">
          Descarga
        </a>
        <FolderAddIcon className="w-6" />
      </div>
      {showRegisterModal && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-gray-100">
            {/* text */}
            {/* Select client */}
            <h1 className="font-bold text-xl p-2">Guardar Descarga</h1>
            <p className="text-gray-700">Seleciona el sub cliente:</p>
            <Dropdown
              initialValue={client}
              values={subclients.data.allSubclients}
              setValue={setClient}
            />

            <p className="text-gray-700 pt-4">
              Selecione los empleados:
            </p>
            <div className="relative w-full">
              <div className="bg-white mt-2 px-2 rounded-full flex justify-between">
                <SearchIcon className="w-5" />{" "}
                <input
                  type="text"
                  onChange={(e) => searchEmployee(e.target.value)}
                  className="rounded-full w-full px-3 py-2 outline-none"
                />
              </div>
              {/* <div className="bg-gray-100 mt-3 absolute p-2"> */}
              {selectList.length > 0 && (
                <div className="bg-slate-200 mt-3 absolute p-2 w-9/12 shadow-lg rounded-md z-10">
                  {selectList.map((emp) => (
                    <p
                      key={emp.id}
                      onClick={() => selectEmployee(emp)}
                      className="bg-white rounded-xl p-2 my-2 shadow-sm"
                    >
                      {emp.name} {emp.lastname}
                    </p>
                  ))}
                </div>
              )}
              {/* </div> */}
            </div>
            <div>
              {selected.length > 0 && (
                <div className="bg-white mt-3 p-2 shadow-xl rounded-md">
                  {selected.map((emp) => (
                    <div className="flex justify-between">
                      <p
                        key={emp.id}
                        onClick={() => selectEmployee(emp)}
                        className="p-2 text-primary-600 font-medium"
                      >
                        {emp.name} {emp.lastname}
                      </p>
                      <div
                        className="p-2"
                        onClick={() => deleteEmployee(emp.id)}
                      >
                        <XIcon className="w-5 text-red-600" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <DateInput selected={dateValue} _selected={_dateValue} />

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

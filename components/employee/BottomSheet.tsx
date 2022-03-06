// @ts-nocheck
import { useMutation, gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import Button from "../Button";

interface BottomSheetProps {
  open: () => void;
  isOpen: boolean;
  id?: String;
}

const GetEmployee = gql`
  query ($employeeId: String!) {
    employee(id: $employeeId) {
      name
      lastname
      cedula
      phone
      location
      shirts
      boots
      paid
      casco
    }
  }
`;
const BottomSheet = ({ open, isOpen, id }: BottomSheetProps) => {
  const [employee, setEmployee] = useState({
    name: "",
    lastname: "",
    cedula: "",
    phone: "",
    location: "",
    shirts: 0,
    boots: false,
    paid: false,
    casco: false,
  });

  const { data, error, loading } = useQuery(GetEmployee, {
    variables: { employeeId: id },
  });

  if (loading) {
    return <p>loading</p>;
  }

  const setToEdit = () => {
    const { __typename, ...restData } = data.employee;
    setEmployee({ ...employee, ...restData });
    console.log(restData);
  };
  console.log(employee);
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={open}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="px-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-black">
                  {data.employee.name} {data.employee?.lastname}
                </h1>

                <button
                  className="underline font-light"
                  onClick={setToEdit}
                >
                  Editar
                </button>
              </div>

              {/* nombre */}
              <div className="flex mt-3">
                <label htmlFor="name" className="font-medium">
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
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
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
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
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
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
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
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
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
                  value={employee.location}
                  onChange={(e) =>
                    handleInputs(e.target.name, e.target.value)
                  }
                />
              </div>

              {/* shirts */}
              <div className="flex">
                <label htmlFor="name" className="font-medium">
                  Sueteres:
                </label>
                <input
                  type="number"
                  name="shirts"
                  className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
                  value={employee.shirts}
                  onChange={(e) =>
                    handleInputs(e.target.name, e.target.value)
                  }
                />
              </div>

              <div className="flex justify-around">
                {/* botas */}
                <div>
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        boots: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="checkbox-1"
                    className="text-sm ml font-medium text-gray-900"
                  >
                    Botas
                  </label>
                </div>

                {/* casco */}
                <div>
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        casco: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="checkbox-2"
                    className="text-sm ml-3 font-medium text-gray-900"
                  >
                    Casco
                  </label>
                </div>

                {/* Pagado */}
                <div>
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        paid: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="checkbox-3"
                    className="text-sm ml-1 font-medium text-gray-900"
                  >
                    Pagado
                  </label>
                </div>
              </div>

              <div className="flex justify-around items-center mt-5">
                <Button
                  color="bg-red"
                  border="border-2 border-red-800"
                  text={"Cancelar"}
                  textColor="text-black"
                  onClick={() => open(false)}
                />
                <Button
                  color="bg-green-500"
                  border="border-2 border-green-500"
                  text={"Cancelar"}
                  textColor="text-black"
                  onClick={() => console.log("hola")}
                />
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BottomSheet;

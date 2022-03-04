import { useState } from "react";
import Button from "../components/Button";

const CreateClient = () => {
  const [client, setClient] = useState({
    name: "",
    location: "",
    image: "",
    subclient: [],
  });
  const [selectedFile, setSelectedFile] = useState<any>();
  const [close, setClose] = useState(true);
  const handleInputs = (inputName, inputValue) => {
    if (inputName === "shirt") {
      setClient((prevState) => ({
        ...prevState,
        [inputName]: parseInt(inputValue),
      }));
    } else {
      setClient((prevState) => ({
        ...prevState,
        [inputName]: inputValue,
      }));
    }
  };

  const createEmployee = async () => {
    // const variables: any = employee;
    // const mutate = await create({ variables });
    setClose(true);
    // setClient({
    //   name: "",
    //   lastname: "",
    //   cedula: "",
    //   phone: "",
    //   location: "",
    //   shirts: 0,
    //   boots: false,
    //   paid: false,
    // });
  };
  const fileHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  if (close) {
    return (
      <div className="flex items-center justify-center pt-4 bg-transparent">
        <Button
          color="bg-green-700"
          border=""
          text={"Registar"}
          textColor="text-white"
          onClick={() => setClose(false)}
        />
      </div>
    );
  }
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
              value={client.name}
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
              value={client.location}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="image" className="font-medium text-black">
              Imagen:
            </label>

            <input
              className="w-full file:rounded-2xl hover:file:bg-green-700 file:text-black file:bg-green-200 file:border-0 file:p-2 p-2"
              id="image"
              onChange={fileHandler}
              type="file"
            />
          </div>
        </form>
        <div className="flex justify-around items-center mt-4">
          <Button
            color="bg-white"
            border="border-2 border-red-800"
            text={"Cancelar"}
            textColor="text-black"
            onClick={() => setClose(true)}
          />
          <Button
            color="bg-green-700"
            text={"Crear"}
            textColor="text-white"
            onClick={createEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateClient;

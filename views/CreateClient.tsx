import { gql, useMutation } from "@apollo/client";
import {
  OfficeBuildingIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Button from "../components/Button";

const CreateClient = () => {
  const [client, setClient] = useState({
    name: "",
    location: "",
    image: "",
    subclient: "",
  });

  const [subclients, setSubclients] = useState([]);

  const [selectedFile, setSelectedFile] = useState<any>();
  const [close, setClose] = useState(true);

  const [create, { loading, error }] = useMutation(gql`
    mutation ($createClientInput: createClientInput!) {
      createClient(createClientInput: $createClientInput) {
        name
        location
        image
        subClients {
          name
        }
      }
    }
  `);

  const handleInputs = (inputName, inputValue) => {
    setClient((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const addSubClient = () => {
    setSubclients([...subclients, { name: client.subclient }]);
    setClient({ ...client, subclient: "" });
  };

  const createEmployee = async () => {
    // client.subclient = subclients[0];
    const { subclient, ...data } = client;
    const createClientInput = {
      ...data,
      subclients: subclients,
    };

    const variables: any = {
      createClientInput: {
        ...data,
        subClients: subclients,
      },
    };

    console.log(
      variables.createClientInput.subClients.map((i) =>
        console.log(i)
      )
    );
    try {
      const mutate = await create({ variables });
      console.log(mutate);
    } catch (error) {
      console.log(error);
    }

    console.log(error);
    setClose(true);
    setSubclients([]);
    setClient({
      name: "",
      location: "",
      image: "",
      subclient: "",
    });
  };
  const fileHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  if (close) {
    return (
      <div className="flex justify-between w-full bg-white p-2 rounded-xl" onClick={() => setClose(false)}>
        <a
          className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-full p-2"
          
        >
          Cliente
        </a>
        <OfficeBuildingIcon className="w-6" />
      </div>
    );
  }

  // console.log(subclients);
  return (
    <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
        {/* text */}
        {/* Select client */}
        <h1 className="font-black text-2xl flex justify-center pb-3">
          Nuevo Cliente
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
              placeholder="Metroclean Services"
              className="border-3 border-blue-600 ml-1 outline-none mb-3 w-9/12"
              value={client.name}
              autoComplete="off"
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
              placeholder="Panama Pacifico"
              autoComplete="off"
              className="border-3 border-blue-600 ml-1 outline-none mb-3 w-8/12"
              value={client.location}
              onChange={(e) =>
                handleInputs(e.target.name, e.target.value)
              }
            />
          </div>

          {/* sub clientes */}
          <div className="grid">
            <label htmlFor="name" className="font-medium">
              SubClientes:
            </label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                name="subclient"
                autoComplete="off"
                placeholder="Pozuelo"
                className="border-3 border-blue-600 ml-1 outline-none mb-3 w-8/12"
                value={client.subclient}
                onChange={(e) =>
                  handleInputs(e.target.name, e.target.value)
                }
              />

              <div className="p-2">
                <PlusIcon className="w-5" onClick={addSubClient} />
              </div>
            </div>
          </div>

          <div>
            {subclients?.map((sub) => (
              <p
                key={sub.name}
                className="bg-green-300 m-1 p-1 rounded-full flex items-center justify-center font-medium"
              >
                {sub.name}
              </p>
            ))}
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

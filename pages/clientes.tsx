import { MediumCard } from "../components/MediumCard";
import CreateClient from "../views/CreateClient";

const Clientes = () => {
  return (
    <div className="bg-gray-50">
      <CreateClient />
      <div className="layout">
        <h1 className="font-black text-3xl">Clientes</h1>

        <MediumCard />
      </div>
    </div>
  );
};

export default Clientes;

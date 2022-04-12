import {
  ChevronDownIcon,
  FolderAddIcon,
  MenuIcon,
  OfficeBuildingIcon,
  UserAddIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Createdownload from "../../views/Createdownload";
import CreateEmployee from "../../views/createEmployee";
const CreateClient = dynamic(
  () => import("../../views/CreateClient")
);
function Header() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();
  return (
    <header className="flex justify-between p-4 items-center shadow-xl bg-blueGray-300 z-50">
      {/* left section */}

      <div
        className="flex md:flex-grow cursor-pointer"
        onClick={() => router.reload()}
      >
        Metroclean
      </div>

      <button onClick={() => setShow(!show)}>
        <MenuIcon className="w-5" />
      </button>
      {show && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-gray-100">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-lg">Menu</h4>
              <XIcon
                onClick={() => {
                  setShow(false);
                  setShowRegister(false);
                }}
                className="w-5"
              />
            </div>

            <Link href={"/descargas"}>
              <a
                className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-full p-2"
                onClick={() => setShow(!show)}
              >
                Descargas
              </a>
            </Link>
            <Link href={"/empleados"}>
              <span
                className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-full p-2"
                onClick={() => setShow(!show)}
              >
                Empleados
              </span>
            </Link>
            <Link href={"/clientes"}>
              <a
                className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-full p-2"
                onClick={() => setShow(!show)}
              >
                Clientes
              </a>
            </Link>

            <div className="h-[1px] w-full bg-slate-400" />

            <div
              className="flex items-center justify-around mt-2 text-black"
              onClick={() => setShowRegister(!showRegister)}
            >
              <a className="cursor-pointer p-2 ">Registrar</a>
              <ChevronDownIcon className="w-5" />
            </div>

            {showRegister && (
              <div className="grid grid-cols-2 justify-items-center gap-2 mt-2">
                <CreateClient />

                <Createdownload />

                <CreateEmployee />
              </div>
            )}
          </div>
        </div>
      )}
      {/* {show && (
        <div className="fixed bg-black z-10 w-screen h-screen"></div>
      )} */}
    </header>
  );
}

export default Header;

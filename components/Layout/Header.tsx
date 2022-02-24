import Link from "next/link";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="flex justify-between p-4 items-center shadow-xl bg-blueGray-300 z-50">
      {/* left section */}
      <Link passHref href={"/"}>
        <div className="flex md:flex-grow cursor-pointer">
          Metroclean
        </div>
      </Link>
      <button onClick={() => setShow(!show)}>here</button>
      {show && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Menu</h4>
              <p onClick={() => setShow(!show)}>close</p>
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

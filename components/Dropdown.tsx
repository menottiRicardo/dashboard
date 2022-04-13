import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
interface DropdownProps {
  initialValue: string;
  values: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown = ({
  initialValue,
  values,
  setValue,
}: DropdownProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <button
        className="text-black bg-blue-300 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center w-full flex justify-center items-center"
        type="button"
        onClick={() => setShow(!show)}
      >
        {initialValue}
        <ChevronDownIcon className="w-5" />
      </button>

      {show && (
        <div
          id="dropdown"
          className="absolute z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 mt-2"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            {values.map((val) => (
              <li
                key={val}
                onClick={() => (setShow(false), setValue(val))}
              >
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {val}
                </a>
              </li>
            ))}

            {/* <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

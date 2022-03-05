import { Employee } from "@prisma/client";
import React from "react";

const Table = ({ data }) => {
  const employees = data?.allEmployees;
  console.log(employees)
  const tableTitles = Object.keys(employees?.[0]).slice(2);
  console.log(tableTitles)
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 rounded-md">
                <tr>
                  {tableTitles.map((value) => (
                    <th
                      key={value}
                      scope="col"
                      className="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 first:rounded-tl-xl last:rounded-tr-xl text-xs"
                    >
                      {value}
                    </th>
                  ))}

                  <th scope="col" className="relative py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee:Employee) => (
                  <tr key={employee.id} className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600 first:rounded-tl-xl last:rounded-tr-xl">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {employee.name}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {employee.lastname}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {employee?.cedula}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.phone}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.location}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.shirts?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.boots?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.paid?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {employee?.casco?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}     
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

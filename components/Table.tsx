import { Employee } from "@prisma/client";
import React, { memo, SetStateAction } from "react";

interface TableProps {
  data: any;
  setId: React.Dispatch<SetStateAction<string>>
}
const Table = ({ data, setId }: TableProps) => {
  const employees = data?.allEmployees;
  const tableTitles = Object.keys(employees?.[0]).slice(2);
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-100 rounded-md">
                <tr>
                  {tableTitles.map((value) => (
                    <th
                      key={value}
                      scope="col"
                      className="py-3 px-6 font-medium tracking-wider text-left text-gray-800 uppercase first:rounded-tl-xl last:rounded-tr-xl text-xs"
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
                  <tr key={employee.id} className="border-b odd:bg-white even:bg-gray-50 first:rounded-tl-xl last:rounded-tr-xl">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {employee.lastname}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {employee?.cedula}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.phone}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.location}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.shirts?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.boots?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.paid?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {employee?.casco?.toString()}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <p
                        onClick={() => setId(employee.id)}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </p>
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

export default memo(Table);

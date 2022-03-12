import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const BottomSheet = dynamic(() => import("./client/BottomSheet"));
interface CardProps {
  client?: {
    name: string;
    location: string;
  };
}
export const ClientCard = ({ client }: CardProps) => {
  // bottom sheet
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="bg-white rounded-xl shadow-md mt-4 relative"
        onClick={() => setOpen(true)}
      >
        {/* image */}
        <div className="h-1/2">
          <Image
            src={"/building.jpg"}
            layout="responsive"
            width={350}
            height={200}
            className="h-1/2 rounded-t-md"
          />
        </div>

        <div className="h-1/2 flex justify-between p-2">
          <h1 className="font-medium">{client.name}</h1>
          <p>{client.location}</p>
          <p>2021</p>
        </div>
      </div>
      {isOpen && (
        <BottomSheet
          isOpen={isOpen}
          setOpen={() => setOpen(false)}
          client={client}
        />
      )}
    </>
  );
};

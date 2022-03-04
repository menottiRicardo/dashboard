import Image from "next/image";
import { useState } from "react";
import BottomSheet from "./BottomSheet";

interface CardProps {
  size?: String;
}
export const MediumCard = ({ size }: CardProps) => {
  const [showBottom, setShowBottom] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-md mt-4 relative"
        onClick={() => setShowBottom(true)}
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
          <h1 className="font-medium">Blu Logistics</h1>
          <p>Location</p>
          <p>year</p>
        </div>
      </div>
      {showBottom && (
        <BottomSheet
          open={() => setShowBottom(!showBottom)}
          isOpen={showBottom}
        />
      )}
    </>
  );
};

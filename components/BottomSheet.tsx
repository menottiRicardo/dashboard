// @ts-nocheck
import { useRef } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";

interface BottomSheetProps {
  open: () => void;
  isOpen: boolean;
}
const BottomSheet = ({ open, isOpen }: BottomSheetProps) => {

  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={open}
        snapPoints={[700, 400, 100, 0]}
        initialSnap={1}
    
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="px-3">
                <h1 className="text-xl font-medium">Sub Clientes</h1>
                <p>g</p>
                <p>k</p>
                <p>k</p>
                <p>k</p>
                <p>k</p>
                <p>k</p>
                <p>k</p>
                <p>k</p>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BottomSheet;

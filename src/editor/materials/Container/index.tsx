import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

const Container = ({ children, id }: CommonComponentProps) => {
  const { drop } = useMaterialDrop(["Button", "Container"], id);
  return (
    <div
      ref={drop as any}
      className="border-[1px] border-[#000] min-h-[100px] p-[20px]"
    >
      {children}
    </div>
  );
};

export default Container;

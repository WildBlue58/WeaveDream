import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

function Page({ id, children }: CommonComponentProps) {
  const { drop } = useMaterialDrop(["Button", "Container"], id);
  return (
    <div ref={drop as any} className="p-[20px] h-[100%] box-border">
      {children}
    </div>
  );
}
export default Page;

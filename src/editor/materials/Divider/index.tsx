import { Divider as AntdDivider } from "antd";
import type { CommonComponentProps } from "../../interface";

export interface DividerProps {
  type?: "horizontal" | "vertical";
  orientation?: "left" | "right" | "center";
  plain?: boolean;
  text?: string;
}

const Divider = ({
  type,
  orientation,
  plain,
  text,
  id: _id,
  name: _name,
}: DividerProps & CommonComponentProps) => {
  return (
    <AntdDivider
      type={type || "horizontal"}
      orientation={orientation}
      plain={plain}
    >
      {text}
    </AntdDivider>
  );
};

export default Divider;

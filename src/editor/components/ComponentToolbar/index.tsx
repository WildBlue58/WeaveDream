import { Button, Tooltip } from "antd";
import {
  DeleteOutlined,
  CopyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { useComponentsStore, getComponentById } from "../../stores/components";

interface ComponentToolbarProps {
  componentId: number;
  position: { top: number; left: number };
  onClose: () => void;
}

export function ComponentToolbar({
  componentId,
  position,
  onClose,
}: ComponentToolbarProps) {
  const {
    components,
    deleteComponent,
    copyComponent,
    moveComponentUp,
    moveComponentDown,
  } = useComponentsStore();

  const component = getComponentById(componentId, components);
  if (!component) return null;

  // 检查是否可以上移/下移
  const canMove = checkCanMove(component, components);

  const handleDelete = () => {
    deleteComponent(componentId);
    onClose();
  };

  const handleCopy = () => {
    copyComponent(componentId);
  };

  const handleMoveUp = () => {
    moveComponentUp(componentId);
  };

  const handleMoveDown = () => {
    moveComponentDown(componentId);
  };

  return (
    <div
      className="absolute scale-in transition-all duration-200"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 1070,
        borderRadius: "var(--radius-lg)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "1px solid var(--border-color-light)",
        boxShadow: "var(--shadow-lg)",
        padding: "var(--spacing-xs)",
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-xs)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Tooltip title="删除">
        <Button
          type="text"
          size="small"
          danger
          icon={<DeleteOutlined />}
          onClick={handleDelete}
          className="transition-all duration-200 hover:scale-110"
          style={{
            borderRadius: "var(--radius-sm)",
          }}
        />
      </Tooltip>
      <Tooltip title="复制">
        <Button
          type="text"
          size="small"
          icon={<CopyOutlined />}
          onClick={handleCopy}
          className="transition-all duration-200 hover:scale-110"
          style={{
            borderRadius: "var(--radius-sm)",
            color: "var(--text-secondary)",
          }}
        />
      </Tooltip>
      <Tooltip title="上移">
        <Button
          type="text"
          size="small"
          icon={<ArrowUpOutlined />}
          onClick={handleMoveUp}
          disabled={!canMove.canMoveUp}
          className="transition-all duration-200 hover:scale-110"
          style={{
            borderRadius: "var(--radius-sm)",
            color: "var(--text-secondary)",
          }}
        />
      </Tooltip>
      <Tooltip title="下移">
        <Button
          type="text"
          size="small"
          icon={<ArrowDownOutlined />}
          onClick={handleMoveDown}
          disabled={!canMove.canMoveDown}
          className="transition-all duration-200 hover:scale-110"
          style={{
            borderRadius: "var(--radius-sm)",
            color: "var(--text-secondary)",
          }}
        />
      </Tooltip>
    </div>
  );
}

/**
 * 检查组件是否可以移动
 */
function checkCanMove(
  component: any,
  components: any[]
): { canMoveUp: boolean; canMoveDown: boolean } {
  if (!component.parentId) {
    // 顶级组件，检查在顶级数组中的位置
    const index = components.findIndex((c) => c.id === component.id);
    return {
      canMoveUp: index > 0,
      canMoveDown: index < components.length - 1,
    };
  }

  // 找到父组件
  const findParent = (comps: any[]): any => {
    for (const comp of comps) {
      if (comp.id === component.parentId) return comp;
      if (comp.children) {
        const found = findParent(comp.children);
        if (found) return found;
      }
    }
    return null;
  };

  const parent = findParent(components);
  if (!parent || !parent.children) {
    return { canMoveUp: false, canMoveDown: false };
  }

  const siblings = parent.children;
  const index = siblings.findIndex((c: any) => c.id === component.id);

  return {
    canMoveUp: index > 0,
    canMoveDown: index < siblings.length - 1,
  };
}

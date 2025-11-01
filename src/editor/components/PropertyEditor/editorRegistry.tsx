/**
 * 属性编辑器注册表
 *
 * 使用注册表模式管理组件类型与编辑器组件的映射关系
 * 支持动态注册和查找编辑器组件
 */
import {
  TextEditor,
  InputEditor,
  ImageEditor,
  ButtonEditor,
  TitleEditor,
  CardEditor,
  ContainerEditor,
  PageEditor,
  DividerEditor,
} from "./editors";
import type { PropertyEditorProps } from "./types";
import type { ReactElement } from "react";

type EditorComponent = (props: PropertyEditorProps) => ReactElement;

const editorMap: Record<string, EditorComponent> = {
  Text: TextEditor,
  Input: InputEditor,
  Image: ImageEditor,
  Button: ButtonEditor,
  Title: TitleEditor,
  Card: CardEditor,
  Container: ContainerEditor,
  Page: PageEditor,
  Divider: DividerEditor,
};

/**
 * 根据组件名称获取对应的属性编辑器
 *
 * @param componentName - 组件名称（如 'Button', 'Text' 等）
 * @returns 对应的编辑器组件，如果不存在则返回 null
 */
export function getEditor(componentName: string): EditorComponent | null {
  return editorMap[componentName] || null;
}

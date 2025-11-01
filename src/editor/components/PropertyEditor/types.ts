import type { Component } from "../../stores/components";

export interface PropertyEditorProps {
  component: Component;
  currentProps: any;
  handleChange: (field: string, value: any) => void;
}


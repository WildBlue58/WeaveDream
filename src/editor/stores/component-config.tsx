import { create } from "zustand";
import Page from "../materials/Page";
import Container from "../materials/Container";
import Button from "../materials/Button";
import Text from "../materials/Text";
import Input from "../materials/Input";
import Image from "../materials/Image";
import Card from "../materials/Card";
import Divider from "../materials/Divider";
import Title from "../materials/Title";

export interface ComponentConfig {
  name: string;
  // 对象的类型
  defaultProps: Record<string, any>;
  component: any;
}

interface State {
  componentConfig: { [key: string]: ComponentConfig };
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Container: {
      name: "Container",
      defaultProps: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        gap: 0,
        padding: 16,
        margin: 0,
        borderRadius: 8,
      },
      component: Container,
    },
    Button: {
      name: "Button",
      defaultProps: {
        type: "primary",
        text: "按钮",
        size: "middle",
        disabled: false,
        loading: false,
        danger: false,
        block: false,
        shape: "default",
      },
      component: Button,
    },
    Page: {
      name: "Page",
      defaultProps: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        gap: 0,
        padding: 32,
        margin: 0,
        minHeight: 600,
      },
      component: Page,
    },
    Text: {
      name: "Text",
      defaultProps: {
        content: "文本内容",
        fontSize: 14,
        color: "#000000",
        fontWeight: "normal",
        textAlign: "left",
        lineHeight: 1.5,
        textDecoration: "none",
        fontStyle: "normal",
      },
      component: Text,
    },
    Input: {
      name: "Input",
      defaultProps: {
        placeholder: "请输入内容",
        size: "middle",
        disabled: false,
        type: "text",
        allowClear: false,
      },
      component: Input,
    },
    Image: {
      name: "Image",
      defaultProps: {
        src: "https://via.placeholder.com/300x200?text=请设置图片URL",
        width: 300,
        height: 200,
        alt: "图片",
        objectFit: "cover",
        borderRadius: 0,
        shadow: false,
      },
      component: Image,
    },
    Card: {
      name: "Card",
      defaultProps: {
        title: "卡片标题",
        bordered: true,
        hoverable: false,
        size: "default",
      },
      component: Card,
    },
    Divider: {
      name: "Divider",
      defaultProps: {
        type: "horizontal",
        orientation: "center",
        plain: false,
      },
      component: Divider,
    },
    Title: {
      name: "Title",
      defaultProps: {
        level: 1,
        text: "标题",
        textAlign: "left",
        fontWeight: "normal",
        ellipsis: false,
      },
      component: Title,
    },
  },
  // 添加配置
  registerComponent: (name, componentConfig) =>
    set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      };
    }),
}));

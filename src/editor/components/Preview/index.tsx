import { Modal } from 'antd';
import { useComponentsStore } from '../../stores/components';
import { useComponentConfigStore } from '../../stores/component-config';
import type { Component } from '../../stores/components';
import React from 'react';

interface PreviewProps {
  open: boolean;
  onClose: () => void;
}

export function Preview({ open, onClose }: PreviewProps) {
  const { components } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];
      if (!config?.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          key: component.id,
          id: component.id,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || [])
      );
    });
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width="95vw"
      style={{ 
        top: 20,
        borderRadius: 'var(--radius-xl)',
      }}
      bodyStyle={{ 
        padding: 0, 
        height: '90vh', 
        overflow: 'auto',
        backgroundColor: 'var(--bg-primary)',
      }}
      styles={{
        content: {
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
        }
      }}
    >
      <div 
        className="w-full min-h-full p-8 transition-all duration-200"
        style={{ 
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        {renderComponents(components)}
      </div>
    </Modal>
  );
}


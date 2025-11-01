import {
  useMemo
} from 'react';
import { useComponentConfigStore } from '../../stores/component-config';
import {
  MaterialItem 
} from '../MaterialItem'

// 组件分类配置
const componentCategories = {
  '布局组件': ['Page', 'Container', 'Card'],
  '基础组件': ['Button', 'Text', 'Title', 'Input', 'Image', 'Divider'],
};

export function Material() {
  const { componentConfig } = useComponentConfigStore();
  const components = useMemo(() => {
    return Object.values(componentConfig);
  }, [componentConfig])

  // 按分类组织组件
  const categorizedComponents = useMemo(() => {
    const result: { [key: string]: typeof components } = {};
    Object.keys(componentCategories).forEach(category => {
      result[category] = components.filter(c => 
        componentCategories[category as keyof typeof componentCategories].includes(c.name)
      );
    });
    return result;
  }, [components]);

  return (
    <div 
      className="h-full flex flex-col transition-all duration-200"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* 标题栏 */}
      <div 
        className="px-4 py-4 border-b transition-all duration-200"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color-light)',
          boxShadow: 'var(--shadow-xs)',
        }}
      >
        <h2 
          className="text-base font-semibold transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
          组件库
        </h2>
      </div>
      
      {/* 组件列表 */}
      <div 
        className="flex-1 overflow-y-auto p-3 transition-all duration-200"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {Object.entries(categorizedComponents).map(([category, items]) => (
          items.length > 0 && (
            <div key={category} className="mb-6">
              <div 
                className="text-xs font-semibold mb-3 px-2 uppercase tracking-wide transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
              >
                {category}
              </div>
              <div className="space-y-2">
                {items.map(item => (
                  <MaterialItem name={item.name} key={item.name} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
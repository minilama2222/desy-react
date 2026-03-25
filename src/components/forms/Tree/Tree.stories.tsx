import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tree, type TreeItemData } from './Tree';

const meta: Meta<typeof Tree> = {
  title: 'Forms/Tree',
  component: Tree,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tree component with hierarchical checkboxes or radio buttons.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['checkbox', 'radio', 'navigation'],
    },
    hasDividers: { control: 'boolean' },
    expandedFirstLevel: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tree>;

// Helper to update a nested item in the tree
function updateNestedItem(items: TreeItemData[], targetId: string, updates: Partial<TreeItemData>): TreeItemData[] {
  return items.map((item) => {
    if (item.id === targetId) {
      return { ...item, ...updates };
    }
    if (item.items) {
      return { ...item, items: updateNestedItem(item.items, targetId, updates) };
    }
    return item;
  });
}

const simpleTreeItems: TreeItemData[] = [
  {
    id: 'tree-checkbox-1-row-1',
    name: 'Opción 1',
    value: 'opcion-1',
    items: [
      { id: 'tree-checkbox-1-row-2', name: 'Opción 1.1', value: 'opcion-1-1' },
      { id: 'tree-checkbox-1-row-3', name: 'Opción 1.2', value: 'opcion-1-2' },
    ],
  },
  {
    id: 'tree-checkbox-1-row-4',
    name: 'Opción 2',
    value: 'opcion-2',
    items: [
      { id: 'tree-checkbox-1-row-5', name: 'Opción 2.1', value: 'opcion-2-1' },
      { id: 'tree-checkbox-1-row-6', name: 'Opción 2.2', value: 'opcion-2-2' },
    ],
  },
];

const simpleTreeDisabledItems: TreeItemData[] = [
  {
    id: 'tree-checkbox-2-row-1',
    name: 'Opción 1',
    value: 'opcion-1',
    disabled: true,
    items: [
      { id: 'tree-checkbox-2-row-2', name: 'Opción 1.1', value: 'opcion-1-1', disabled: true },
      { id: 'tree-checkbox-2-row-3', name: 'Opción 1.2', value: 'opcion-1-2', disabled: true },
    ],
  },
  {
    id: 'tree-checkbox-2-row-4',
    name: 'Opción 2',
    value: 'opcion-2',
    items: [
      { id: 'tree-checkbox-2-row-5', name: 'Opción 2.1', value: 'opcion-2-1' },
      { id: 'tree-checkbox-2-row-6', name: 'Opción 2.2', value: 'opcion-2-2' },
    ],
  },
];

export const ArbolSimple: Story = {
  render: (args) => {
    const [items, setItems] = useState<TreeItemData[]>(args.items || []);
    return (
      <Tree
        {...args}
        items={items}
        onChange={(changedItem) => {
          setItems((prev) => updateNestedItem(prev, changedItem.id || '', { checked: changedItem.checked }));
        }}
      />
    );
  },
  args: {
    id: 'tree-checkbox-1',
    name: 'tree-options-1',
    type: 'checkbox',
    items: simpleTreeItems,
    expandedFirstLevel: true,
    hasDividers: true,
  },
};

export const ArbolSimpleDisabled: Story = {
  render: (args) => {
    const [items, setItems] = useState<TreeItemData[]>(args.items || []);
    return (
      <Tree
        {...args}
        items={items}
        onChange={(changedItem) => {
          setItems((prev) => updateNestedItem(prev, changedItem.id || '', { checked: changedItem.checked }));
        }}
      />
    );
  },
  args: {
    id: 'tree-checkbox-2',
    name: 'tree-options-2',
    type: 'checkbox',
    items: simpleTreeDisabledItems,
    expandedFirstLevel: true,
    hasDividers: true,
  },
};

export const ArbolSimpleConTodosLosElementosInicialExpandidos: Story = {
  render: (args) => {
    const [items, setItems] = useState<TreeItemData[]>(
      (args.items || []).map((item: TreeItemData) => ({
        ...item,
        expanded: true,
        items: item.items?.map((c: TreeItemData) => ({ ...c, expanded: true })),
      }))
    );
    return (
      <Tree
        {...args}
        items={items}
        onChange={(changedItem) => {
          setItems((prev) => updateNestedItem(prev, changedItem.id || '', { checked: changedItem.checked }));
        }}
      />
    );
  },
  args: {
    id: 'tree-checkbox-3',
    name: 'tree-options-3',
    type: 'checkbox',
    items: simpleTreeItems,
    hasDividers: true,
  },
};

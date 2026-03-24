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

const checkboxItems = [
  {
    id: 'opt-1',
    name: 'Opción 1',
    value: 'opt1',
    checked: false,
    items: [
      { id: 'opt-1-1', name: 'Sub-opción 1.1', value: 'opt1-1', checked: false },
      { id: 'opt-1-2', name: 'Sub-opción 1.2', value: 'opt1-2', checked: false },
    ],
  },
  {
    id: 'opt-2',
    name: 'Opción 2',
    value: 'opt2',
    checked: true,
    expanded: true,
    items: [
      { id: 'opt-2-1', name: 'Sub-opción 2.1', value: 'opt2-1', checked: true },
      { id: 'opt-2-2', name: 'Sub-opción 2.2', value: 'opt2-2', checked: false },
    ],
  },
  {
    id: 'opt-3',
    name: 'Opción 3 (deshabilitada)',
    value: 'opt3',
    disabled: true,
    checked: false,
  },
];

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

export const Default: Story = {
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
    id: 'tree-checkbox',
    name: 'tree-options',
    type: 'checkbox',
    items: checkboxItems,
    hasDividers: true,
    expandedFirstLevel: true,
  },
};

export const Radio: Story = {
  render: (args) => {
    const [items, setItems] = useState<TreeItemData[]>(
      (args.items || []).map((item: TreeItemData) => ({
        ...item,
        checked: false,
        items: item.items?.map((c: TreeItemData) => ({ ...c, checked: false })),
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
    id: 'tree-radio',
    name: 'tree-radio-options',
    type: 'radio',
    items: checkboxItems,
    expandedFirstLevel: true,
  },
};

export const Navigation: Story = {
  args: {
    id: 'tree-navigation',
    type: 'navigation',
    items: [
      {
        id: 'nav-1',
        name: 'Inicio',
        value: 'home',
        href: '/',
        expanded: true,
        items: [
          { id: 'nav-1-1', name: 'Sub-página 1', value: 'sub1', href: '/sub1' },
          { id: 'nav-1-2', name: 'Sub-página 2', value: 'sub2', href: '/sub2' },
        ],
      },
      {
        id: 'nav-2',
        name: 'Servicios',
        value: 'services',
        href: '/services',
        items: [
          { id: 'nav-2-1', name: 'Servicio A', value: 'service-a', href: '/services/a' },
          { id: 'nav-2-2', name: 'Servicio B', value: 'service-b', href: '/services/b' },
        ],
      },
    ],
  },
};

export const ThreeLevels: Story = {
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
    id: 'tree-three-levels',
    type: 'checkbox',
    name: 'three-levels',
    expandedFirstLevel: true,
    hasDividers: true,
    items: [
      {
        id: 'level-1',
        name: 'Nivel 1',
        value: 'level1',
        items: [
          {
            id: 'level-1-1',
            name: 'Nivel 2 - A',
            value: 'level1-a',
            items: [
              { id: 'level-1-1-a', name: 'Nivel 3 - A', value: 'level1-a-a' },
              { id: 'level-1-1-b', name: 'Nivel 3 - B', value: 'level1-a-b' },
            ],
          },
          { id: 'level-1-2', name: 'Nivel 2 - B', value: 'level1-b' },
        ],
      },
    ],
  },
};

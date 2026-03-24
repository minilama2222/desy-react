import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'Forms/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legendText: 'Please enter your contact details',
    children: (
      <div>
        <p>Form fields would go here</p>
      </div>
    ),
  },
};

export const WithLegendData: Story = {
  args: {
    legendData: {
      text: 'What is your phone number?',
      classes: 'c-h1 mb-sm',
      isPageHeading: true,
      headingLevel: 1,
    },
    className: 'p-base bg-warning-light',
    children: (
      <div>
        <label htmlFor="contact-phone" className="block mb-sm">Número de teléfono</label>
        <input id="contact-phone" name="contact-phone" type="text" className="c-input form-input mt-sm" />
      </div>
    ),
  },
};

export const WithFieldset: Story = {
  args: {
    legendData: {
      text: 'Address',
      isPageHeading: true,
      headingLevel: 2,
    },
    children: (
      <div>
        <div className="mb-sm">
          <label htmlFor="street" className="block mb-xs">Street</label>
          <input id="street" name="street" type="text" className="c-input form-input" />
        </div>
        <div>
          <label htmlFor="city" className="block mb-xs">City</label>
          <input id="city" name="city" type="text" className="c-input form-input" />
        </div>
      </div>
    ),
  },
};

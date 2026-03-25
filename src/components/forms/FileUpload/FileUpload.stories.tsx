import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const PorDefecto: Story = {
  args: {
    id: 'file-upload-1',
    name: 'file-upload-1',
    labelText: 'Sube un archivo',
    hintText: 'Tamaño máximo: 50MB',
  },
};

export const ConError: Story = {
  args: {
    id: 'file-upload-2',
    name: 'file-upload-2',
    labelText: 'Sube un archivo',
    errorMessageText: 'El archivo no es válido.',
  },
};

export const ConAccept: Story = {
  args: {
    id: 'file-upload-3',
    name: 'file-upload-3',
    labelText: 'Sube tu CV',
    hintText: 'Tamaño máximo: 2MB',
    accept: '.pdf,.doc,.docx',
  },
};

export const ConHintPersonalizado: Story = {
  args: {
    id: 'file-upload-4',
    name: 'file-upload-4',
    labelText: 'Sube tu fotografía',
    hintText: 'Formatos permitidos: JPG, PNG. Tamaño máximo: 5MB',
    accept: '.jpg,.jpeg,.png',
  },
};

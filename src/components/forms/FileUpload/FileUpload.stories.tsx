import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    id: 'file-upload',
    name: 'document',
    labelText: 'Upload a document',
  },
};

export const WithAccept: Story = {
  args: {
    id: 'pdf-upload',
    name: 'pdf-file',
    labelText: 'Upload PDF',
    accept: '.pdf',
    hintText: 'Only PDF files are accepted',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-upload',
    name: 'file',
    labelText: 'Upload your CV',
    errorMessageText: 'Please upload a file',
  },
};

export const WithMultipleTypes: Story = {
  args: {
    id: 'multi-upload',
    name: 'attachments',
    labelText: 'Upload files',
    accept: '.pdf,.doc,.docx,.txt',
    hintText: 'Accepted formats: PDF, DOC, DOCX, TXT',
  },
};

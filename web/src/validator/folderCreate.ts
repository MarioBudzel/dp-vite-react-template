import { z } from 'zod';

export const FolderValidation = z.object({
  title: z.string().min(1, 'Folder title is required'),
  color: z.string()
});

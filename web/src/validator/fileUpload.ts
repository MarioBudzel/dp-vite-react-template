import { z } from 'zod';

export const FileUploadValidator = z.object({
  files: z.instanceof(File).array().min(1, 'Please enter at least one file'),
  folderId: z.string().optional()
});

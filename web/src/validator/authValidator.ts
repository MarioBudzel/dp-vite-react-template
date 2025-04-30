import { Permissions } from '@/enums';
import { z } from 'zod';

const singIn = z.object({
  email: z.string().email('Invalid email address').min(1, 'Please enter your email address.'),
  password: z.string().min(6, 'Please enter your password.')
});

const singUp = z
  .object({
    email: z.string().email('Invalid email address').min(1, 'Please enter your email address.'),
    name: z.string().max(255).min(1, 'Please enter your first name').optional(),
    lastName: z.string().max(255).min(1, 'Please enter your last name').optional(),
    fullName: z.string().max(255).min(1, 'Please enter your full name'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(16, 'Password can not exceed 16 characters')
      .regex(/[0-9]/, 'Password must include at least 1 number')
      .regex(/[a-z]/, 'Password must include at least 1 lower-case character')
      .regex(/[A-Z]/, 'Password must include at least 1 upper-case character'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password can not exceed 16 characters')
      .regex(/[0-9]/, 'Password must include at least 1 number')
      .regex(/[a-z]/, 'Password must include at least 1 lower-case character')
      .regex(/[A-Z]/, 'Password must include at least 1 upper-case character'),
    sendEmail: z.boolean()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

const adminCreate = z.object({
  email: z.string().email('Invalid email address').min(1, 'Please enter email address.'),
  fullName: z.string().max(255).min(1, 'Please enter full name'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password can not exceed 16 characters')
    .regex(/[0-9]/, 'Password must include at least 1 number')
    .regex(/[a-z]/, 'Password must include at least 1 lower-case character')
    .regex(/[A-Z]/, 'Password must include at least 1 upper-case character'),
  profilePicture: z.instanceof(File).nullable().optional(),
  profilePicturePath: z.string().optional(),
  permission: z.nativeEnum(Permissions).default(Permissions.RW),
  isAdmin: z.boolean().default(false),
  state: z.string().optional(),
  city: z.string().optional(),
  streetName: z.string().optional(),
  houseNumber: z.string().optional(),
  postalCode: z
    .string()
    .regex(/^\d{3} ?\d{2}$/, 'Postal code can only have 5 characters and a space')
    .max(6, 'Postal cannot be larger than 6 characters')
    .or(z.literal(''))
    .optional()
});

const edit = z.object({
  email: z.string().email('Invalid email address').min(1, 'Please enter email address.'),
  fullName: z.string().max(255).min(1, 'Please enter full name'),
  password: z
    .literal('')
    .or(
      z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(16, 'Password can not exceed 16 characters')
        .regex(/[0-9]/, 'Password must include at least 1 number')
        .regex(/[a-z]/, 'Password must include at least 1 lower-case character')
        .regex(/[A-Z]/, 'Password must include at least 1 upper-case character')
    )
    .optional(),

  profilePicture: z.instanceof(File).nullable().optional(),
  profilePicturePath: z.string().optional(),
  permission: z.nativeEnum(Permissions).default(Permissions.RW),
  isAdmin: z.boolean().default(false),
  state: z.string().optional(),
  city: z.string().optional(),
  streetName: z.string().optional(),
  houseNumber: z.string().optional(),
  postalCode: z
    .string()
    .regex(/^\d{3} ?\d{2}$/, 'Postal code can only have 5 characters and a space')
    .max(6, 'Postal cannot be larger than 6 characters')
    .or(z.literal(''))
    .optional()
});

export const authValidator = {
  signIn: singIn,
  signUp: singUp,
  adminCreate: adminCreate,
  edit: edit
};

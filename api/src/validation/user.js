const { z } = require("zod");

const CreateSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Please enter email address."),
  fullName: z.string().max(255).min(1, "Please enter full name"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password can not exceed 16 characters")
    .regex(/[0-9]/, "Password must include at least 1 number")
    .regex(/[a-z]/, "Password must include at least 1 lower-case character")
    .regex(/[A-Z]/, "Password must include at least 1 upper-case character"),
  profilePicture: z.instanceof(File).nullable().optional(),
  profilePicturePath: z.string().optional(),
  permission: z.enum(["RW", "RO"]),
  isAdmin: z.boolean().default(false),
  state: z.string().optional(),
  city: z.string().optional(),
  streetName: z.string().optional(),
  houseNumber: z.string().optional(),
  postalCode: z
    .string()
    .regex(
      /^\d{3} ?\d{2}$/,
      "Postal code can only have 5 characters and a space"
    )
    .max(6, "Postal cannot be larger than 6 characters")
    .or(z.literal(""))
    .optional(),
});

module.exports = CreateSchema;

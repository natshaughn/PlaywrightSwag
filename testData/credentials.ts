export const users = {
  standard: {
    username: process.env.STANDARD_USERNAME!,
    password: process.env.STANDARD_PASSWORD!,
  },
  locked: {
    username: process.env.LOCKED_OUT_USERNAME!, 
    password: process.env.LOCKED_OUT_PASSWORD!,
  },
};
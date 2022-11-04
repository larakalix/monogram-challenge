const { Magic } = require("@magic-sdk/admin");

export const magic = new Magic(process.env.NEXT_MAGIC_SECRET_KEY);

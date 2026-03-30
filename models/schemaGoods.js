const noEmptyString = "^(?!\\s*$).+";
const schema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      minLength: 6,
      maxLength: 32,
      pattern: noEmptyString,
    },
    name: {
      type: "string",
      minLength: 3,
      maxLength: 255,
      pattern: noEmptyString,
    },
    brand: { type: "string", pattern: noEmptyString },
    category: { type: "string", minLength: 3, pattern: noEmptyString },
    gender: { type: "string", pattern: "^(Men|Women|Unisex)$" },
    price: { type: "number", minimum: 1 },
    currency: { type: "string", pattern: "^(UAH|USD)$" },
    colors: {
      type: "array",
      items: { type: "string", pattern: "^(Black|Gray|Beige|White|Yellow)$" },
    },
    sizes: {
      type: "array",
      items: { type: "string", pattern: "^(XS|S|M|L|XL)$" },
    },
    material: {
      type: "object",
      properties: {
        main: { type: "string", pattern: noEmptyString },
        composition: { type: "string", pattern: noEmptyString },
      },
    },
    description: { type: "string", pattern: noEmptyString },
    care_instruction: {
      type: "array",
      items: { type: "string", pattern: noEmptyString },
    },
    stock: { type: "number", minimum: 0 },
    rating: { type: "number", minimum: 0 },
    reviews_count: { type: "number", minimum: 0 },
    sku: { type: "string", pattern: noEmptyString },
    images: {
      type: "array",
      items: {
        type: "string",
        pattern: "^https?:\\/\\/[a-z0-9.-]+\\/.+\\.(jpg|jpeg|png|gif|webp)$",
      },
    },
  },
  required: [
    "images",
    "stock",
    "sizes",
    "colors",
    "price",
    "category",
    "brand",
    "name",
    "id",
    "gender",
  ],
  additionalProperties: true,
};

export const schemaGoods = schema;

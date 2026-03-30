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
    price: { type: "number", exclusiveMinimum: 0, multipleOf: 0.01 },
    currency: { type: "string", pattern: "^(UAH|USD)$" },
    colors: {
      type: "array",
      items: { type: "string", pattern: noEmptyString },
      minItems: 1,
    },
    sizes: {
      type: "array",
      items: {
        type: "string",
        minItems: 1,
        enum: [
          "XXXS",
          "XXS",
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "2XL",
          "XXXL",
          "3XL",
          "4XL",
          "5XL",
          "6XL",
          "7XL",
          "8XL",
        ],
      },
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
    stock: { type: "integer", minimum: 0 },
    rating: { type: "integer", minimum: 0 },
    reviews_count: { type: "integer", minimum: 0 },
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

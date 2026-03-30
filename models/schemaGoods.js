const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 6, maxLength: 32 },
    name: { type: "string", minLength: 3, maxLength: 255 },
    brand: { type: "string" },
    category: { type: "string", minLength: 3 },
    gender: { type: "string", pattern: "Men|Women|Unisex" },
    price: { type: "number" },
    currency: { type: "string", pattern: "UAH|USD" },
    colors: { type: "array", items: { type: "string" } },
    sizes: { type: "array", items: { type: "string" } },
    material: {
      type: "object",
      properties: {
        main: { type: "string" },
        composition: { type: "string" },
      },
    },
    description: { type: "string" },
    care_instruction: { type: "array", items: { type: "string" } },
    stock: { type: "number" },
    rating: { type: "number" },
    reviews_count: { type: "number" },
    sku: { type: "string" },
    images: {
      type: "array",
      items: { type: "string" },
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

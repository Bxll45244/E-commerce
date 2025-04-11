const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "SE Shop API",
    description: "RESTful API for SE Shop",
    version: "1.0.0",
    contact: {
      name: "Saranphat Suksaengsi",
      url: "https://github.com/Bxll45244",
      email: "Ccogerbell5071@gmail.com",
    },
  },
  servers: [
    { url: "http://localhost:5000", description: "Local Server" },
  ],
  tags: [
    { name: "Product", description: "API for managing products" },
  ],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          name: { type: "string" },
          category: { type: "string" },
          description: { type: "string" },
          image: { type: "string" },
          price: { type: "number" },
        },
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"]; 

swaggerAutogen(outputFile, routes, doc);

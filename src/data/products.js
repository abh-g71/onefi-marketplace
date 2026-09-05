const products = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 127400,
    mrp: 134900,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    variants: [
      {
        id: "silver-256",
        name: "Silver",
        type: "Color",
        value: "Silver",
      },
      {
        id: "orange-256",
        name: "Orange",
        type: "Color",
        value: "Orange",
      },
      {
        id: "blue-256",
        name: "Deep Blue",
        type: "Color",
        value: "Deep Blue",
      },
    ],
    details: [
      "256GB storage",
      "Pro camera system",
      "A17 Pro chip",
      "Super Retina XDR display",
    ],
    emiPlans: [
      {
        id: "iphone-3",
        months: 3,
        monthlyAmount: 44967,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "iphone-6",
        months: 6,
        monthlyAmount: 22483,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "iphone-12",
        months: 12,
        monthlyAmount: 11242,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "iphone-24",
        months: 24,
        monthlyAmount: 5621,
        interestRate: 0,
        cashback: 7500,
      },
      {
        id: "iphone-36",
        months: 36,
        monthlyAmount: 4297,
        interestRate: 10.5,
        cashback: 7500,
      },
      {
        id: "iphone-48",
        months: 48,
        monthlyAmount: 3385,
        interestRate: 10.5,
        cashback: 7500,
      },
    ],
  },

  {
    id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 129999,
    mrp: 139999,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    variants: [
      {
        id: "titanium-black",
        name: "Titanium Black",
        type: "Color",
        value: "Titanium Black",
      },
      {
        id: "titanium-silver",
        name: "Titanium Silver",
        type: "Color",
        value: "Titanium Silver",
      },
      {
        id: "titanium-blue",
        name: "Titanium Blue",
        type: "Color",
        value: "Titanium Blue",
      },
    ],
    details: [
      "256GB storage",
      "200MP camera",
      "Snapdragon processor",
      "6.9-inch AMOLED display",
    ],
    emiPlans: [
      {
        id: "samsung-6",
        months: 6,
        monthlyAmount: 21667,
        interestRate: 0,
        cashback: 5000,
      },
      {
        id: "samsung-12",
        months: 12,
        monthlyAmount: 10833,
        interestRate: 0,
        cashback: 5000,
      },
      {
        id: "samsung-24",
        months: 24,
        monthlyAmount: 5417,
        interestRate: 0,
        cashback: 5000,
      },
      {
        id: "samsung-36",
        months: 36,
        monthlyAmount: 4380,
        interestRate: 10.5,
        cashback: 5000,
      },
    ],
  },

  {
    id: "macbook-air-m4",
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    price: 114900,
    mrp: 119900,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    variants: [
      {
        id: "midnight",
        name: "Midnight",
        type: "Color",
        value: "Midnight",
      },
      {
        id: "starlight",
        name: "Starlight",
        type: "Color",
        value: "Starlight",
      },
      {
        id: "silver",
        name: "Silver",
        type: "Color",
        value: "Silver",
      },
    ],
    details: [
      "M4 chip",
      "13.6-inch Liquid Retina display",
      "16GB unified memory",
      "256GB SSD",
    ],
    emiPlans: [
      {
        id: "macbook-6",
        months: 6,
        monthlyAmount: 19150,
        interestRate: 0,
        cashback: 6000,
      },
      {
        id: "macbook-12",
        months: 12,
        monthlyAmount: 9575,
        interestRate: 0,
        cashback: 6000,
      },
      {
        id: "macbook-24",
        months: 24,
        monthlyAmount: 4788,
        interestRate: 0,
        cashback: 6000,
      },
      {
        id: "macbook-36",
        months: 36,
        monthlyAmount: 3880,
        interestRate: 10.5,
        cashback: 6000,
      },
    ],
  },
];

export default products;

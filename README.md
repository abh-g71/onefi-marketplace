# 1Fi Marketplace

A React-based implementation of the 1Fi Marketplace feature for the 1Fi Shop experience.

The feature extends the existing Shop page with a dedicated Marketplace where users can browse products, view product information, choose variants, explore EMI plans, and proceed with a selected EMI option.

## Features

### Shop

- Top Brands
- Nearby Stores
- 1Fi Marketplace
- Top Brands and Nearby Stores are intentionally kept as placeholder sections as permitted by the assignment.
- 1Fi Marketplace opens the complete Marketplace flow.

### 1Fi Marketplace

- Product listing
- Product images
- Brand and product information
- Current price and MRP
- EMI starting amount
- Product search
- Responsive product grid
- Loading state
- Empty search state
- Error state

### Product Details

- Product image
- Product pricing
- Savings information
- Cashback information
- Product variants
- Product specifications
- EMI plan selection
- No-cost EMI indication
- Selected EMI state
- Proceed CTA
- Secure checkout messaging

## User Flow

Shop
  |
  +-- Top Brands
  |
  +-- Nearby Stores
  |
  +-- 1Fi Marketplace
          |
          +-- Product Listing
                  |
                  +-- Product Details
                          |
                          +-- Select Variant
                          |
                          +-- Select EMI Plan
                          |
                          +-- Proceed

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- Lucide React
- CSS

## Project Structure

src/
├── components/
│   ├── EmiPlanCard.jsx
│   ├── ProductCard.jsx
│   ├── ShopHeader.jsx
│   ├── ShopTabs.jsx
│   └── VariantSelector.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Marketplace.jsx
│   ├── ProductDetails.jsx
│   └── Shop.jsx
│
├── services/
│   └── productService.js
│
├── assets/
│
├── App.jsx
├── main.jsx
├── index.css
└── styles/
    └── app.css

## Architecture

The implementation separates UI, data, and data-access responsibilities.

### Components

Reusable UI components are used for:

- Product cards
- EMI plan cards
- Variant selection

### Pages

Page-level components handle the main application flows:

- Shop.jsx
- Marketplace.jsx
- ProductDetails.jsx

### Data

Product information is kept separately in:

src/data/products.js

The UI does not directly contain product data.

### Service Layer

Product retrieval is abstracted through:

src/services/productService.js

The service currently uses mock data with simulated asynchronous loading. This keeps the UI independent of the underlying data source and allows the service to be replaced with a real API later.

## Product Data

The Marketplace currently demonstrates three products:

- iPhone 17 Pro
- Samsung Galaxy S25 Ultra
- MacBook Air M4

Each product contains relevant information such as:

- Price
- MRP
- Product image
- Variants
- Product details
- EMI plans
- Cashback information

## EMI Experience

Users can select from the available EMI plans for a product.

The interface clearly distinguishes:

- No-cost EMI
- Interest-bearing EMI
- Monthly EMI amount
- Selected EMI plan

The selected plan is reflected in the final CTA.

## Loading and Error Handling

The Marketplace includes:

- Product loading skeletons
- Product loading error state
- Empty search results state
- Product-not-found state
- Product details loading state

## Running Locally

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

git clone https://github.com/abh-g71/onefi-marketplace.git

Navigate into the project:

cd onefi-marketplace

Install dependencies:

npm install

Start the development server:

npm run dev

The application will be available at the local development URL shown by Vite.

## Production Build

To create a production build:

npm run build

## Design Approach

The Marketplace was designed to feel like an extension of the existing 1Fi Shop experience rather than a separate application.

The implementation focuses on:

- Consistent typography
- Consistent spacing
- Rounded cards
- Clear hierarchy
- Mobile-first layout
- Simple navigation
- Focused EMI presentation
- Responsive behavior

The assignment specifically prioritizes maintaining consistency with the existing 1Fi app experience.

## Scope

This implementation focuses specifically on the 1Fi Marketplace feature.

The existing Shop areas for Top Brands and Nearby Stores are intentionally left as placeholder sections, as their implementation is not required for the assignment.

## Future Improvements

If backend integration were available, the service layer could be connected to real APIs for:

- Product catalog
- Product availability
- Pricing
- EMI plans
- Variant availability
- Checkout
- Order creation

The current separation between UI, data, and service layers makes this integration straightforward.

## Assignment

This project was created as part of the 1Fi SDE Intern Assignment.

The implementation focuses on extending the Shop page with the requested 1Fi Marketplace experience while maintaining the existing application's design language and user flow.
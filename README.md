# NeuraStore
A React 19-based e-commerce application with Redux Toolkit state management.  
Users can browse products, search, filter, view product details, and manage favorites.
**Live Demo:** [https://neurastore-gamma.vercel.app](https://neurastore-gamma.vercel.app)
---
## Features
- **Product Listing Page**
  - Responsive grid layout
  - Search by title (debounced)
  - Filter by category
  - Sort by price
- **Product Detail Page**
  - View complete product info
  - Add / Remove favorites
- **Favorites Page**
  - View favorited products
  - Remove favorites
- **State Management**
  - Redux Toolkit slices, thunks, selectors
- **Testing**
  - Unit tests for slices and components
  - Integration tests for search, filter, and favorites
- **Styling**
  - Responsive and accessible UI with styled-components
---
## Tech Stack
- **React:** ^19.2.3
- **React DOM:** ^19.2.3
- **Redux Toolkit:** ^2.11.2
- **React Router Dom:** ^7.12.0
- **Styled Components:** ^6.3.5
- **Axios:** ^1.13.2
- **Vitest:** ^4.0.17
- **React Testing Library:** ^16.3.1
- **Vite:** ^7.2.4
---
## Folder Structure
src/
├─ app/
│ └─ store.js
├─ components/
│ ├─ Header/
│ │ └─ Header.jsx
│ ├─ Footer/
│ │ └─ Footer.jsx
│ └─ ProductCard/
│ └─ ProductCard.jsx
├─ features/
│ ├─ favorites/
│ │ └─ favoritesSlice.js
│ ├─ filters/
│ │ └─ filtersSlice.js
│ └─ products/
│ ├─ productsSlice.js
│ ├─ productsSelectors.js
│ └─ productsThunk.js
├─ hooks/
│ └─ useDebounce.js
├─ pages/
│ ├─ Favorites/
│ │ └─ Favorites.jsx
│ ├─ ProductDetail/
│ │ └─ ProductDetail.jsx
│ └─ ProductList/
│ └─ ProductList.jsx
├─ styles/
└─ test/
└─ setupTests.js

## Setup Instructions
1. **Clone the repository**
git clone https://github.com/ajeetget/neurastore.git
cd neurastore

## Install dependencies
npm install

## Run the development server
npm run dev

## Build for production
npm run build

## Testing
npm run test

## Deployment
Deployed on Vercel: https://neurastore-gamma.vercel.app
Fully functional, including favorites, search, and product details.

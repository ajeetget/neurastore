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

## unit and integration tests.
PS D:\AJEETWORK\neura_dynamics> npm run test
> neura_dynamics@0.0.0 test
 DEV  v4.0.17 D:/AJEETWORK/neura_dynamics
 ✓ src/features/products/productsSlice.test.js (1 test) 7ms
 ✓ src/components/ProductCard/ProductCard.test.jsx (1 test) 107ms
 ✓ src/components/Header/Header.test.jsx (1 test) 127ms
 ✓ src/test/integration.test.jsx (1 test) 872ms
   ✓ user can add product to favorites  871ms

 Test Files  4 passed (4)
      Tests  4 passed (4)
   Start at  16:14:48
   Duration  2.85s (transform 689ms, setup 631ms, import 2.05s, tests 1.11s, environment 3.97s)
   
## Coverage report.
 % Coverage report from v8
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   83.47 |    73.68 |   77.77 |   83.47 |                  
 components/Header        |   95.23 |       50 |      90 |   95.23 |                  
  Header.jsx              |   85.71 |       50 |   66.66 |   85.71 | 16               
  Header.styles.js        |     100 |      100 |     100 |     100 |                  
 components/ProductCard   |     100 |      100 |     100 |     100 |                  
  ProductCard.jsx         |     100 |      100 |     100 |     100 |                  
  ProductCard.styles.js   |     100 |      100 |     100 |     100 |                  
 features/favorites       |      60 |      100 |   33.33 |      60 |                  
  favoritesSlice.js       |      60 |      100 |   33.33 |      60 | 13-14            
 features/filters         |      50 |      100 |       0 |      50 |                  
  filtersSlice.js         |      50 |      100 |       0 |      50 | 14-20            
 features/products        |   46.15 |      100 |      40 |   46.15 |                  
  productsSlice.js        |      40 |      100 |    37.5 |      40 | 16-19,25-33,44-46
  productsThunk.js        |   66.66 |      100 |      50 |   66.66 | 7-8              
 pages/ProductDetail      |     100 |    71.42 |     100 |     100 |                  
  ProductDetail.jsx       |     100 |    71.42 |     100 |     100 | 54-79            
  ProductDetail.styles.js |     100 |      100 |     100 |     100 |                  
 styles                   |     100 |      100 |     100 |     100 |                  
  theme.js                |     100 |      100 |     100 |     100 |                  
 test                     |     100 |      100 |     100 |     100 |                  
  test-utils.jsx          |     100 |      100 |     100 |     100 |                  
--------------------------|---------|----------|---------|---------|-------------------

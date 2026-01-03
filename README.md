# Food Ordering App

A modern, responsive food ordering application built with React 19 and React Router v6. This application allows users to browse restaurants, search for their favorite cuisines, filter by ratings, and manage their cart.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Components Documentation](#components-documentation)
- [Routing](#routing)
- [State Management](#state-management)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Restaurant Browsing**: Display a list of restaurants with images, ratings, cuisines, and delivery time
- **Search Functionality**: Search restaurants by name (case-insensitive)
- **Filter by Rating**: Filter restaurants with ratings above 4.3
- **Loading Shimmer Effect**: Beautiful skeleton loading UI while fetching data
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Navigation**: Multi-page routing with Header persistence
- **About Section**: Dedicated about page for app information
- **Contact Page**: Contact page for user inquiries
- **Cart Management**: Shopping cart functionality for order management

---

## 🛠️ Tech Stack

### Frontend Framework
- **React** (v19.2.3) - UI library
- **React DOM** (v19.2.3) - DOM rendering
- **React Router DOM** (v6.28.0) - Client-side routing

### Build Tools
- **Parcel** (v2.16.3) - Module bundler and dev server
- **Rimraf** (v6.1.2) - Cross-platform file removal utility

### Styling
- **CSS3** - Custom styling with modern features

### Package Manager
- **npm** - Node Package Manager

---

## 📁 Project Structure

```
food-ordering-app/
├── src/
│   ├── components/
│   │   ├── About.js              # About page component
│   │   ├── Body.js               # Main restaurant listing page
│   │   ├── Cart.js               # Shopping cart page
│   │   ├── Contact.js            # Contact page component
│   │   ├── Header.js             # Navigation header component
│   │   ├── RestaurantCard.js     # Individual restaurant card component
│   │   └── Shimmer.js            # Loading skeleton component
│   ├── utils/
│   │   ├── constants.js          # Application constants
│   │   └── mockData.js           # Mock data for testing
│   └── App.js                    # Main app component with routing
├── index.html                     # HTML entry point
├── index.css                      # Global styles
├── package.json                   # Project metadata and dependencies
└── README.md                      # This file
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/omkarmagadumdev/food-ordering-app.git
   cd food-ordering-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Verify Installation**
   ```bash
   npm list react react-dom react-router-dom
   ```

---

## 📖 Getting Started

### Start Development Server

```bash
npm start
```

The app will open at `http://localhost:1234`

### Build for Production

```bash
npm run build
```

Output files are generated in the `dist/` directory.

### Clean Build Artifacts

```bash
npm run clean
```

Removes cached files and previous builds.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the Parcel dev server |
| `npm run build` | Creates production build in `dist/` |
| `npm run clean` | Removes `.parcel-cache` and `dist/` |
| `npm run dev` | Runs development via PowerShell script |
| `npm test` | Runs Jest test suite |

---

## 🔌 API Integration

### Data Source
The application fetches restaurant data from the Swiggy API using CORS proxy.

### Fetch Configuration

**Endpoint:**
```
https://api.allorigins.win/raw?url={encodedUrl}
```

**Target URL:**
```
https://www.swiggy.com/dapi/restaurants/list/v5
```

**Parameters:**
- `lat` - Latitude (12.9254533)
- `lng` - Longitude (77.546757)
- `collection` - Filter by collection (83639 for Biryani)
- `tags` - Specific tags for filtering
- `type` - Response type (rcv2)
- `offset` - Pagination offset

### Response Structure

```javascript
{
  data: {
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: number,
              name: string,
              cloudinaryImageId: string,
              avgRating: number,
              cuisines: array,
              costForTwo: number,
              sla: {
                deliveryTime: number
              }
            }
          }
        }
      }
    ]
  }
}
```

---

## 🧩 Components Documentation

### Header Component (`src/components/Header.js`)

**Purpose:** Navigation header with logo, navigation items, and login button

**Features:**
- Sticky header that remains visible during scroll
- Navigation links to Home, About, and Contact
- Login/Logout toggle button
- Responsive navigation layout

**Props:** None

**State:**
- `btnName` - Current login button label ("login" or "logout")

**Key Functions:**
- `handleLoginLogout()` - Toggles login state

---

### Body Component (`src/components/Body.js`)

**Purpose:** Main page displaying restaurants with search and filter functionality

**Features:**
- Fetches restaurant data from Swiggy API
- Displays restaurants in a responsive grid
- Search restaurants by name
- Filter by rating (> 4.3)
- Reset filters to show all restaurants
- Loading shimmer effect during data fetch

**Props:** None

**State:**
- `ListOfRestaurent` - Array of displayed restaurants
- `originallist` - Array of all fetched restaurants
- `searchText` - Current search input value

**Key Functions:**
- `fetchData()` - Async function to fetch restaurant data
- `handleSearch()` - Filters restaurants by name
- `handleRatingFilter()` - Filters restaurants by rating
- `handleShowAll()` - Resets filters

---

### RestaurantCard Component (`src/components/RestaurantCard.js`)

**Purpose:** Individual restaurant card display

**Features:**
- Restaurant image with cloudinary integration
- Restaurant name and cuisine display
- Rating badge with color coding
- Delivery time information
- Hover effects and transitions

**Props:**
- `resData` (object) - Restaurant data object containing:
  - `id` - Unique identifier
  - `name` - Restaurant name
  - `imageId` - Cloudinary image ID
  - `rating` - Average rating
  - `cuisines` - Array of cuisine types
  - `costForTwo` - Cost for two people
  - `deliveryTime` - Estimated delivery time

**Example:**
```javascript
<RestaurantCard 
  key={restaurant.id} 
  resData={restaurant} 
/>
```

---

### Shimmer Component (`src/components/Shimmer.js`)

**Purpose:** Loading skeleton UI for better UX during data fetch

**Features:**
- 12 shimmer cards with animation
- Each card has:
  - Image placeholder
  - Title placeholder
  - Text line placeholders
- Smooth shimmer animation
- Same layout as RestaurantCard for seamless transition

**Props:** None

**Styling:** See `.shimmer-*` classes in CSS

---

### About Component (`src/components/About.js`)

**Purpose:** About page with app information

**Features:**
- Static page content
- Styled card layout
- Centered content display

**Props:** None

---

### Contact Component (`src/components/Contact.js`)

**Purpose:** Contact page for user inquiries

**Features:**
- Contact form or information
- Contact details display

**Props:** None

---

### Cart Component (`src/components/Cart.js`)

**Purpose:** Shopping cart page

**Features:**
- Display added items
- Order management
- Checkout functionality

**Props:** None

---

## 🛣️ Routing

The application uses **React Router v6** for client-side routing.

### Route Configuration

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Body | Main restaurant listing page |
| `/about` | About | About page |
| `/contact` | Contact | Contact page |
| `/cart` | Cart | Shopping cart |

### Navigation Implementation

**Using React Router Links:**
```javascript
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

**App Structure:**
```javascript
<BrowserRouter>
  <AppLayout />
    ├── Header (sticky)
    └── Routes
        ├── / → Body
        ├── /about → About
        ├── /contact → Contact
        └── /cart → Cart
</BrowserRouter>
```

---

## 📊 State Management

### Current Implementation
The application uses **React Hooks** for state management:

- **useState** - For local component state
- **useEffect** - For side effects (API calls)
- **useRef** - For DOM references

### State Flow Example (Body Component)

```javascript
const [ListOfRestaurent, setListOfRestaurent] = useState([]);
const [originallist, setoriginallist] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(() => {
  fetchData(); // Run on component mount
}, []);
```

### Future State Management
For larger applications, consider:
- **Redux** - For global state management
- **Context API** - For prop drilling avoidance
- **Zustand** - Lightweight state library

---

## 🎨 Styling

### CSS Architecture

**Global Styles:** `index.css`
- Reset and base styles
- Component-specific classes
- Utility classes
- Animation keyframes

### Key Classes

| Class | Purpose |
|-------|---------|
| `.app` | Main container |
| `.header` | Header component |
| `.body` | Main content area |
| `.search` | Search bar container |
| `.restaurentcontainer` | Grid layout for restaurants |
| `.res-card` | Individual restaurant card |
| `.shimmercard` | Loading skeleton card |
| `.about` | About page card |

### Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | `#f97316` | Buttons, highlights |
| Dark Orange | `#ea580c` | Hover states |
| Dark Text | `#1f1f1f` | Main text |
| Light Gray | `#f8f8f8` | Background |
| Border | `#e9e9e9` | Borders |
| Success Green | `#48c479` | Rating badge |

### Responsive Design

```css
/* Grid auto-fills responsive cards */
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

/* Mobile-first approach */
/* Cards stack on small screens */
/* Expand on larger screens */
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. **Build Error: "@remix-run/router not found"**
**Cause:** Version mismatch between react-router and react-router-dom
**Solution:**
```bash
npm run clean
npm install react-router-dom@6.28.0 react-router@6.28.0
npm start
```

#### 2. **API Data Not Loading**
**Cause:** CORS proxy issues or API changes
**Solution:**
- Check browser console for fetch errors
- Verify proxy URL: `https://api.allorigins.win/raw?url={encoded}`
- Test with curl: `curl "https://api.allorigins.win/raw?url=https://www.swiggy.com/dapi/restaurants/list/v5..."`

#### 3. **Snippets Not Working (rafce)**
**Cause:** ES7+ React/Redux/React-Native snippets extension not installed
**Solution:**
- Install extension: `dsznajder.es7-react-js-snippets`
- Reload VS Code: `Ctrl+Shift+P` → "Reload Window"
- Ensure file is in JavaScript React mode

#### 4. **Shimmer Not Displaying**
**Cause:** CSS not loaded or missing `.shimmer-*` classes
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify CSS is in `index.css`
- Check DevTools → Elements → Computed styles

#### 5. **Navigation Links Not Working**
**Cause:** BrowserRouter not wrapped around routes
**Solution:**
- Verify App.js has `<BrowserRouter>` wrapper
- Check route paths match Link `to` props

#### 6. **Hot Module Reloading Not Working**
**Cause:** Parcel cache corrupted
**Solution:**
```bash
npm run clean
npm start
```

---

## 🤝 Contributing

### Guidelines

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

### Code Standards

- Use functional components and React Hooks
- Follow camelCase naming conventions
- Add comments for complex logic
- Keep components under 300 lines
- Test components before pushing

### Testing Checklist

- [ ] Component renders without errors
- [ ] All links navigate correctly
- [ ] Search functionality works
- [ ] Filters apply correctly
- [ ] API calls complete successfully
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors or warnings

---

## 📝 License

This project is licensed under the ISC License. See the LICENSE file for details.

---

## 👥 Author

**Omkar** - [GitHub Profile](https://github.com/omkarmagadumdev)

---

## 🔗 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Parcel Documentation](https://parceljs.org)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 📞 Support

For issues, questions, or suggestions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Open an issue on GitHub
3. Contact the project maintainer

---

**Last Updated:** December 27, 2025
**Version:** 1.0.0

# 🧳 Tour Plan - Indian Travel Itineraries

A comprehensive web application for exploring 30+ Indian destinations with detailed day-by-day itineraries, budget breakdowns, and travel tips. Built with React, TypeScript, and Tailwind CSS.

![Tour Plan](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **30+ Destinations**: Curated travel plans covering diverse Indian landscapes
- **Detailed Itineraries**: Day-by-day plans with activities and accommodation suggestions
- **Budget Breakdown**: Comprehensive cost estimates for solo and group (6 people) travelers
- **Smart Filters**: Filter destinations by season, budget, landscape, and permit requirements
- **Compare Destinations**: Side-by-side comparison of all destinations
- **Multilingual Support**: Destination info in English, Hindi, and Bengali
- **Beautiful Image Galleries**: Swiper-powered image galleries with place-specific photos
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Interactive UI**: Smooth animations powered by Framer Motion

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Image Galleries**: Swiper
- **Icons**: Iconoir React
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd travel-plans
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The preview will be available at `http://localhost:4173/`

## 📁 Project Structure

```
travel-plans/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, DestinationsSection, etc.
│   │   └── ui/              # Reusable UI components
│   ├── data/
│   │   ├── destinations/    # 30+ destination data files
│   │   ├── types.ts         # TypeScript type definitions
│   │   └── destinations.ts  # Destination exports
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── HomePage.tsx     # Main landing page
│   │   ├── ComparePage.tsx  # Compare all destinations
│   │   ├── DestinationPage.tsx  # Individual destination details
│   │   └── TipsPage.tsx     # Travel tips & seasons guide
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
└── main/                    # Original markdown itineraries
```

## 🎯 Key Features Breakdown

### 1. Destination Filtering

- **Season**: Winter, Summer, Monsoon filters
- **Budget**: Price range filters (Under ₹15K, ₹15K-30K, ₹30K+)
- **Landscape**: Mountains, Coastal, Spiritual, Nature, Desert
- **Permit**: Required or Not Required

### 2. Budget Breakdown

- Solo traveler costs
- Group of 6 costs (with savings calculator)
- Itemized expenses (transport, accommodation, food, activities)
- Low and typical budget ranges

### 3. Destination Details

- High-quality image galleries with place names
- Day-by-day itinerary with timeline view
- Cost breakdown with Solo/Group toggle
- Travel tips, highlights, and must-visit attractions
- Multilingual destination descriptions
- Permit requirements and season notes

### 4. Responsive Design

- Mobile-first approach
- Adaptive layouts for tablets and desktops
- Touch-friendly interfaces
- Optimized image loading

## 🎨 Design Highlights

- **Glass Morphism**: Modern glass-effect UI elements
- **Gradient Overlays**: Beautiful image presentations
- **Smooth Animations**: Framer Motion powered transitions
- **Custom Color Palette**: Carefully crafted color system
- **Typography**: Display fonts for headings, system fonts for body text

## 📊 Data Structure

Each destination includes:

- Basic info (name, state, duration, coordinates)
- Image arrays with place names
- Day-by-day itinerary
- Budget breakdown (solo & group)
- Multilingual descriptions (EN, HI, BN)
- Highlights, attractions, and tips
- Permit requirements
- Best travel season

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Adding New Destinations

1. Create a new file in `src/data/destinations/`
2. Follow the existing destination structure
3. Add images with place names
4. Include budget breakdown for both solo and group
5. Add multilingual info if possible
6. Export the destination in `src/data/destinations.ts`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ by Sourav

## 🙏 Acknowledgments

- Image credits: Various sources including travel websites and DuckDuckGo
- Destination data: Compiled from multiple travel resources
- Icons: Iconoir React
- Design inspiration: Modern travel websites

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: All prices are approximate and subject to change. Please verify current rates before planning your trip.

# Runner Progress Dashboard

A beautifully designed, premium React-based dashboard tailored for tracking runner progress in the India Running League (IRL). This project was built utilizing modern web design aesthetics, focusing on a robust desktop experience, dynamic data visualization, and real-time customizability.

## Features & Capabilities

### 1. Dynamic Data Architecture
- **Centralized State:** The application is powered by a central JSON-based data structure housed in `App.jsx`, ensuring that all metrics and user details act as a single source of truth.
- **Prop Drilling:** All components (`ProfileCard`, `ProgressCard`, `ActivityCard`, `LeaderboardCard`, `Header`) have been refactored to dynamically accept data via React props, completely eliminating hardcoded strings.

### 2. Live Data Customization
- **Interactive DataEditor Modal:** A floating action button (settings gear) in the bottom right corner opens a full-screen, blurred-backdrop modal.
- **On-the-fly Updates:** Users can edit Runner Name, Challenge Name, Tier, Leaderboard Rank, Target Distance, Completed Distance, and Daily Run Distances (Mon-Fri). Saving these changes instantly triggers a smooth re-render of all dashboard analytics.

### 3. Visual Progress Indicators (`ProgressCard`)
- **Animated Circular Progress:** Utilizes SVG and CSS transitions to gracefully animate a circular progress bar from 0% to the target completion percentage.
- **Linear Progress Track:** A premium linear bar representing the remaining journey, complete with interactive CSS tooltips for deeper metric insights.
- **Auto-Calculations:** The component dynamically calculates the "Remaining Distance" and "Completion Percentage" based on the provided target and completed values.

### 4. Interactive Activity Charts (`ActivityCard`)
- **Recharts Integration:** Employs the `recharts` library to render a clean, responsive bar chart visualizing a runner's weekly activity (Mon - Fri).
- **Custom Tooltips:** The chart features dark-mode stylized tooltips that provide exact KM values upon hovering.
- **Dynamic Averaging:** Automatically calculates and displays the runner's average daily distance based on the live dataset.

### 5. Leaderboard & Profile Summaries (`ProfileCard` & `LeaderboardCard`)
- Clean UI components that display user hierarchies, tiers (e.g., RoadWarrior, Pro Athlete), and standings.
- Automatically reflects changes made via the `DataEditor`.

### 6. Premium UI/UX Design System (`index.css`)
- **Modern Typography:** Uses Google Fonts (Inter and Poppins) for a sleek, readable SaaS-like feel.
- **Color Palette & Glassmorphism:** Incorporates vibrant primary greens, deep background slates, and subtle gradient fills.
- **Micro-Animations:** Fluid CSS transitions on hover states, progress bars, and modal toggles ensure the interface feels responsive and alive.

## Technology Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Vanilla CSS3 (`index.css`) with CSS Variables for consistent theming.
- **Icons:** `lucide-react`
- **Charting Engine:** `recharts`

## Getting Started

1. Ensure you have Node.js installed.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Recent Development Changelog

1. **Initial Desktop Layout:** Built the initial grid-based structure for screens 1200px+.
2. **Component Separation:** Broke down the UI into logical components (`Header`, `ProfileCard`, `ProgressCard`, `ActivityCard`, `LeaderboardCard`, `MotivationCard`).
3. **Mock Data Integration:** Transitioned from hardcoded HTML to dynamic React components fueled by a central `mockData` object.
4. **DataEditor Implementation:** Added the live-editing capability, bridging the gap between static mock data and an interactive playground.
5. **Styling Polish:** Added premium shadows, gradients, custom tooltips, and SVG animations.

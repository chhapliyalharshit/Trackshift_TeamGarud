# Trackshift / Team Garud 🏎️

An interactive F1-style racing simulator built with React that combines real-time race physics with AI-powered team strategy management. Race against AI opponents, manage tire strategies, and experience dynamic pit stop decisions with live recommendations.

![Team Garud Racing Simulator](https://img.shields.io/badge/Racing-Simulator-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite)

##  Features

### Core Racing Features
- **Real-time Race Simulation**: Physics-based racing with realistic tire degradation, pit stops, and overtaking mechanics
- **10 Drivers Across 5 Teams**: Each with unique team colors and strategies
- **Dynamic Track System**: Custom racing line with Catmull-Rom spline interpolation
- **Live Scoreboard**: Real-time position tracking, intervals, lap times, and tire conditions
- **Pit Stop Strategy**: Mandatory pit stops with three tire compounds (Soft, Medium, Hard)

### AI Strategy Management
- **AI Team Management**: AI-powered race strategists using Claude API or OpenRouter
- **Mid-Race Strategy Adjustments**: AI analyzes race conditions and suggests optimal pit stop windows
- **Multi-Team Support**: Manage multiple teams with different AI models
- **Strategy Conversation History**: Review AI reasoning and decisions

### Pit Stop Recommender System (NEW! 🎉)
- **Live Recommendations**: Real-time pit stop advice for every car
- **Strategic Analysis**: Calculates optimal pit windows based on:
  - Current tire condition and degradation
  - Laps remaining in the race
  - Time loss from worn tires vs pit stop penalty
  - Tire compound performance characteristics
- **Visual Dashboard**: Dedicated panel showing recommendations for all drivers
- **Color-Coded Alerts**:
  - 🔴 "Box this lap" - Critical tire degradation
  - 🟠 "Box in 1-2 laps" - Plan upcoming pit stop
  - 🟢 "Stay out" - Tires in good condition

### Driver Controls
- **Pace Management**: Push, Normal, or Conserve modes
- **Tire Selection**: Choose between Soft (fast, high wear), Medium (balanced), or Hard (slow, durable)
- **Real-time Commands**: Issue pit stop and pace commands during the race
- **Driver Highlighting**: Track specific drivers across all UI components

### Advanced Features
- **Dirty Air Effect**: Following penalty simulates turbulent air impact
- **Stuck Detection**: Alerts when drivers are trapped behind slower cars
- **Fair Starting Grid**: Randomized grid generation with team balance
- **Race Events Log**: Comprehensive event tracking (overtakes, pit stops, penalties)
- **DSQ System**: Automatic disqualification for rule violations
- **Race Audio**: Background music and sound effects

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** or **pnpm**
- **API Keys** (optional, for AI features):
  - Anthropic Claude API key, OR
  - OpenRouter API key

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/chhapliyalharshit/Trackshift_TeamGarud.git
   cd Trackshift_TeamGarud
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
```

3. **Start the development server**
```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   - The app will automatically reload when you make changes

### Production Build
```bash
npm run build
npm run preview
```

## 🎯 How to Use

### Starting a Race

1. **Pre-Race Setup**:
   - Select which teams are **Player-controlled** vs **AI-controlled**
   - Configure API keys for AI teams (API Configuration button)
   - Randomize or manually set the starting grid
   - Choose starting tire compounds for player-controlled teams

2. **Race Controls**:
   - **Spacebar**: Pause/Resume race
   - **Pit Stop Commands**: Click tire buttons or use "Box" buttons on driver cards
   - **Pace Commands**: Adjust driving style (Push/Normal/Conserve)

3. **Monitor the Race**:
   - **Main Track**: Visual representation of car positions
   - **Scoreboard**: Live standings, gaps, tire conditions, lap times
   - **Pit Stop Recommendations**: Strategic advice for each driver
   - **Events Panel**: Track overtakes, pit stops, and incidents

### Understanding Pit Recommendations

The **Pit Stop Recommendations** panel provides strategic guidance:

- **"Stay out"**: Tires are in good condition, continue racing
- **"Box in 1-2 laps"**: Plan a pit stop soon for optimal strategy
- **"Box this lap"**: Immediate pit stop recommended due to tire degradation
- **"N/A"**: Not applicable (car finished, disqualified, or insufficient data)

The system considers:
- Current tire health and degradation rate
- Remaining laps in the race
- Pit stop time penalty (~21 seconds)
- Compound-specific performance characteristics

## 🏗️ Project Structure
```
Trackshift_TeamGarud/
├── src/
│   ├── components/          # React components
│   │   ├── PreRaceMenu.jsx
│   │   ├── RaceTrack.jsx
│   │   ├── Scoreboard.jsx
│   │   ├── PitStopRecommendations.jsx  # NEW!
│   │   ├── TireManager.jsx
│   │   └── TeamControls.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useRace.js      # Main race simulation logic
│   │   ├── useRaceAudio.js
│   │   └── useCommandHandler.js
│   ├── utils/              # Utility functions
│   │   ├── computeScoreboardData.js
│   │   └── pitRecommendation.js  # NEW!
│   ├── data/               # Configuration and constants
│   │   ├── constants.js    # Race parameters, tire specs
│   │   ├── teamMapping.js  # Team and driver definitions
│   │   └── modelConfig.js  # AI model configurations
│   ├── services/           # External service integrations
│   │   └── aiService.js    # AI/API communications
│   ├── contexts/           # React context providers
│   └── App.jsx             # Main application component
├── public/                 # Static assets
├── package.json
└── vite.config.js
```

## ⚙️ Configuration

### Race Parameters (`src/data/constants.js`)
```javascript
// Customize race settings
export const MAX_LAPS = 12;                    // Race length
export const PITLANE_SPEED = 4;                // Pit lane speed limit (px/s)
export const FOLLOWING_PENALTY = 0.7;          // Dirty air effect (px/s)

// Tire compounds
export const TIRE_TYPES = {
  SOFT:   { speed: 30.5, degradation: 0.18 },  // Fast, high wear
  MEDIUM: { speed: 29,   degradation: 0.09 },  // Balanced
  HARD:   { speed: 28,   degradation: 0.06 }   // Slow, durable
};

// Driving styles
export const DRIVING_STYLES = {
  PUSH:     { speedModifier: +2,   wearModifier: +0.12 },
  NORMAL:   { speedModifier: 0,    wearModifier: 0 },
  CONSERVE: { speedModifier: -1.2, wearModifier: -0.04 }
};
```

### Team Configuration (`src/data/teamMapping.js`)
```javascript
export const teamMapping = {
  "Britania Racing": ["SAI", "ALB"],
  "Scuderia Rosa": ["LEC", "HAM"],
  "Silver Spears": ["RUS", "ANT"],
  "Papaya Team": ["NOR", "PIA"],
  "Emerald Racing": ["ALO", "STR"]
};

export const teamColors = {
  "Britania Racing": "#00a0de",
  "Scuderia Rosa": "#F70D1A",
  // ... customize team colors
};
```

### API Configuration

Configure AI models through the in-app **API Configuration** modal:
- **Anthropic**: Requires Claude API key
- **OpenRouter**: Supports multiple model providers
- **Free Mode**: Disable AI features (manual control only)

## 🔧 Technologies Used

### Frontend
- **React 18.3.1** - UI framework
- **Vite 5.4.10** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Fontsource** - Typography (Titillium Web)

### State Management
- React Hooks (useState, useEffect, useRef, useCallback)
- Custom hooks for race logic and audio

### AI Integration
- **Anthropic Claude API** - Race strategy AI
- **OpenRouter** - Multi-model AI provider support

### Styling
- CSS3 with CSS Variables
- Custom F1-inspired design system
- Responsive layouts

## 📊 Race Physics

### Speed Calculation
```
effectiveSpeed = baseSpeed - (baseSpeed × (100 - tireCondition)) / 200
finalSpeed = effectiveSpeed + drivingStyleModifier - followingPenalty
```

### Tire Degradation
```
newCondition = currentCondition - (degradationRate + styleWearModifier) × deltaTime
```

### Pit Stop Time Penalty
```
pitStopPenalty = (pitlaneLength / pitlaneSpeed) - (pitlaneLength / hardTireSpeed)
                ≈ 21 seconds
```

## 🎨 Customization

### Adding New Teams

1. Edit `src/data/teamMapping.js`:
```javascript
   export const teamMapping = {
     // ... existing teams
     "Your Team Name": ["DR1", "DR2"]
   };
   
   export const teamColors = {
     // ... existing colors
     "Your Team Name": "#hexcolor"
   };
```

2. Driver codes will automatically populate throughout the app

### Modifying Track Layout

Edit track points in `src/data/constants.js`:
```javascript
export const trackPoints = [
  { x: 348, y: 327 },
  { x: 262, y: 327 },
  // ... add/modify points
];
```

### Adjusting Pit Strategy Thresholds

Edit `src/utils/pitRecommendation.js`:
```javascript
// Fine-tune recommendation logic
if (cond > 80 && totalLossIfNoPit < PITSTOP_TIME_PENALTY * 0.5) {
  return { label: "Stay out", perLapLoss, totalLossIfNoPit };
}
// Adjust thresholds (80, 40, 60) and multipliers (0.5, 0.7)
```

## 🐛 Troubleshooting

### Common Issues

**Blank screen on startup**
- Check browser console for errors (F12)
- Verify all dependencies installed: `npm install`
- Clear cache: `rm -rf node_modules/.vite && npm run dev`

**API errors**
- Verify API keys in configuration modal
- Check network connectivity
- Ensure correct model selection for your API provider

**Performance issues**
- Reduce number of cars or track complexity
- Disable AI features if not needed
- Use production build: `npm run build`

**Pit recommendations not showing**
- Verify `scoreboardData` is being populated
- Check that race is active (not in pre-race or results view)
- Ensure `pathLength` is calculated correctly

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- Inspired by Formula 1 racing strategy
- Built with ❤️ by Team Garud (Parth Khanna, Harshit Chhapliyal, Harneev Kour)

## 📧 Contact

- **GitHub**: [chhapliyalharshit](https://github.com/chhapliyalharshit)
- **Repository**: [Trackshift_TeamGarud](https://github.com/chhapliyalharshit/Trackshift_TeamGarud)

---

**Ready to race?** 🏁 Start your engines and experience the thrill of AI-powered F1 strategy!

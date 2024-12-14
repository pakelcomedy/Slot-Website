---

# Slot Game

## Description

Welcome to the Slot Game! This is a simple web-based slot machine game that lets you test your luck. The game has 6 columns and multiple paylines, featuring various fruit symbols with different values. The goal is to spin the reels and match symbols across predefined winning paylines to earn rewards.

## Features

- **Interactive Slot Machine**: Spin the reels and watch as symbols rotate in the columns.
- **Multiple Paylines**: There are various patterns to win, including horizontal, diagonal, and zigzag combinations.
- **Bet and Balance System**: Start with an initial balance and place bets on each spin. Win credits based on the paylines.
- **Spotlight Effects**: Winning combinations are highlighted with a spotlight effect for visual excitement.

## How to Play

1. **Start the Game**: Press the "Start" button to begin spinning the reels.
2. **Bet**: Each spin costs a fixed bet amount (50 credits by default).
3. **Winning**: If symbols align across one of the many paylines, you will win a payout. The higher the symbol value, the bigger the reward.
4. **Balance**: Your balance is displayed at the top, and it will update after each spin based on wins or losses.

## Directory Structure

The directory is organized as follows:

```
Slot-Website/
├── index.html               # Main HTML file for the game
├── assets/                  # Directory for all static assets
│   ├── css/                 # Stylesheets for the game
│   │   └── styles.css       # Main CSS file for styling the game
│   ├── js/                  # JavaScript files for the game logic
│   │   └── scripts.js       # Main JavaScript file for the game functionality
└── README.md                # Documentation for the project
```

## Technologies Used

- **HTML**: Markup language to structure the game's interface.
- **CSS**: Styling for the game, including animations and layout.
- **JavaScript**: Game logic, including spinning mechanics, symbol generation, and payout calculation.
- **Bootstrap**: Used for responsive and easy UI components (e.g., buttons, layout).

## Setup Instructions

To run the game locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pakelcomedy/Slot-Website.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Slot-Website
   ```

3. **Open `index.html` in your browser**:
   You can simply open the `index.html` file in your preferred browser to start playing the game.

## Customization

You can adjust the following settings to modify the game behavior:

- **Symbols**: The fruit symbols and their associated values are configurable in the `scripts.js` file. Add or modify symbols in the `symbols` array to change the gameplay.
- **Paylines**: You can customize the winning patterns by modifying the `paylines` array.
- **Bet Amount**: Adjust the `betAmount` variable to change the cost per spin.

## Website

Visit the game online at: [www.slot.my.id](http://www.slot.my.id)

## Contributing

If you'd like to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-xyz`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

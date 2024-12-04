# Christmas Shopping Agent

An intelligent agent designed to help you manage and optimize your Christmas shopping experience.

## Overview

The Christmas Shopping Agent is a tool that assists users in planning, organizing, and optimizing their holiday shopping. It helps reduce the stress of holiday shopping while ensuring you find the perfect gifts for everyone on your list.

## Features

- 🎁 Gift List Management
- 💰 Budget Tracking
- 🔍 Gift Suggestions

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/grant/technical-exercise.git
cd technical-exercise
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the necessary API keys and configuration

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage Guide

### Creating Your Gift Shopping List

1. Click "New Shopping List" on the dashboard
2. Enter your total budget at the top
3. Add people to your list with:
   - Name
   - Interests and hobbies
   - Age
   - Individual budget
4. Review the budget breakdown shown at the top

### Using the Gift Search Bot

1. Click "Start Gift Search" to activate the bot
2. The bot will search for gifts matching each person's preferences
3. For each suggestion you can:
   - Lock it in as a final gift choice
   - Reject it to get new suggestions
4. The top bar shows:
   - Total budget remaining
   - Amount spent so far
   - Number of people still needing gifts

### Managing Gift Selections

- Locked gifts are added to your final list
- Click "Search More" to find additional options for anyone
- Easily adjust budgets and preferences to get new suggestions
- See all chosen gifts and remaining budget at a glance
- Export your final gift list with links and prices

## FAQ

### Is my data secure?
Yes, all data is stored locally on your device. We don't store any personal or financial information on our servers. Gift prices are fetched in real-time from Amazon.com when searching.

### Can I share lists with others?
Yes! You can share lists with family members or friends for collaborative shopping. Each shared list can have different permission levels.

### Can I import existing wish lists?
Yes, the agent supports importing wish lists from Amazon, Etsy, and other major retailers.

### How accurate are the price comparisons? 
All prices are searched and fetched in real-time from Amazon.com to ensure accuracy.

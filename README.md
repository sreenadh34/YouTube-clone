# TubeCore

TubeCore  is a web application that replicates the core functionalities of YouTube, including video search, live chat, nested comments etc.

## Features

- **Video Search:** Search for videos using the YouTube API.
- **Live Chat:** Engage in real-time conversations with other users during video playback.
- **Nested Comments:** View and reply to comments in a nested structure, similar to YouTube.
- **Debouncing:** Optimized search functionality to reduce API calls using debouncing.
- **Caching:** Frequently searched results are cached to improve performance and reduce unnecessary API calls.

## Technologies Used

- **JavaScript**:
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Redux**: For state management.
- **YouTube API**: To fetch video data and handle searches.
 
## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js and npm installed on your system.
- A Google API key for accessing the YouTube API.

### API Key

You need to obtain a Google API key to interact with the YouTube API.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone

2. **Install dependencies:**

   ```bash
   npm install

3. **Put your Google API key in src/utils/contants.jsx  const GOOGLE_API_KEY = " place your api key here" **

4. **Start the development server:**

   ```bash
    npm run dev
 The app should now be running at http://localhost:3000.
 

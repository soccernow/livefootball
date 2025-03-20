# Matchday.ng

Matchday.ng is a live soccer scores website that displays real-time updates for the most popular football leagues. The site is built with a modern blue & white theme, offering a clean and colorful interface.

## Features
- **Live Scores:** Updates every 60 seconds
- **League Standings & Fixtures:** Overview of major leagues
- **Responsive Design:** Works on desktop and mobile
- **API Integration:** Powered by Highlightly API
- **Secure API Key Storage:** API keys are stored securely in Supabase

## Setup Instructions
1. **Clone the repository:**  
   - Use GitHub's online interface to upload these files if you're not using command-line tools.
2. **Supabase Setup:**  
   - Create a table called `api_keys` and insert your API key using the provided SQL.
3. **Netlify Deployment:**  
   - Connect your GitHub repository to Netlify.
   - Add the following environment variables in Netlify:
     - `SUPABASE_URL`: Your Supabase Project URL
     - `SUPABASE_ANON_KEY`: Your Supabase Anonymous Key
     - `HIGHLIGHTLY_API_KEY`: 1a558971-bebb-40a7-a49b-c5935bfea10b
4. **Deploy the site** on Netlify.
5. **Live Scores:**  
   - The site will fetch live scores from the Highlightly API every 60 seconds.

## Usage
- **Homepage:** Displays live match scores.
- **Leagues Page:** Lists popular leagues.
- **Fixtures & Standings Pages:** (To be built in further updates)

Enjoy and customize Matchday.ng as needed!

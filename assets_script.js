const apiKey = "1a558971-bebb-40a7-a49b-c5935bfea10b";
const apiUrl = `https://api.highlightly.net/v1/matches/live?api_key=${apiKey}`;

async function fetchMatches() {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        let matchesContainer = document.getElementById("matches-container");
        matchesContainer.innerHTML = "";

        data.matches.forEach(match => {
            let matchDiv = document.createElement("div");
            matchDiv.classList.add("match-card");
            matchDiv.innerHTML = `
                <div class="match-time">${match.time}</div>
                <div class="match-teams">
                    <span>${match.team1} vs ${match.team2}</span>
                </div>
                <div class="match-score">${match.score}</div>
            `;
            matchesContainer.appendChild(matchDiv);
        });
    } catch (error) {
        console.error("Error fetching live matches:", error);
    }
}

fetchMatches();
setInterval(fetchMatches, 30000); // Refresh every 30 seconds

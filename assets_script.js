const apiKey = "1a558971-bebb-40a7-a49b-c5935bfea10b";
const apiUrl = "https://api.highlightly.net/v1/livescores";

async function fetchLiveScores() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        });
        const data = await response.json();

        let html = "";
        data.matches.forEach(match => {
            html += `<p>${match.home_team} ${match.home_score} - ${match.away_score} ${match.away_team}</p>`;
        });

        document.getElementById("liveScores").innerHTML = html;
    } catch (error) {
        document.getElementById("liveScores").innerHTML = "Failed to load scores.";
    }
}

fetchLiveScores();

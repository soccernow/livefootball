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
        displayScores(data);
    } catch (error) {
        document.getElementById("scores-container").innerHTML = "Error fetching live scores.";
        console.error("Error fetching live scores:", error);
    }
}

function displayScores(data) {
    const container = document.getElementById("scores-container");
    container.innerHTML = ""; // Clear previous content

    // Assuming the API returns an object with a "matches" array
    if (data.matches && data.matches.length > 0) {
        data.matches.forEach(match => {
            // Color-code match status: live (green), upcoming (blue), finished (gray)
            let statusColor = "#007bff"; // default for upcoming
            if (match.status.toLowerCase() === "live") statusColor = "green";
            if (match.status.toLowerCase() === "finished") statusColor = "gray";
            
            const matchElement = document.createElement("div");
            matchElement.style.borderLeft = `4px solid ${statusColor}`;
            matchElement.style.paddingLeft = "8px";
            matchElement.innerHTML = `
                <h3>${match.league}</h3>
                <p>${match.home_team} ${match.home_score} - ${match.away_score} ${match.away_team}</p>
                <p>Status: ${match.status}</p>
            `;
            container.appendChild(matchElement);
        });
    } else {
        container.innerHTML = "No live matches at the moment.";
    }
}

fetchLiveScores();
setInterval(fetchLiveScores, 60000); // Refresh every 60 seconds

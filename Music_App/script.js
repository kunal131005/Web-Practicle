document.querySelector("button").addEventListener("click", async () => {
    const term = document.querySelector(".inp").value.trim();
    const musicDetailsDiv = document.querySelector(".MusicDetails");
    musicDetailsDiv.innerHTML = "";

    if (!term) {
        musicDetailsDiv.innerHTML = "<p>Please enter a music name.</p>";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3001/search?term=${encodeURIComponent(term)}`);
        const data = await response.json();

        if (data.length === 0) {
            musicDetailsDiv.innerHTML = "<p>No songs found!</p>";
            return;
        }

        data.forEach(video => {
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const thumbnail = video.snippet.thumbnails.medium.url;

            const songElement = document.createElement("div");
            songElement.className = "song";
            songElement.innerHTML = `
                <p><strong>${title}</strong></p>
                <img src="${thumbnail}" alt="Thumbnail" width="300">
                <br>
                <iframe width="300" height="180" src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            `;
            musicDetailsDiv.appendChild(songElement);
        });
    } catch (error) {
        console.error("YouTube error:", error);
        musicDetailsDiv.innerHTML = "<p>Error fetching songs. Please try again later.</p>";
    }
});

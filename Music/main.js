let btn = document.querySelector('button');
let inp = document.querySelector('.inp');
let content = document.querySelector('.musicDetails');

btn.addEventListener('click', (ev) => {
    content.innerHTML = '';

    let proxyUrl = 'https://corsproxy.io/?';

    let targetUrl = `https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${encodeURIComponent(inp.value)}&_format=json`;

    fetch(proxyUrl + encodeURIComponent(targetUrl))

        .then((res) => res.json())
        .then((data) => {
            let d = JSON.parse(data.contents);
            let songs = d.songs?.data || [];
            console.log("Songs:", songs);

            songs.forEach((song) => {
                console.log("Encrypted URL:", song.encrypted_media_url);

                // Decrypt encrypted_media_url safely
                let fullSongUrl = decryptMediaUrl(song.encrypted_media_url);

                // Only proceed if decryption was successful
                if (fullSongUrl) {
                    // Create audio element
                    let audio = document.createElement('audio');
                    audio.controls = true;
                    audio.src = fullSongUrl;

                    // Show title
                    let title = document.createElement('h3');
                    title.innerText = song.title;

                    // Append to page
                    content.appendChild(title);
                    content.appendChild(audio);
                } else {
                    console.warn(`Skipping song "${song.title}" due to invalid URL`);
                }
            });
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
});

// Decrypt function with Base64 validation
function decryptMediaUrl(encUrl) {
    try {
        if (!encUrl || !/^[A-Za-z0-9+/=]+$/.test(encUrl)) {
            throw new Error("Invalid Base64 string");
        }

        let decoded = atob(encUrl);
        decoded = decoded.replace('h.saavncdn.com', 'aac.saavncdn.com');
        return decoded;
    } catch (err) {
        console.error("Decryption failed:", err.message);
        return '';
    }
}

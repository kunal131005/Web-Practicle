let btn = document.querySelector('button')
let inp = document.querySelector('.inp')
let content = document.querySelector('.musicDetails')

btn.addEventListener('click', (ev) => {
    content.innerHTML = '';

    let proxyUrl = 'https://api.allorigins.win/get?url=';
    let targetUrl = `https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${inp.value}&_format=json`;

    fetch(proxyUrl + encodeURIComponent(targetUrl))
        .then((res) => res.json())
        .then((data) => {
            let d = JSON.parse(data.contents); 
            let songs = d.albums.data;
            console.log(songs);
            songs.forEach((song)=>{
                console.log("Description => ",song.description)
                console.log("Music => ",song.music)
                console.log("Title => ",song.title)
                console.log("Img => ",song.image)
                console.log("URL => ",song.url)

            })
        })
        .catch(err=>{
        console.log("Error",err);
    });
})
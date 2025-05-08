let inp = document.querySelector('.inp')
let btn = document.querySelector('button')

btn.addEventListener('click', (ev) => {
    let container = document.querySelector('.MovieDetails')
    container.innerHTML = ''
    let inptext = inp.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=af1df974162aada40b26714b77f6494a&query=${inptext}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let movieDetails = data.results;
            movieDetails.forEach((detail) => {
                let posterURL = `https://image.tmdb.org/t/p/original${detail.poster_path}`;
                if (detail.poster_path == null) {
                    posterURL = 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?uid=R199330143&ga=GA1.1.1884883455.1726461919&semt=ais_hybrid&w=740';
                }
                container.innerHTML +=
                    `
                <div class="movie-card">
                    <img src="${posterURL}" alt="Poster">
                    <h3>${detail.title}</h3>
                    <h5>Release Date: ${detail.release_date}</h5>
                    <p>${detail.overview}</p>
                </div>
                `;
            })
        })

        inp.value='';
})
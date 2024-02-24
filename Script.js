
const movieList = document.getElementById('movieList');

const movies = [
    { title: 'Leo (Tamil)', image: 'https://dnm.nflximg.net/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABRb2zFNQ5BNR4K6wF43eRxUA1pNHlhm7VrPRuMdSCdua_SpZYoI4wWkqTPjO4NjkjTEdlXfbDqNfgkcmGBpiHZLX8F8oxOm5xQok.jpg?r=4e1' },
    { title: 'Vikram (Tamil)', image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/436/1630436-h-18323ab5427d' },
    { title: 'Kaithi (Tamil)', image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4361/584361-h' },
    { title: 'Maanagaram (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/14f6d13a7bf6e9cd207b274b0271e48828fc02e2eebf5e693c30fc60634b2fd5.jpg' },
    { title: 'Master (Tamil)', image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ce6f2de4d4d41f929d71b0199857a1077ed0b39367c61bee06fdf7853237449._RI_TTW_SX1080_FMjpg_.jpg' }
];

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieList.appendChild(movieCard);
});


document.addEventListener('DOMContentLoaded', function() {
  const exploreNowBtn = document.querySelector('.btn');
  const kanagarajMarathonSection = document.getElementById('popular-movies');

  exploreNowBtn.addEventListener('click', function(event) {
      event.preventDefault();
      kanagarajMarathonSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


const vetrimaaransMovieList = document.getElementById('vetrimaaransMovieList');

const vetrimaaransMovies = [
    { title: 'Asuran (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/8d0e0fe2811d05b9237b35be17dc46c8f5bbfb0daad97eea9e331c4885d49050.jpg' },
    { title: 'Vada Chennai (Tamil)', image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1063/181063-h' },
    { title: 'Viduthalai Part 1 (Tamil)', image: 'https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-1z5351468/list/1170x658withlogo3111eff77a5a496daa830fabfb7cbe4ae1fdf9c6f7b243f2a2d69d6a66ec8988.jpg' },
    { title: 'Polladhavan (Tamil)', image: 'https://sund-images.sunnxt.com/8105/1920x1080_Polladhavan_8105_c03e600c-4767-45da-b1d4-3cd3c1cee116.jpg' },
    { title: 'Aadukalam (Tamil)', image: 'https://sund-images.sunnxt.com/6938/640x360_Aadukalam_6938_e0011a30-24dc-443b-9656-f956db72f076.jpg' }
];

vetrimaaransMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    vetrimaaransMovieList.appendChild(movieCard);
});


const thalaivarsMovieList = document.getElementById('thalaivarsMovieList');

const thalaivarsMovies = [
    { title: 'Kaala (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/298f1bdc4ada3002166677fd970d23d5f8325a609a57c5722c8382fb35cace75.jpg' },
    { title: 'Kabali (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/3311098077b1dca787e54657b8e2b4965dc877a26ed9ce5da8dc6ff537867967.jpg' },
    { title: 'Petta (Tamil)', image: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABS5jXUhPKxrwjCm8EksZO7NOssw6QphAlagW9zYDcT5FWQo-jt3fh2GNcSkn1P_m4cuYFDoByTjz6G6mxjSAiBdDInTF1H54HkXA.jpg?r=73e' },
    { title: 'Sivaji (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/2502a336ce906a585d5f77a6f7b101cc6f11bc0016f521f0976a2f2eed30b2a1.jpg' },
    { title: 'Enthiran (Tamil)', image: 'https://sund-images.sunnxt.com/165835/640x360_Enthiran4K_165835_c7a4f005-53c1-427b-ab13-133d9ef91319.jpg' }
];

thalaivarsMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    thalaivarsMovieList.appendChild(movieCard);
});

const top5MovieList = document.getElementById('top5MovieList');

const top5Movies = [
    { title: 'Lal Salaam (Tamil)', image: 'https://m.media-amazon.com/images/M/MV5BNGI3MDIzZTEtNzY5YS00OGQzLWFlYjEtYjJiNzliY2Q0YzkxXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg', description: 'Directed By Aishwarya Rajinikanth' },
    { title: 'Ayalaan (Tamil)', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a774691-2c1e-4c5d-9ee4-27d3623b3e51/dfvbobr-a66bd526-e79e-4623-bb02-ced65a762907.jpg/v1/fill/w_735,h_1088,q_70,strp/ayalaan_poster_design_by_stevemosesdir_dfvbobr-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4OCIsInBhdGgiOiJcL2ZcLzJhNzc0NjkxLTJjMWUtNGM1ZC05ZWU0LTI3ZDM2MjNiM2U1MVwvZGZ2Ym9ici1hNjZiZDUyNi1lNzllLTQ2MjMtYmIwMi1jZWQ2NWE3NjI5MDcuanBnIiwid2lkdGgiOiI8PTkzOCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hRTxLVuce-oaZL7eZGfrSa9cvrz2wBzOLDqMarjIojc', description: 'Directed By R.Ravikumar' },
    { title: 'Captain Miller (Tamil)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZf9atP4cUR_j6XlOOPVTgEIN1Re9-yLoh-EjTUyOATtNbTXS', description: 'Directed By Arun Matheswaran' },
    { title: 'Blue Star (Tamil)', image: 'https://m.media-amazon.com/images/M/MV5BYjJmYzRjOTktNTljYy00MjRiLWI2NmUtN2Y1YzkyNjdjZDBjXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg', description: 'Directed By S.Jayakumar' },
    { title: 'Leo (Tamil)', image: 'https://m.media-amazon.com/images/M/MV5BMmFiOGYyZjQtZmZmNC00ZTgzLWI5ZjktMTRiYzc5NjAzODRkXkEyXkFqcGdeQXVyMTYyNDkzNzgz._V1_.jpg', description: 'Directed By Lokesh Kanagaraj' }
];

top5Movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
    movieDetails.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
    `;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieDetails);
    top5MovieList.appendChild(movieCard);

    movieCard.addEventListener('mouseenter', function() {
        movieDetails.style.display = 'block';
    });

    movieCard.addEventListener('mouseleave', function() {
        movieDetails.style.display = 'none';
    });
});

// Dummy movie data for Thalapathy's cinema
const thalapathyMovies = [
  { title: 'Theri (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/994df3a256805ab65cf126c98e05c46bac2b023c8c6cdc1baea0f07d2448360e.jpg' },
  { title: 'Mersal (Tamil)', image: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABa9ra5U7ftEPqtxQ62w-d8WFG6E09sSru8-MaCMasGC0eClofoMoMGGBqyluRSbb0o93oIWEKsR7Ilj3Y4-yIgZGQpQWeHejTYI.jpg?r=ef3' },
  { title: 'Thupakki (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/1f6455239ccb7781936362348b9603b7f317fd3d5faa3725593b73f0e0cd8ae5.jpg' },
  // Add more movie entries as needed
];

// Reference to Thalapathy's cinema movie list container
const thalapathyMovieList = document.getElementById('thalapathyMovies');

// Loop through Thalapathy's cinema movies and create movie cards
thalapathyMovies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.image;
  movieImage.alt = movie.title;

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.title;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieTitle);
  thalapathyMovieList.appendChild(movieCard);
});
// Dummy movie data for Exclusively On TamilFlix
const tamilflixMovies = [
  { title: 'Ghilli (Tamil)', image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9912/1579912-h-18f9f45a5f95' },
  { title: 'Virumaandi (Tamil)', image: 'https://cinereporters.com/wp-content/uploads/2022/06/VIRUMANDI-KAMAL2.jpg' },
  { title: 'Nayakan (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/ac4646932aec4752487060cb5309ff1a83412935443d8a5cba8180f685312e4a.jpg' },
  // Add more moMvie entries as needed
];

// Reference to Exclusively On TamilFlix movie list container
const tamilflixMovieList = document.getElementById('tamilflixMovies');

// Loop through Exclusively On TamilFlix movies and create movie cards
tamilflixMovies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.image;
  movieImage.alt = movie.title;

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.title;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieTitle);
  tamilflixMovieList.appendChild(movieCard);
});


// Fetch movie data for cult classics from an API or use dummy data
const cultClassicsMovies = [
    { title: 'Anbe Sivam (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/f42939de25fdf48d768d2df1de0bf36867d25ae19d45bf5639f5ce8265a0e15a.jpg' },
    { title: 'Pudhupettai (Tamil)', image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5110/1535110-h-a9e5d4cc6f0a' },
    { title: 'Aayirathil Oruvan (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/461e729cfb1ad5f63fed916681926714a96e7362d2877837b00206e09859c8d3.jpg' },
    { title: 'Vasool Raja M.B.B.S (Tamil)', image: 'https://sund-images.sunnxt.com/8781/960x540_VasoolRajaMBBS_8781_908e7168-8dda-42fb-8d69-ee1bd563c381.jpg' },
    { title: 'Mahanadi (Tamil)', image: 'https://m.media-amazon.com/images/S/pv-target-images/433cbc51b715ed36747bfb6ee3a34ac793424c1732877950a7c246120c159a86.jpg' }
];

// Function to dynamically generate movie cards for cult classics
function generateCultClassicsCards() {
    const cultClassicsList = document.getElementById('cultClassicsList');

    // Clear existing movie cards
    cultClassicsList.innerHTML = '';

    // Generate movie cards for cult classics
    cultClassicsMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieTitle);
        cultClassicsList.appendChild(movieCard);
    });
}

// Call the function to generate movie cards for cult classics
generateCultClassicsCards();


document.addEventListener('DOMContentLoaded', function() {
    const todaysPicksMovieList = document.getElementById('todaysPicksMovieList');

    // Dummy placeholder data with song name, artist, and image
    const placeholders = [
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/87/97/75/879775f4-51f6-dda5-9e13-f762d8f9a1fd/197189290183.jpg/600x600bf-60.jpg', song: 'Kaavaala (From "Jailer")', artist: 'By Anirudh Ravichander', audio: 'https://www.pagalworld.com.cm/files/download/id/67070' },
        { image: 'https://c.saavncdn.com/823/Chithha-Tamil-2023-20230926235310-500x500.jpg', song: 'Unakku Thaan (From "Chithha)', artist: 'By Santhosh Narayanan', audio: 'https://files.samadada.com/movies/2023/Chithha/Unakku_Thaan_[SamaDada.Com].mp3' },
        // Add more placeholder data as needed
    ];

    // Loop through placeholders and create boxes with song and artist information
    placeholders.forEach(placeholder => {
        const box = document.createElement('div');
        box.classList.add('movie-card');

        const boxImage = document.createElement('img');
        boxImage.src = placeholder.image;
        boxImage.alt = 'Placeholder Image';

        const songInfo = document.createElement('div');
        songInfo.classList.add('song-info');
        songInfo.innerHTML = `<p>${placeholder.song}</p><p>${placeholder.artist}</p>`;

        box.appendChild(boxImage);
        box.appendChild(songInfo);

        // Add event listener to play audio on hover
        box.addEventListener('mouseenter', function() {
            const audio = new Audio(placeholder.audio);
            audio.currentTime = 60; // Start playing from 50th second
            audio.play();
        
        box.addEventListener('mouseleave', () => {
                audio.pause();
                audio.currentTime = 0;
            });

        });

        todaysPicksMovieList.appendChild(box);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const listenNowBtn = document.getElementById('listenNowBtn');
    const listenSection = document.getElementById('listen-section');

    listenNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionPosition = listenSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const justInMovieList = document.getElementById('justInMovieList');

    // Dummy placeholder data with song name, artist, and audio URL
    const placeholders = [
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d4/64/d7/d464d75a-f545-ba39-8f5d-79f5a961601e/196871806626.jpg/1200x1200bf-60.jpg', song: 'Jalali (From "Lal Salaam")', artist: 'By AR Rahman', audio: 'https://pagallworld.co.in/wp-content/uploads/2024/01/Jalali-Lal-Salaam.mp3' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/ba/38/81ba3835-8b79-5c98-d777-b86a843faa98/196871157650.jpg/1200x1200bf-60.jpg', song: 'Raasa Kannu (From "Maamannan")', artist: 'By AR Rahman', audio: 'https://pagallworld.co.in/wp-content/uploads/2024/02/Raasa-Kannu.mp3' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/80/df/08/80df0808-17e7-ab41-5972-fec5f83e3819/cover.jpg/1200x630bb.jpg', song: 'Katchi Sera (From "Think Indie")', artist: ' By Sai Abhyankkar', audio:'https://pagallworld.co.in/wp-content/uploads/2024/01/Katchi-Sera-Sai-Abhyankkar.mp3' },
        { image: 'https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg', song: 'Kurchi Madathapetti (From "Guntur Kaaram")', artist: 'By Thaman S', audio:'https://pagallworld.co.in/wp-content/uploads/2023/12/Kurchi-Madathapetti-Mp3.mp3' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/1200x1200bf-60.jpg', song: 'Naa Ready (From "Leo")', artist: 'By Anirudh Ravichander', audio:'https://pagallworld.co.in/wp-content/uploads/2023/09/Naan-Ready-Thaan.mp3' }
        
        // Add audio URLs for other songs
    ];

    // Loop through placeholders and create boxes with song and artist information
    placeholders.forEach(placeholder => {
        const box = document.createElement('div');
        box.classList.add('movie-card');

        const boxImage = document.createElement('img');
        boxImage.src = placeholder.image;
        boxImage.alt = 'Placeholder Image';

        const songInfo = document.createElement('div');
        songInfo.classList.add('song-info');
        songInfo.innerHTML = `<p>${placeholder.song}</p><p>${placeholder.artist}</p>`;

        // Add audio element
        const audio = document.createElement('audio');
        audio.src = placeholder.audio;
        audio.preload = 'auto';

        box.appendChild(boxImage);
        box.appendChild(songInfo);
        box.appendChild(audio);

        // Add event listeners for play and pause
        box.addEventListener('mouseenter', () => {
audio.currentTime = 60; // Start playback from 50th second
audio.play();
});

        box.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });

        justInMovieList.appendChild(box);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const justInMovieList = document.getElementById('rahmansMelodiesList');

    // Dummy placeholder data with song name, artist, and audio URL
    const placeholders = [
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6c/44/00/6c440096-21e9-bf05-b50b-867dc474f7e8/dj.xehvefut.jpg/1200x1200bb.jpg', song: 'Anbay (From "Kadhal Desam")', artist: 'By AR Rahman', audio: 'https://pagallworld.co.in/wp-content/uploads/2023/10/Ennai-Kanavillaiye-Netrodu.mp3' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9d/4c/aa/9d4caade-11ea-c49f-9742-81f4f15e68a2/8901854075812.png/1200x1200bf-60.jpg', song: 'Ponni Nadhi (From "Ponniyin Selvan Part -1")', artist: 'By AR Rahman', audio: 'https://paglasongs.com/files/download/id/9074' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music60/v4/6f/1f/8d/6f1f8d0b-fc9a-747f-3ac8-f1ffc5003963/cover.jpg/600x600bf-60.jpg', song: 'Arima Arima (From "Enthiran")', artist: 'By AR Rahman', audio:'https://pagallworld.co.in/wp-content/uploads/2023/12/Arima-Arima.mp3' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/93/e0/e6/93e0e603-2500-da00-520f-17c02cca2649/196589997289.jpg/600x600bf-60.jpg', song: 'Nee Singam Dhan (From "Pathu Thala")', artist: 'By AR Rahman', audio:'https://pagalnew.com/download128/39157' },
        { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c2/49/12/c249126b-167a-2b8d-d56e-47f4cfbbc58b/dj.fydkqyjx.png/600x600bf-60.jpg', song: 'Enna Vilai (From "Kadhalar Dhinam")', artist: 'By AR Rahman', audio:'https://pagallworld.co.in/wp-content/uploads/2023/06/Enna-Vilai-Azhage.mp3' }
        
        // Add audio URLs for other songs
    ];

    // Loop through placeholders and create boxes with song and artist information
    placeholders.forEach(placeholder => {
        const box = document.createElement('div');
        box.classList.add('movie-card');

        const boxImage = document.createElement('img');
        boxImage.src = placeholder.image;
        boxImage.alt = 'Placeholder Image';

        const songInfo = document.createElement('div');
        songInfo.classList.add('song-info');
        songInfo.innerHTML = `<p>${placeholder.song}</p><p>${placeholder.artist}</p>`;

        // Add audio element
        const audio = document.createElement('audio');
        audio.src = placeholder.audio;
        audio.preload = 'auto';

        box.appendChild(boxImage);
        box.appendChild(songInfo);
        box.appendChild(audio);

        // Add event listeners for play and pause
        box.addEventListener('mouseenter', () => {
audio.currentTime = 50; // Start playback from 50th second
audio.play();
});

        box.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });

        justInMovieList.appendChild(box);
    });
});

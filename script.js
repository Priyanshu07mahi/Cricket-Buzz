const matchesData = [
    { team1: 'Chennai Super Kings', team2: 'Royal Challengers Bangalore', score: '<br/> CSK - 199/3 (Overs: 20) <br /> RCB - 12/3 (Overs: 1.2/20) <br/> RCB needs 188 runs in 18.4 overs.' },
    { team1: 'Mumbai Indians', team2: 'Lucknow Super Giants', score: '<br/> LSG - 178/8 (Overs: 20) <br /> MI - 22/1 (Overs: 2.2/20) <br/> RCB needs 157 runs in 17.4 overs.'}
];

const newsData = [
    { title: 'News 1', content: 'MS Dhoni drops cryptic new season-new role post as CSK captain fuels speculations about his future ahead of IPL 2024', url: 'https://www.timesnownews.com/sports/cricket/ms-dhoni-hints-at-new-role-in-ipl-2024-with-rare-social-media-post-article-108209525' },
    { title: 'News 2', content: 'Pat Cummins to lead Sunrisers Hyderabad in IPL 2024', url:'https://www.thehindu.com/sport/cricket/indian-premier-league-2024-sunrisers-hyderabad-names-pat-cummins-as-captain/article67912726.ece' }
];

const videosData = [
    { title: 'Video 1', url: 'https://www.youtube.com/watch?v=video1' },
    { title: 'Video 2', url: 'https://www.youtube.com/watch?v=video2' }
];

const rankingsData = [
    { team: 'CSK', rank: 1 },
    { team: 'LSG', rank: 2 },
    { team: 'GT', rank: 3 },
    { team: 'RCB', rank: 4 },
    { team: 'KKR', rank: 5 },
    { team: 'MI', rank: 6 },
    { team: 'DC', rank: 7 },
    { team: 'PBKS', rank: 8 },
    { team: 'SRH', rank: 9 },
    { team: 'RR', rank: 10 }

    
    
];

// Function to populate matches section
function populateMatches() {
    const matchesContainer = document.getElementById('matches');
    matchesContainer.innerHTML = ''; // Clear existing content

    // Iterate through matchesData and create HTML elements for each match
    matchesData.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match');
        matchElement.innerHTML = `
            <h3>${match.team1} vs ${match.team2}</h3>
            <p> ${match.score}</p>
        `;
        matchesContainer.appendChild(matchElement);
    });
}

// Function to populate news section
function populateNews() {
    const newsContainer = document.getElementById('news');
    newsContainer.innerHTML = ''; // Clear existing content

    // Iterate through newsData and create HTML elements for each news item
    newsData.forEach(newsItem => {
        const newsItemElement = document.createElement('div');
        newsItemElement.classList.add('news-item');
        newsItemElement.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
            <p>Watch the news <a href="${newsItem.url}" target="_blank">here</a></p>
        `;
        newsContainer.appendChild(newsItemElement);
    });
}

// Function to populate videos section
function populateVideos() {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''; // Clear existing content

    // Iterate through videosData and create HTML elements for each video
    videosData.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <p>Watch the video <a href="${video.url}" target="_blank">here</a></p>
        `;
        videosContainer.appendChild(videoElement);
    });
}

// Function to populate rankings section
function populateRankings() {
    const rankingsContainer = document.getElementById('rankings');
    rankingsContainer.innerHTML = ''; // Clear existing content

    // Iterate through rankingsData and create HTML elements for each ranking item
    rankingsData.forEach(rank => {
        const rankElement = document.createElement('div');
        rankElement.classList.add('rankings-item');
        rankElement.innerHTML = `
            <h3>${rank.team} - Rank ${rank.rank}</h3>
        `;
        rankingsContainer.appendChild(rankElement);
    });
}

// Call functions to populate sections when the page loads
window.onload = function() {
    populateMatches();
    populateNews();
    populateVideos();
    populateRankings();
};

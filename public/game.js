const gamesList = document.getElementById('gamesList');
const searchBar = document.getElementById('searchBar');
let newGamesList = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredGames = newGamesList.filter((game) => {
        return (
            game.title.toLowerCase().includes(searchString) ||
            game.genre.toLowerCase().includes(searchString) ||
            game.publisher.toLowerCase().includes(searchString)
        );
    });
    displayGames(filteredGames);
});

/* searchBar.addEventListener('keyup', async (e) => {
    const searchString = e.target.value.toLowerCase();
    const res = await fetch(`http://localhost:3000/games?title=${e}`);
    const filteredGames = await res.json();
    displayGames(filteredGames);
}); */

const loadGames = async () => {
    try {
        const res = await fetch('http://localhost:3000/games');
        newGamesList = await res.json();
        displayGames(newGamesList);
    } catch (err) {
        console.error(err);
    }
};


const displayGames = (games) => {
    const htmlString = games
        .map((game) => {
            return `
            <li class="container">
                <div class="row" style="margin: 20px; background-color: #343a40;">
                    <div class="col-sm-5 col-md-4"> 
                        <img id="gameImg" class="img" src="${game.thumbnail}" alt="Card image cap" style="padding: 5px;">
                    </div>
                    <div class="m-3 col-sm-6 col-md-5"> 
                        <h5 id="gameTitle" style="color: white;">${game.title}</h5>
                        <p id="gameText" style="color: white;">${game.short_description}</p>
                        <button class="btn btn-secondary"><span id="gameGenre" style="color: white;">${game.genre}</span></button>
                        <p style="color:grey; margin-top: 10px;">Publisher: ${game.publisher}</p>
                    </div>
                    <div class="col-sm-12 col-md-2 d-flex justify-content-center align-items-center"> 
                        <a id="" href="${game.game_url}" style="margin: 5px;" class="game-url btn btn-success">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nO2SMQqAMAxF36hX0lGH3k7F6zlVHPQScckgolRoMgh98KEE+h+khYIRFTAAm2bQmRkTILeMloJDSxug1fPuIWi9BKP3impgvpTPOjNHNG7IbwQ9sGg6S0EA1ocfIx8TteOVmFEuF8kruSuQ1P0ikNSK3B85ZEpi6psWuHMCIyR3EebGVo8AAAAASUVORK5CYII=">
                        </a> 
                    </div>
                </div>
            </li>
        `;
        })
        .join('');
        gamesList.innerHTML = htmlString;
};

loadGames();


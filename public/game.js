const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.title.toLowerCase().includes(searchString) ||
            character.genre.toLowerCase().includes(searchString) ||
            character.publisher.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('http://localhost:3000/games');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="container">
                <div class="row">
                <div class="col-sm-5 col-md-4"> <!-- 30% column -->
                    <!-- Your content for the first column goes here -->
                    <img id="gameImg" class="img" src="${character.thumbnail}" alt="Card image cap" style="padding: 5px;">
                </div>
                <div class="m-3 col-sm-6 col-md-5"> <!-- 50% column -->
                    <!-- Your content for the second column goes here -->
                    <h5 id="gameTitle" style="color: white;">${character.title}</h5>
                    <p id="gameText" style="color: white;">${character.short_description}</p>
                    <button class="btn btn-secondary"><span id="gameGenre" style="color: white;">${character.genre}</span></button>
                    <p style="color:grey; margin-top: 10px;">Publisher: ${character.publisher}</p>
                </div>
                <div class="col-sm-12 col-md-2"> <!-- 20% column -->
                    <!-- Your content for the third column goes here -->
                    <a id="" href="${character.game_url}" class="game-url btn btn-success"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nO2SMQqAMAxF36hX0lGH3k7F6zlVHPQScckgolRoMgh98KEE+h+khYIRFTAAm2bQmRkTILeMloJDSxug1fPuIWi9BKP3impgvpTPOjNHNG7IbwQ9sGg6S0EA1ocfIx8TteOVmFEuF8kruSuQ1P0ikNSK3B85ZEpi6psWuHMCIyR3EebGVo8AAAAASUVORK5CYII="></a> 
                    <a id="" href="#" class="game-url btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg></a> 
                </div>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


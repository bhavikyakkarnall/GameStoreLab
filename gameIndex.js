const Games = class {
    async getAllGames() {
        const url = 'http://localhost:3000/games';
        const response = await fetch(url);
        const games = await response.json();
        return games;
    }

}


async function showGames() {
    try {
        var games = await gamesService.getAllGames();
    }
    catch (error) {
        console.log(error);
        showErrorMessage(error);
        return;
    }

    for (let game of games) {
        addGameToPage(game);
    }
}


function addGameToPage(game) {
    var template = document.getElementById("game-template").content.cloneNode(true);
    template.querySelector('#gameTitle').innerText = game.title;
    template.querySelector('#gameText').innerText = game.short_description;
    template.querySelector('#gameGenre').innerText = game.genre;
    template.querySelector('#gameImg').src = game.thumbnail;
    template.querySelector('.game-url').href = game.game_url;

    document.querySelector('#games-list').appendChild(template);
}

function showErrorMessage(error) {
    var errorMessageElement = document.getElementById("error-messages");
    errorMessageElement.style.display = "block";
    errorMessageElement.innerText = "Error: " + error.message;
}
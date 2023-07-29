import gamesList from '../data-storage/data.js';
let games = gamesList;


class Game {
  constructor(id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.short_description = short_description;
    this.game_url = game_url;
    this.genre = genre;
    this.platform = platform;
    this.publisher = publisher;
    this.developer = developer;
    this.release_date = release_date;
    this.freetogame_profile_url = freetogame_profile_url;
  }

}

function getAllGames() {
  return games;
}

function getGameById(id) {
  const game = games.find((game) => game.id === id);
  return game;
}

function createGame(id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url) {
  const newGame = new Product(id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url);
  games.push(newGame);
  return newGame;
}

function updateGame(id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url) {
  const index = games.findIndex((game) => game.id === id);
  if (index !== -1) {
    games[index].id = id
    games[index].title = title
    games[index].thumbnail = thumbnail
    games[index].short_description = short_description
    games[index].game_url = game_url
    games[index].genre = genre
    games[index].platform = platform
    games[index].publisher = publisher
    games[index].developer = developer
    games[index].release_date = release_date
    games[index].freetogame_profile_url = freetogame_profile_url
    return games[index];
  }
  return null;
}

function deleteGame(id) {
  const index = games.findIndex((game) => game.id === id);
  if (index !== -1) {
    return games.splice(index, 1)[0];
  }
  return null;
}

function getGameByGenre(genre) {
  const game = games.filter((game) => game.genre === genre);
  return game;
}

function getGameByTitle(title) {
  const game = games.filter((game) => game.title === title);
  return game;
}

function getGameByPublisher(publisher) {
  const game = games.filter((game) => game.publisher === publisher);
  return game;
}

export default {
  Game,
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  getGameByGenre,
  getGameByTitle,
  getGameByPublisher
}
import Game from '../services/gameServices.js'
//const games = new Game();
//import dataGame from '../data-storage/data.js';


export default class GamesController {

    getAllGames(req,res) {
        try{
           let game = Game.getAllGames();
           if(game == null){
            throw new Error('Error: No games to display')
           }
           res.status(200)
           res.json(game)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    getGameById(req,res) {
        try{
            let game = Game.getGameById(parseInt(req.params.id))
            if(game == null){
                throw new Error('Error: No games to display')
            }
           res.status(200)
           res.json(game)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    createGame(req,res) {
        try{
            let game = Game.createProduct(req.params.id, req.params.title, req.params.thumbnail, req.params.short_description, req.params.game_url, req.params.genre, req.params.platform, req.params.publisher, req.params.developer, req.params.release_date, req.params.freetogame_profile_url)
            if(game == null){
                throw new Error('Error: No games to display')
            }
            console.log(games)
            res.status(200)
            res.json(games)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    updateGame(req,res) {
        try{
            let game = Game.createProduct(req.params.id, req.params.title, req.params.thumbnail, req.params.short_description, req.params.game_url, req.params.genre, req.params.platform, req.params.publisher, req.params.developer, req.params.release_date, req.params.freetogame_profile_url)
            if(game == null){
                throw new Error('Error: No games to display')
            }
            console.log(games)
            res.status(200)
            res.json(games)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    deleteGame(req,res) {
        try{
            let game = Game.deleteProduct(parseInt(req.params.id))
            if(game == null){
                throw new Error('Error: No games to display')
            }
            console.log(games)
            res.status(200)
            res.json(games)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

}



  
  
  
  

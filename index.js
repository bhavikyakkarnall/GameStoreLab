const GamesService = class { 
    constructor(apiKey, baseUrl, apiHost='') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.apiHost = apiHost;
    }
    
    async getAllGames() {
        const url = this.baseUrl + '/games';
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        const response = await fetch(url, options);
        const games = await response.json();
        return games;
    }
}
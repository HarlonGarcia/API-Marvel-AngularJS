angular.module('app').service('CharactersService', function($http, env) {

    const params = {
        ts: 1656786654338,
        apikey: "c27e7e179757ab59bc5614b253f5c9bc",
        hash: "6663e8f9069b7e5442f04d4630834014",
    }

    this.getCharacters = (name, offset, limit) => {
        params['offset'] = offset;
        params['limit'] = limit

        if (!!name) {
            params['nameStartsWith'] = name
        }

        return $http.get(`${env.apiUrl}/characters`, {
                params
            });
    }

    this.getCharacterComics = (characterId) => {

        delete params.nameStartsWith;

        return $http.get(`${env.apiUrl}/characters/${characterId}/comics`, {
            params
        });
    }
})
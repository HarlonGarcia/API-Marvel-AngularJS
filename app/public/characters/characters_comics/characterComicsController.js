angular.module("app").controller("CharacterComicsController", [ 'CharactersService', '$stateParams', ComicsController])

function ComicsController(charactersService, $stateParams) {
    const vm = this;
    vm.comicsData = [];
    vm.characterId = $stateParams.characterId;

    vm.getComics = () => {
        charactersService.getCharacterComics(vm.characterId)
        .then(response => {
            vm.comicsData = response.data.data.results;
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    this.returnToHome = () => {
        window.location.replace('#!/home');
    }
    
    vm.init = () => {
        vm.getComics();
    }

    vm.init()
}
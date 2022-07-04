angular.module('app').controller('HomeController', ['CharactersService', '$state', HomeController])

function HomeController(charactersService, $state) {
    const vm = this;
    vm.charactersData = [];
    vm.characterWanted = '';
    vm.offset = 0;
    vm.limit = 18;

    vm.searchCharacter = () => {
        vm.offset = 0;
        vm.getCharacters(true);
    };

    vm.getCharacters = (clear) => {
        charactersService.getCharacters(vm.characterWanted, vm.offset, vm.limit)
        .then(response => {
            if (clear) {
                vm.charactersData = response.data.data.results    
            } else {
                vm.charactersData = [...vm.charactersData, ...response.data.data.results]
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    vm.seeComics = (character) => {
        $state.go('comics', {
            characterId: character.id
        });
    }

    vm.seeMore = () => {
        vm.offset += vm.limit;
        vm.getCharacters();
    }

    vm.init = () => {
        vm.getCharacters();
    }

    vm.init()
}
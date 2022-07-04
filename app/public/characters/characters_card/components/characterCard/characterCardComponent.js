angular.module('app').component('characterCard', {
    bindings: {
        character: '<',
        seeComics: '&'
    },
    templateUrl: "public/characters/characters_card/components/characterCard/characterCardComponent.html",
    controller: function() {},
    controllerAs: "ctrl"
})
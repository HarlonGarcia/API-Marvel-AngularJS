angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "public/home/homeTemplate.html",
    })
    .state("comics", {
      url: "/comics/:characterId",
      templateUrl: "public/characters/characters_comics/characterComicsTemplate.html",
      params: {
        characterId: null
      }
    });

    $urlRouterProvider.otherwise("/home");
  },
]);

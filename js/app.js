angular.module('concertTrack', ['ui.router', 'ui.materialize'])

	.config(function($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "home.html",
				controller: "concertCtrl"
			})
			.state("artistInfo", {
				url: "/artist/:artistName",
				templateUrl: "artist.html",
				controller: "artistCtrl"
			})

	})

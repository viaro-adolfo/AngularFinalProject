/* Angular project App - Suggestion Box */
angular.module('SuggestionBox', ['ngRoute']);

angular.module('SuggestionBox')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'SuggestionController',
                templateUrl: 'views/suggestion.html',
                controllerAs: 'SuggCtrl'
            })
            .when('/suggestion/:id', {
                controller: 'CommentController',
                templateUrl: 'views/comment.html',
                controllerAs: 'CommCtrl'
            })
            .otherwise({redirectTo: '/'})
        ;
    });

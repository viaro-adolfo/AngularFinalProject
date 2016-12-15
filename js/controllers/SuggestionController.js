'use strict';

angular.module('SuggestionBox')
.controller('SuggestionController', [
    '$routeParams',
    'SuggestionService',

    function($routeParams, SuggestionService){
        var vm = this;

        vm.new_suggestion = '';
        vm.posts = SuggestionService.posts;

        vm.addSuggestion = addSuggestion;
        vm.suggestionUpVotes = upVotes;

        function addSuggestion() {
            if (!vm.new_suggestion || vm.new_suggestion === '') {
                return;
            }

            vm.posts.push({
                title: vm.new_suggestion,
                upvotes: 0,
                comments: [],
                id: vm.posts.length
            });
            vm.new_suggestion = '';
        }

        function upVotes(suggestion) {
            suggestion.upvotes++;
        }
    }
]);

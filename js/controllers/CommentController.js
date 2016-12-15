'use strict';

angular.module('SuggestionBox')
.controller('CommentController', [
    '$routeParams',
    'SuggestionService',

    function($routeParams, SuggestionService) {
        var vm = this;

        vm.suggestion = SuggestionService.posts[$routeParams.id];

        vm.comment_text = '';
        vm.addComment = addComment;
        vm.commentUpVotes = upVotes;

        function addComment() {
            if (!vm.comment_text || vm.comment_text === '') {
                return;
            }

            vm.suggestion.comments.push({
                text: vm.comment_text,
                upvotes: 0
            });

            vm.comment_text = '';
        };

        function upVotes(comment) {
            comment.upvotes++;
        }
    }
])

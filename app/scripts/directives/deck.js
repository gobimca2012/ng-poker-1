'use strict';

/**
 * @ngdoc directive
 * @name fcApp.directive:deck
 * @description
 * # deck
 */
angular.module('fcApp')
  .directive('deck', function (lodash, Game) {
    return {
      template:
      '<div class="large">'
      + '<section ng-click="turn()" class="card card--back left">'
      + '<div class="card__inner card__inner--centered">'
        + '<div class="card__symbol"></div>'
      + '</section>'
      +'<h4 class="card-count left">{{cards.length}}</h4>'
      + '</div>',
      restrict: 'E',
      link: function postLink(scope) {
        scope.$watchCollection(Game.getCards, function (newVal) {
          scope.cards = newVal;
        });
      }
    };
  });

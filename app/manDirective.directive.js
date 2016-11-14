'use strict';

angular.module('myApp')

    .directive('man', function () {
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            template: '<div><b>Name:</b> {{man.name}}</div><div><b>Age:</b> {{man.age}}</div><br><br>',
            link: function (scope, element) {
                angular.element(element).animate({'margin-left': '40px'}, 500);
            }
        }
    });
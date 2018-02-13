var app = angular.module('kkpMockupApp', ['ui.router']);

app.config(route)

function route($urlRouterProvider) {
    $urlRouterProvider.when('', '/product/list/');

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('product.list');
    });
}
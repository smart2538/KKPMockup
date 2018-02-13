
app.config(route)

function route($stateProvider) {
    $stateProvider
        .state('product', {
            abstract: true,
            url: '/product',
            template: '<ui-view/>'
        })
        .state('product.list', {
            url: '/list',
            templateUrl: 'template/product.list.html',
            controller: "productListController"
        })

        .state('product.create', {
            url: '/create',
            templateUrl: 'template/product.create.html',
            controller: "productCreateController"
        })



}

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
            controller: function ($scope) {
                $scope.productList = [
                    {
                        image: "../img/img1.jpg",
                        name: "บ้านริมน้ำ สุขุมวิท",
                        price: "5000000",
                        category: "บ้านเดี่ยว",
                        quantity: "1",
                        status: "active",
                    }
                ]

                for (var i = 0; i < 20; i++) {
                    $scope.productList.push(angular.copy($scope.productList[0]));
                }
                angular.element(document).ready(function () {
                    console.log('heldofj"');
                    $('#datatable1').DataTable({
                        responsive: true,
                        language: {
                            searchPlaceholder: 'Search...',
                            sSearch: '',
                            lengthMenu: '_MENU_ items/page',
                        }
                    });

                    // Select2
                    $('.dataTables_length select').select2({ minimumResultsForSearch: Infinity });
                });
            }
        })

        .state('product.create', {
            url: '/create',
            templateUrl: 'template/product.create.html'
        })



}
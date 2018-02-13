app.controller('productListController', productListController);

function productListController($scope) {

    $scope.productList = [
        {
            Image: "../img/img1.jpg",
            Name: "บ้านริมน้ำ สุขุมวิท",
            Price: "5000000",
            Category: "บ้านเดี่ยว",
            Quatity: "1",
            Status: "active",
        }
    ]

    for (var i = 0; i < 20; i++) {
        $scope.productList.push(angular.copy($scope.productList[0]));
    }
    console.log($scope.productList);
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

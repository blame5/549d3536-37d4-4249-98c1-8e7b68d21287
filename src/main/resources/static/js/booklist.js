webApp.controller('ListController', function ($scope, WebService) {

    $scope.categories = [
        {
            name: "category 1",
            books: [
                {name: "book1", rating: 4},
                {name: "book2", rating: 2},
                {name: "book3", rating: 3},
                {name: "book4", rating: 4},
                {name: "book5", rating: 5},
                {name: "book6", rating: 1},
                {name: "book7", rating: 0},
                {name: "book8", rating: 5}]
        },
        {name: "category 2"},
        {name: "category 3"},
        {name: "category 4"}];

    $scope.selectCategory = function (category) {
        $scope.selectedCategory = category;
    }

    $scope.getStars = function(num) {
        return new Array(num);
    }
    $scope.getBlanks = function(num) {
        return new Array(5 - num);
    }
    $scope.gotoBook = function(book) {
        document.location.href="/audio/book.html"
    }
});
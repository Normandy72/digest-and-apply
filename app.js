(function(){
    'use strict';

    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout){
        $scope.counter = 0;

        // wrong way
        // $scope.upCounter = function(){
        //     setTimeout(function(){
        //         $scope.counter++;
        //         console.log('Counter incremented!');
        //         $scope.$digest();
        //     }, 2000);            
        // };


        // correct way
        // $scope.upCounter = function(){
        //     setTimeout(function(){
        //         $scope.$apply(function(){
        //             $scope.counter++;
        //             console.log('Counter incremented!');
        //         });                
        //     }, 2000);            
        // };

        
        // use $timeout 
        // ($timeout should be add in $inject and as argument for CounterController function)
        $scope.upCounter = function(){
            $timeout(function(){
                $scope.counter++;
                console.log('Counter incremented!');
            }, 2000);           
        };
    };
})();
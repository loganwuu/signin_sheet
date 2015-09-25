SignInSheet.controller('SignInsCtrl', function SignInsCtrl($scope, $stateParams, StudentsFactory, UtilitiesFactory) {
    $scope.student = UtilitiesFactory.findById(StudentsFactory.students, $stateParams.studentId);
    $scope.signIn = function() {
        
    };

    $scope.signOut = function() {

    };
});

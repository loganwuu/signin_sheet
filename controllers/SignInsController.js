SignInSheet.controller('SignInsCtrl', function SignInsCtrl($scope, StudentsFactory) {
    $scope.student = StudentsFactory.students;
    $scope.signOut = function(student) {
        student.signedIn = false;
    };
});

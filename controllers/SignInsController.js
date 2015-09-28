SignInSheet.controller('SignInsCtrl', function SignInsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.signOut = function(student) {
        student.signedIn = false;
    };
    $scope.StudentsFactory = StudentsFactory;
});

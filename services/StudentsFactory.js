SignInSheet.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = ({ name: factory.studentName, signedIn: true });
    factory.students.push(student);
    factory.studentName = null;
  };

  // factory.signOut = function() {
  //
  // }

  return factory;
});

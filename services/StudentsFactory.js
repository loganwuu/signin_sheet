SignInSheet.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = ({ name: factory.studentName, signedIn: true, id: factory.students.length + 1});
    factory.students.push(student);
    factory.studentName = null;
  };

  return factory;
});

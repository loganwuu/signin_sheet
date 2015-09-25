SignInSheet.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, signedIn: true });
    factory.studentName = null;
  };

  return factory;
});

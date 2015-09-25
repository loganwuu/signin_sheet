SignInSheet.factory('SignInsFactory', function SignInsFactory() {
  var factory = {};
  factory.signIns = [];

  factory.signOut = function() {
    factory.signOut.push({ name: factory.answerName, answers: [] });

  };
  
  return factory;
});

$('#login').click(function() {
  var loginGrtr = G$('John', 'Doe');
  $('#loginContainer').hide();
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});

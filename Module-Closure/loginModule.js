var login = (function LoginModule() {
  function change() {
    if (publicApi.auth == googleLogin)
      publicApi.auth = facebookLogin;
    else
      publicApi.auth = googleLogin;
  }

  function facebookLogin() {
    console.log('facebookLogin');
  }

  function googleLogin() {
     console.log('googleLogin');
  }

  var publicApi = {
    change: change,
    auth: googleLogin
  }
  return publicApi;
})();

login.auth();
login.change();
login.auth();
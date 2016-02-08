
iris.modules.signupForm.registerHook("hook_form_render_signupForm", 0, function(thisHook, data){

  //if email value set and pass failed we want to repopulate it here
  ///console.log(thisHook);
  data.schema = {

      "email": {
        "type": "string",
        "label": "Email",
        "title": "Email address",
        "required": true
      },
        "pwd1": {
        "type": "string",
        "title": "Password",
        "required": true
      },
        "pwd2": {
        "type": "string",
        "title": "Enter password again",
        "required": true
      }
  };
  data.form = [
    {
      "key" : "email",
      "type" : "email"
    },
    {
      "key": "pwd1",
      "type": "password",
      "label": "Password1"
    },
    {
      "key": "pwd2",
      "type": "password",
      "label": "Password1"
    },
    {
      "type": "submit",
      "title": "Signup"
    } 
  ];

  thisHook.finish(true, data);

});

iris.modules.signupForm.registerHook("hook_form_submit_signupForm", 0, function(thisHook, data){

  //console.log(thisHook);
  //console.log(data);
  //console.log('submit fired');
  console.log(thisHook.const.params);
  // var pwd1 = thisHook.const.params.pwd1;
  // var pwd2 = thisHook.const.params.pwd2;

  if (thisHook.const.params.pwd1 !== thisHook.const.params.pwd2) {

    iris.message(thisHook.authPass.userid, 'Passwords are different ya numpty');
    console.log(iris.message);
    console.log(thisHook.authPass);
    thisHook.finish(false, 'Passwords do not match');

  } else {
    console.log('finishing true');
    // thisHook.finish(true, function(res) {
    //   res.send("/user-register");
    // });

  }

  thisHook.finish(true, function(res) {
    res.send("/user-register");
  });


})

// So I want to create a new user
// Hook the original form
// How are wee adding a new user just now
// Should I just go ahead and make something work
// 






// iris.modules.signupForm.registerHook("hook_form_render_entity", 0, function(thisHook, data){

//   console.log(thisHook.const.params);

//   thisHook.finish(true, function(res) {
//     res.send("/user-register");
//   })
// });




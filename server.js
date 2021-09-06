function startup(){
   let userNameServer= "Gochiwali"
   let UseripAddr="1.39.22.1"
   let userBrowser="Firefox(Linux-x64)"
   swal({
      closeOnClickOutside: false,
      closeOnEsc: false,
     title: `Login to gain access for ${userNameServer}`,
     text: `You are login from
     IP: ${UseripAddr},
     Application: ${userBrowser}`,
     icon: "info",
     button:`Login(${userNameServer})`,
   })
     .then(() => {
       swal({
         closeOnClickOutside: false,
         closeOnEsc: false,
         title: "Login",
         text:"Username",
         content: {
            element: "input",
            attributes: {
              placeholder: "Username",
              type: "text",
            },
         },
         icon:"warning",
      })
         .then((value)=> {
               swal({
                  closeOnClickOutside: false,
                  closeOnEsc: false,
                  title: `Welcome Back ${value}`,
                  text:"Password",
                  content: {
                     element: "input",
                     attributes: {
                       placeholder: "Password",
                       type: "password",
                     },
                   },
                  button:"Next",
               })
               .then((value)=> {
                  swal({
                     closeOnClickOutside: false,
                     closeOnEsc: false,
                     title: `Hello User at IP: ${UseripAddr}.
                     You are successfully Loged-in`,
                     text:"You are about to start you login-session by clicking on button [Start Session]",
                     button:"Start Session",
                     icon:"success",
                  })
               })
            })
         }
         )}

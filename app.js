const firebaseConfig = {
  apiKey: "AIzaSyDpHSDxHmpdcNoIrSlx7mn2-bqyso6jplg",
  authDomain: "st-web-hosting-1d4d1.firebaseapp.com",
  projectId: "st-web-hosting-1d4d1",
  storageBucket: "st-web-hosting-1d4d1.appspot.com",
  messagingSenderId: "74728979545",
  appId: "1:74728979545:web:dfc723a79b6dad0abc4548"
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);

// console.log(app);

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("Email sent Successfully..");
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// ***********************Login Auth*******************************

function login() {
  var email = document.getElementById("Useremail");
  var password = document.getElementById("Userpassword");

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// ***********************Forget Password section*******************************

function forgotPassword() {
  var email = document.getElementById("Useremail");

  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(() => {
      alert("password reset email sent...");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}























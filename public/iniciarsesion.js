// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDihsnhakDFD1ypSL7dx0pr9BQT-UyYox4",
    authDomain: "fir-test-7ce7f.firebaseapp.com",
    databaseURL: "https://fir-test-7ce7f.firebaseio.com",
    projectId: "fir-test-7ce7f",
    storageBucket: "fir-test-7ce7f.appspot.com",
    messagingSenderId: "732047211340"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
  var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
 
 // Sign in existing user
firebase.auth().signInWithEmailAndPassword(email, password)
 .catch(function(err) {
   // Handle errors
 });

// Sign out user
firebase.auth().signOut()
 .catch(function (err) {
   // Handle errors
 });
  
  
}

function googleSignout() {
   
}
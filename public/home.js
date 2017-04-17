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
  
  function register(name,lastname,school){
   
   var student={
      
       "name":document.getElementById("name").value,
       "lastname":document.getElementById("lastname").value,
       "school":document.getElementById("school").value      
}
 
  database.ref("students/").push(student); 
  console.log("estudiante registrado\n"+student.name+"\n"+student.lastname+"\n"+student.school);
  
  };
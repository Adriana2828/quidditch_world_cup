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
  var estudiantes = firebase.database().ref("students/");
  

  //EJEMPLO PARA LEER DATA DE FIREBASE Y MOSTRARLA EN UNA TABLA HTML

  estudiantes.once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
  var mascota=document.createElement("mascota");
  var contenido="<table align=center>"+"<tr>"+"<th bgcolor="+"+#529ecc+"+">"+"Name"+"</th>"+"<th bgcolor="+"+#529ecc+"+">"+"Lastname"+"</th>"+"<th bgcolor="+"+#529ecc+"+">"+"School"+"</th>"+"</tr>"+"<tr>"
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    contenido+="<th>"+childData.name+"</th>"+"<th>"+childData.lastname+"</th>"+"<th>"+childData.school+"</th>"+"</tr>";
    console.log("childkey "+childKey+"childData "+childData.name);
  });
   contenido+="</table>";
   mascota.innerHTML=contenido;
   document.getElementById("divmascotas").appendChild(mascota);
});



/*
database.ref().on("value", function(data) { //Value devuelve toda la data de la base de datos
   console.log("USANDO VALUE OBTIENES:");
   console.log(data.val());
}, function (error) {
   console.log("Error: " + error.code);
});

var students = database.ref("students/");
console.log("Lo q se devuelve usando child_added \n"); 
students.on("child_added", function(data, prevChildKey) {//child_added te devuelve la data y la mantiene actualizada.
   var newStudent = data.val();
   console.log("name: " + newStudent.name);
   console.log("lastname: " + newStudent.lastname);
   console.log("school: " + newStudent.school);
   console.log("Previous Student: " + prevChildKey);
});
*/


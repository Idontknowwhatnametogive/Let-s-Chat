
var firebaseConfig = {
    apiKey: "AIzaSyBURPv-LmbYFEx666FPAzhVqYMk8JgCLmg",
    authDomain: "kwitter-7110d.firebaseapp.com",
    databaseURL: "https://kwitter-7110d-default-rtdb.firebaseio.com",
    projectId: "kwitter-7110d",
    storageBucket: "kwitter-7110d.appspot.com",
    messagingSenderId: "849793608111",
    appId: "1:849793608111:web:1b9a9dff80ed99406aa75a"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name+"!";
 
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({

     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
  }

firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}



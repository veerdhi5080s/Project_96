var firebaseConfig = {
      apiKey: "AIzaSyDbz5cLDF5ybRHTU3s7coaGtb4ybNlAwPM",
      authDomain: "kwitter-97338.firebaseapp.com",
      databaseURL: "https://kwitter-97338-default-rtdb.firebaseio.com",
      projectId: "kwitter-97338",
      storageBucket: "kwitter-97338.appspot.com",
      messagingSenderId: "238105210406",
      appId: "1:238105210406:web:7cff4cd3121c7adc2a00e7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}
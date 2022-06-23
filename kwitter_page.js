//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}
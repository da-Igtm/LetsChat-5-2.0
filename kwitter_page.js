const firebaseConfig = {
    apiKey: "AIzaSyCn-vb1MjZ0Iltzc4qoeo3dRHlH2f09edI",
    authDomain: "project-94-5e1a6.firebaseapp.com",
    projectId: "project-94-5e1a6",
    storageBucket: "project-94-5e1a6.appspot.com",
    messagingSenderId: "631553066548",
    appId: "1:631553066548:web:5e831c124d1d2580c4ec61"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome:"+user_name;

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
firebase.database().ref(room_name).push({
name:user_name,
msg:message,
like:0
});
}

function logout(){
window.location="kwitter_room.html";
}
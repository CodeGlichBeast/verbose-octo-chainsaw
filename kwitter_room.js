
const firebaseConfig = {
      apiKey: "AIzaSyA0fVCTdZPuHG0b48QDcfZiiuF6jK6cnpQ",
      authDomain: "kwitter-bac8f.firebaseapp.com",
      projectId: "kwitter-bac8f",
      storageBucket: "kwitter-bac8f.appspot.com",
      messagingSenderId: "784594156517",
      appId: "1:784594156517:web:25538aaafe4341f1d18d0c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

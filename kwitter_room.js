
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuCufYLTnQ2luQZ8eszzGazIeiBZJREZg",
  authDomain: "kwitter-35e61.firebaseapp.com",
  databaseURL: "https://kwitter-35e61-default-rtdb.firebaseio.com",
  projectId: "kwitter-35e61",
  storageBucket: "kwitter-35e61.appspot.com",
  messagingSenderId: "675947823110",
  appId: "1:675947823110:web:71a6eff4f3d29cc8110387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDwHjx3UlfPmWVyAwCXhSL0pQ3ed4rjBrU",
    authDomain: "gjacobs314-hqtrivia.firebaseapp.com",
    databaseURL: "https://gjacobs314-hqtrivia.firebaseio.com",
    projectId: "gjacobs314-hqtrivia",
    storageBucket: "gjacobs314-hqtrivia.appspot.com",
    messagingSenderId: "9762899263"
  };
  firebase.initializeApp(config);

  // Get elements
  const preObject = document.getElementById('bestanswer');

  // Create references
  const dbRefObject = firebase.database().ref().child('hq').child('bestanswer');

  // Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));
  dbRefObject.on('value', snap => document.getElementById("bestanswer").innerHTML = snap.val());

}());

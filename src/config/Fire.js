import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAk5ZbeyFFIHkXb70lv18DGDMIA99qgSjk",
  authDomain: "note-it-847d3.firebaseapp.com",
  databaseURL: "https://server-note-it.herokuapp.com/",
  projectId: "note-it-847d3",
  storageBucket: "note-it-847d3.appspot.com",
  messagingSenderId: "834915760897"
};

const fire = firebase.initializeApp(config)
export default fire;

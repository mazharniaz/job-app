import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCsD7F252XTILKz1P45ty_rhXoLxB0WdtA",
  authDomain: "fir-d0bfe.firebaseapp.com",
  databaseURL: "https://fir-d0bfe.firebaseio.com",
  projectId: "fir-d0bfe",
  storageBucket: "fir-d0bfe.appspot.com",
  messagingSenderId: "424523490086"
  };
  firebase.initializeApp(config);

export default firebase
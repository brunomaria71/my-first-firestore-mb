import admin from "firebase-admin"; // imports firebase library or tools

import serviceAccount from './credentials.js'; // imports our credentials to firebase

admin.initializeApp({ // connects to our firebase project - the door 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials - checks our creds and makes a cert
});

// now we are connected to OUR Firebase project and & related services - we check out 

 const db = admin.firestore(); // creates a shortcut to access the Firestore database 

 const restaurantCol = db.collection('restaurants'); // shortcut to point to this collection. not needed. 

//  restaurantCol.get() // get All restaurants
//  .then(snapshot => {
//      snapshot.docs.forEach(doc => console.log(doc.data()))
//  }) // takes the snapshot document, for each restaurant, log the data to terminal
//  .catch(console.error) // if does not work, throw an error 

 restaurantCol
//  .where('name', '==', 'Bolay')
.where('rating,', '>=', 4.6)
.get()
 .then(snapshot => {
    snapshot.docs.forEach(doc => console.log(doc.data()))
}) // takes the snapshot document, get all the restaruants where the name = bolay
// and log the data to terminal
.catch(console.error) // if does not work, throw an error 

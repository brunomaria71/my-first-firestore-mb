import admin from "firebase-admin"; // imports firebase library or tools

import serviceAccount from './credentials.js'; // imports our credentials to firebase

admin.initializeApp({ // connects to our firebase project - the door 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials - checks our creds and makes a cert
});

// now we are connected to OUR Firebase project and & related services - we check out 

 const db = admin.firestore(); // creates a shortcut to access the Firestore database 

 const restaurantCol = db.collection('restaurants'); // shortcut to point to this collection. not needed. 


 // delete restaurant Y9tOzmMiAOLuDIa3W4Vp
 restaurantCol.doc('Y9tOzmMiAOLuDIa3W4Vp').delete()
 .then(res => console.log('success!'))
 .catch(err => console.error('Error deleting Y9tOzmMiAOLuDIa3W4Vp', err))

  // delete restaurant KMhSwn74PCnjqb5ETLwl
  restaurantCol.doc('KMhSwn74PCnjqb5ETLwl').delete()
  .then(res => console.log('success!'))
  .catch(err => console.error('Error deleting KMhSwn74PCnjqb5ETLwl', err))
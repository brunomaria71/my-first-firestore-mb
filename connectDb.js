import admin from "firebase-admin"; // imports firebase library or tools
import serviceAccount from './credentials.js'; // imports our credentials to firebase

admin.initializeApp({ // connects to our firebase project - the door 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials - checks our creds and makes a cert
});

const db = admin.firestore(); // creates a shortcut to access the Firestore database 
export const restaurantCol = db.collection('restaurants'); // shortcut to point to this collection. not needed. 



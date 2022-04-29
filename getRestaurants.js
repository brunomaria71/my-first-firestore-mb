import { restaurantCol } from './connectDb.js'
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
}) // takes the snapshot document, get all the restaurants where the name = bolay
// and log the data to terminal
.catch(console.error) // if does not work, throw an error 

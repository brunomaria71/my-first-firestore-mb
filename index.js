
// creating an object --  in this case a specific restaurnat we want to add to our db 
 const restaurant = {      
     name: 'Mister 01',
     address: '555 N Federal',
     cuisine: 'Pizza',
     rating: 4.9,
     phone: '786-677-2903'
 }  

 db.collection('restaurants').add(restaurant) // adding restaurant to the restaurants collection
    .then(doc => console.log('created restaurant', doc.id)) // handling the promise - resolve 
    .catch(err => console.error(err)) // handle rejects 

const restaurant2 = {
    name: "Bolay",
    address: "7060 West Palmetto Rd",
    cuisine: "American",
    rating: 4.6,
}

async function addRestauarant(data){ // 
    try {
    const doc = await db.collection('restaurants').add(restaurant2) // add restaurant to collection
    console.log('Created restaurant', doc.id) // handle resolve
    } catch(err) {
        console.error(err) // handle reject 
    }
} 

addRestauarant(restaurant2)
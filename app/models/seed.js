// seed is going to be a script we can run from the terminal to create
// a bunch of pets at once
// we need to be careful with our seed and when we run it because it will remove all the pets first
// then add the new ones

const mongoose = require('mongoose')
const Product = require('./product')

const db = require('../../config/db')

const startProducts = [
{
    name:  "Donut Maker" ,
    image:  "https://d2qc09rl1gfuof.cloudfront.net/product/QZDTTQJDP00000001/automatic-donut-maker-m100-1.2.jpg", 
    description: "An automatic Donut Maker for wheneve you have a sweet tooth!",
    price: 780, 
    available: true,
    category: "kitchen appliance",
    reviews: [   
    {
        rating: 0,
        review: "WHy is this 800 dollars!"
    }
    ]
 }

]


// owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
// }
// first we connect to database
// then we remove all the pets
// then we create using the startPets array 
// well use console logs to check if its working/errors

// then at the end we close our connection 
// console.log(mongo.connect) - should tell you its a promise
mongoose.connect(db, {
	useNewUrlParser: true,
})
    .then(() => {
        // then we remove all the pets
        Product.deleteMany({ owner: null })
            .then(deletedProducts => {
                console.log('deleted products', deletedProducts)
                // then we create using the startProducts array
                // we'll use console logs to check if it's working or if there are errors
                Product.create(startProducts)
                    .then(newProducts => {
                        console.log('the new products', newProducts)
                        mongoose.connection.close()
                    })
                    .catch(err => {
                        console.log(err)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    // then at the end, we close our connection to the db
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })


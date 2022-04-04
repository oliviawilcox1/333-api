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
    }]
 },{
    name:  "Kirby Plush" ,
    image:  "https://m.media-amazon.com/images/I/71BGK0bHg2L._AC_SY450_.jpg", 
    description: "Your favorite pink fluff as a little fluff ball!",
    price: 14.99, 
    available: true,
    category: "toys",
    reviews: [   
    {
        rating: 4,
        review: "I gave it to my kid and they like it!"
    }]
},{
    name:  "Donut Plush" ,
    image:  "https://m.media-amazon.com/images/I/61Yaa9wr+VL._AC_SY450_.jpg", 
    description: "A plush pillow to make you hungry!",
    price: 14.99, 
    available: true,
    category: "toys",
    reviews: [   
    {
        rating: 4,
        review: "Extremely comfortable and makes me hungry"
    }]
},{
    name:  "Cat Plush" ,
    image:  "https://m.media-amazon.com/images/I/71KREj0IRbL._AC_SY450_.jpg", 
    description: "A cat pillow, because who doesn't love cats?",
    price: 34.99, 
    available: true,
    category: "toys",
    reviews: [   
    {
        rating: 3,
        review: "Very cute but not extremely comfortable!"
    }]
},{
    name:  "Mug t-shirt" ,
    image:  "https://m.media-amazon.com/images/I/71EjupwFmXL._AC_UL320_.jpg", 
    description: "Remember children, mugs not drugs",
    price: 9.99, 
    available: true,
    category: "clothing",
    reviews: [   
    {
        rating: 5,
        review: "I got this for myself and my kids stopped vapeing!  Thank you 'mugs, not drugs'!"
    }]
},{
    name:  "Kirby t-shirt" ,
    image:  "https://m.media-amazon.com/images/I/61mQjwPq9YL._AC_UX679_.jpg", 
    description: "Not just any kirby but Kool-Aid Kirby here to quench your thirst!",
    price: 19.89, 
    available: true,
    category: "clothing",
    reviews: [   
    {
        rating: 4,
        review: "Love the shirt with my favorite character! it did shrink a little though"
    }]
},{
    name:  "Donut t-shirt" ,
    image:  "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81eIiJ8E5KL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png", 
    description: "Nothings better than the Donut Squad",
    price: 14.49, 
    available: true,
    category: "clothing",
    reviews: [   
    {
        rating: 5,
        review: "Can't wait to buy them for my friend Timm! He loves donuts like there's no tomorrow"
    }]
},{
    name:  "Cat t-shirt" ,
    image:  "https://m.media-amazon.com/images/I/719+6A9eENL._AC_UL320_.jpg", 
    description: "The reason we work is for our cats",
    price: 15.99, 
    available: true,
    category: "clothing",
    reviews: [   
    {
        rating: 5,
        review: "I love the cat on the front! I just got this for my wife and she loves it!"
    }]
},{
    name:  "The Complete Cat Breed Book, Second Edition" ,
    image:  "https://m.media-amazon.com/images/I/81LyxX6vtFS._AC_UL320_.jpg", 
    description: "All you need to know about cats by DK",
    price: 16.89, 
    available: true,
    category: "books",
    reviews: [   
    {
        rating: 5,
        review: "I'm glad I got this book, I have know knowledge on cats!  I can't wait to learn more about them"
    }]
},{
    name:  "The Doughnut Cook Book" ,
    image:  "https://m.media-amazon.com/images/I/71XEIa7bG3L._AC_UL320_.jpg", 
    description: "All you need to know how to bake doughnuts! By Williams-Sonoma Test Kitchen",
    price: 11.59, 
    available: true,
    category: "books",
    reviews: [   
    {
        rating: 5,
        review: "I LOVE DONUTS"
    }]
},{
    name:  "The Art of Mixology: Classic Cocktails and Curious Concoctions" ,
    image:  "https://m.media-amazon.com/images/I/91BaXFsLeSL._AC_UY218_.jpg", 
    description: "All you need to know how to make mix drinks! By Parragon Books",
    price: 15.99, 
    available: true,
    category: "books",
    reviews: [   
    {
        rating: 2,
        review: "Doesn't Have Mug Recipe >:( disappointed"
    }]
},{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]
},,{
    name:  "Electronic Keyboard" ,
    image:  "https://m.media-amazon.com/images/I/61Yaa9wr+VL._AC_SY450_.jpg", 
    description: "The best piano keyboard with weighted keys and more!",
    price: 2899.99, 
    available: true,
    category: "music",
    reviews: [   
    {
        rating: 5,
        review: "I have been trying to find a new keyboard that reminds me of the real thing. This keyboard feels just like a real piano!"
    }]
},
// {
//     name:  "" ,
//     image:  "", 
//     description: "",
//     price: , 
//     available: ,
//     category: "",
//     reviews: [   
//     {
//         rating: ,
//         review: ""
//     }]

// },
// {
//     name:  "" ,
//     image:  "", 
//     description: "",
//     price: , 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// }
,{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]

},{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]

},{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]

},{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]

},{
    name:  "Pro Display XDR" ,
    image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
    description: "Apple's Best Quality Monitor for the true experience!",
    price: 4999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 2,
        review: "Not even 144hrz, very disappointed"
    }]

 }
//  ,{
//     name:  "Pro Display XDR" ,
//     image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
//     description: "Apple's Best Quality Monitor for the true experience!",
//     price: 4999, 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// },{
//     name:  "Pro Display XDR" ,
//     image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
//     description: "Apple's Best Quality Monitor for the true experience!",
//     price: 4999, 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// },{
//     name:  "Pro Display XDR" ,
//     image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
//     description: "Apple's Best Quality Monitor for the true experience!",
//     price: 4999, 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// },{
//     name:  "Pro Display XDR" ,
//     image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
//     description: "Apple's Best Quality Monitor for the true experience!",
//     price: 4999, 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// },{
//     name:  "Pro Display XDR" ,
//     image:  "https://www.apple.com/v/displays/a/images/overview/compare/pro_display_xdr__cm8ftly299zm_large.jpg", 
//     description: "Apple's Best Quality Monitor for the true experience!",
//     price: 4999, 
//     available: true,
//     category: "computers",
//     reviews: [   
//     {
//         rating: 2,
//         review: "Not even 144hrz, very disappointed"
//     }]

// }
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


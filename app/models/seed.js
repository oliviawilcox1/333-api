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
    category: "electronics",
    reviews: [   
    {
        rating: 5,
        review: "I have been trying to find a new keyboard that reminds me of the real thing. This keyboard feels just like a real piano!"
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

}, {
    name:  "Asus 27 inch monitor" ,
    image:  "https://m.media-amazon.com/images/I/81Ti9ezZJoL._AC_UL320_.jpg", 
    description: "1440p running at 240Hz",
    price: 840, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 5,
        review: "Runs smoothly and a lot more affordable than the Apple monitor"
    }]
},{
    name:  "Acer Laptop" ,
    image:  "https://images-na.ssl-images-amazon.com/images/I/7189iXimfWL._AC._SR360,460.jpg", 
    description: "15.6 in monitor that runs all your basic needs!",
    price: 369.99, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 4,
        review: "I have had this laptop for years and it works perfectly!"
    }]
},{
    name:  "MacBook Air" ,
    image:  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000", 
    description: "13 in monitor with Apple quality",
    price: 999, 
    available: true,
    category: "computers",
    reviews: [   
    {
        rating: 4,
        review: "I love my MacBook Air! I just wish it was more affordable"
    }]
},{
    name:  "Blinker Fluid" ,
    image:  "https://m.media-amazon.com/images/I/516nF4k5LOL._AC_SX679_.jpg", 
    description: "A must need to repair your cars headlights!",
    price: 101, 
    available: true,
    category: "automotive",
    reviews: [   
    {
        rating: 1,
        review: "I can not believe I bought this. My friend told me I needed to replace my blinker fluid every 4 years "
    }]
},{
    name:  "Instant pot" ,
    image:  "https://m.media-amazon.com/images/I/71WtwEvYDOS._AC_UY218_.jpg", 
    description: "An instant pot with multiple features including slow cooker",
    price: 89.99, 
    available: true,
    category: "kitchen",
    reviews: [   
    {
        rating: 5,
        review: "I am so glad I got this! It saves me so much time cooking for the family"
    }]
},{
    name:  "Food Storage" ,
    image:  "https://m.media-amazon.com/images/I/81TTCvQxdAL._AC_UL320_.jpg", 
    description: "Stackable food storage for all your necessities",
    price: 67.97, 
    available: true,
    category: "kitchen",
    reviews: [   
    {
        rating: 4,
        review: "These containers helped save so much space in my pantry"
    }]
},{
    name:  "Blender" ,
    image:  "https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_SY879_.jpg", 
    description: "Professional 72 Oz Countertop Blender",
    price: 99.99, 
    available: true,
    category: "kitchen",
    reviews: [   
    {
        rating: 4,
        review: "I love my blender but sometimes it does not blend everything"
    }]
},{
    name:  "Free Weights" ,
    image:  "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SY450_.jpg", 
    description: "Customizable Dumbbells!",
    price: 399, 
    available: true,
    category: "fitness",
    reviews: [   
    {
        rating: 5,
        review: "Saves so much space in my home gym! Can not wait to get more equipment"
    }]
},{
    name:  "JBL Tune 710BT Wireless Over-Ear Headphones" ,
    image:  "https://m.media-amazon.com/images/I/619zjivnmYS._AC_SX679_.jpg", 
    description: "Bluetooth headphones with 35 hour battery life",
    price: 79.95, 
    available: true,
    category: "electronics",
    reviews: [   
    {
        rating: 5,
        review: "Awesome battery life and barely moves when working out "
    }]
},{
    name:  "Cat Tower" ,
    image:  "https://m.media-amazon.com/images/I/81vnkRKZOzL._AC_SY450_.jpg", 
    description: "Standing at 54 in, the puurfect tower for your cats",
    price: 59.99, 
    available: true,
    category: "pets",
    reviews: [   
    {
        rating: 4,
        review: "I did not know it was this big! I might need some more cats"
    }]
},{
    name:  "Nikon D5600" ,
    image:  "142267-cameras-review-nikon-d5600-review-image1-v70ie4fzdr.jpg", 
    description: "DSLR Camera with photo and videography",
    price: 800, 
    available: false,
    category: "electronics",
    reviews: [   
    {
        rating: 5,
        review: "The best camera I have ever bought! The quality is stunning and the videos are so sharp."
    }]
},{
    name:  "Vitamix Blender" ,
    image:  "e310-black-620x620.jpg", 
    description: "The E310 Vitamix is a precision blender with a 5-year warranty.",
    price: 350, 
    available: true,
    category: "kitchen",
    reviews: [   
    {
        rating: 5,
        review: "I use it every morning to make my breakfast smoothies! "
    }]
}, {
    name:  "Samson Microphone" ,
    image:  "https://m.media-amazon.com/images/I/81I5xX-vvxL._AC_SY450_.jpg", 
    description: "Professional usb mic",
    price: 129.98, 
    available: true,
    category: "electronics",
    reviews: [   
    {
        rating: 5,
        review: "I have had this mic for 4 years and still has great quality!"
    }]
},  {
        name:  "Sony WH-1000xm3 bluetooth over ear headphones" ,
        image:  "https://www.sony.com/image/1db69f3082965554b728ba8c86c0257d?fmt=png-alpha&wid=378", 
        description: "Noise Canceling Headphones, Wireless Bluetooth Over the Ear Headset",
        price:217.89 , 
        available: true,
        category: "electronics",
        reviews: [   
        {
            Rating: 5,
            review: "The WH-1000XM3 is simply sensational - the perfect long-haul travel companion, office upgrade or daily commute enhancement"
        }]  
}

]


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


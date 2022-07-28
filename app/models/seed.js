// seed is going to be a script we can run from the terminal to create
// a bunch of pets at once
// we need to be careful with our seed and when we run it because it will remove all the pets first
// then add the new ones

const mongoose = require('mongoose')
const Product = require('./product')

const db = require('../../config/db')

const startProducts = [
{
    name:  "Hydro Barrier Cream" ,
    image:  "https://d1flfk77wl2xk4.cloudfront.net/Assets/55/219/XXL_p0106821955.jpg", 
    brand: "Soonjung",
    description: "A Hydro Barrier Cream with 92% hydrating ingredients to repair a damaged skin barrier and protect the skin. Ingredient Highlights are Panthenol, Madecassoside and Green Tea Extract. This moisturizer is free of artificial fragrance, parabens, and color. It is vegan and cruelty-free.",
    kbeauty: true,
    size: "2.53 fl. oz / 75ml",
    price: 27.00,
    category: "Skincare",
    wheretobuy: "Soko Glam",
    ingredienthighlights: "Panthenol, Madecassoside and Green Tea Extract",
    ingredients: "WATER / AQUA / EAU, GLYCERIN, PROPANEDIOL, PANTHENOL, PENTAERYTHRITYL TETRAETHYLHEXANOATE, HYDROGENATED POLY(C6-14 OLEFIN), 1,2-HEXANEDIOL, POLYMETHYLSILSESQUIOXANE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, TREHALOSE, GLYCERYL STEARATE CITRATE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, C14-22 ALCOHOLS, ARACHIDYL ALCOHOL, GLYCERYL STEARATE, GLYCERYL CAPRYLATE, BEHENYL ALCOHOL, C12-20 ALKYL GLUCOSIDE, ETHYLHEXYLGLYCERIN, ARACHIDYL GLUCOSIDE, BUTYLENE GLYCOL, DISODIUM EDTA, SORBITAN ISOSTEARATE, ALLANTOIN, MADECASSOSIDE, SCUTELLARIA BAICALENSIS ROOT EXTRACT, GLUCOSE, CAMELLIA SINENSIS LEAF EXTRACT, TOCOPHEROL",
    target: "Dehyrdrated, Acne Prone, Combiniation and Sensitive Skin. ",
    instructions: "Apply a generous amount and smooth over skin in the morning before sunscreen, and as the last step in your skin routine in the evening.",
 },{
    name:  "Centella Unscented Serum" ,
    image:  "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/pit/pit10031/v/4.jpg", 
    brand: "Purito",
    description: "A Strengthening and Calming Centella Based Serum with Niacinamide, Ceramides and Peptides. It is essential oil and fragrance free, vegan and great for distressed and sensitive skin.",
    kbeauty: true,
    size: "2 fl. oz / 60ml",
    price: 19.50,
    category: "Skincare",
    wheretobuy: "YesStyle",
    ingredienthighlights: "Centella Extract, Niacinamide, Ceramides, Peptides and Madecassic Acid",
    ingredients: "Centella asiatica extract(49%), water, glycerin, dipropylene glycol, niacinamide, butylene glycol, 1,2-hexanediol, glycereth-26, ceramide np, sodium hyaluronate, asiaticoside, asiatic acid, madecassic acid, palmitoyl hexapeptide-12, palmitoyl tripeptide-1, palmitoyl tetrapeptide-7, palmitoyl dipeptide-10, carbomer, arginine, sclerotium gum, hydrolyzed jojoba esters, caprylyl glycol, polyglyceryl-10 myristate, panthenol, polyglyceryl-10 laurate, hydrogenated lecithin, camellia sinensis leaf extract, pancratium maritimum extract, dipotassium glycyrrhizate, disodium edta, adenosine.",
    target: "All Skin Types, especially those with sensitive skin types or a damaged skin barrier.",
    instructions: "Apply 1 to 2 pumps to the face after toner or essence and gently rub in. ",
},{
    name:  "Propolis + Honey Extract" ,
    image:  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4UGzxR3qSbx2rMY17Ai3glKj9diewzAuPJ5aEsP_mFeZUkYup4WHQEeckHUjO0ZHIKSLeNicG5mca8x6gOM8KXG976Iol", 
    brand: "One Thing",
    description: "A toner with honey and propolis that delivers antioxidants and anti-inflammatory benefits to moisturize and soothe the skin. Can be used alone or mixed into other products!",
    kbeauty: true,
    size: "5 fl. oz / 150ml",
    price: 18.00,
    category: "Skincare",
    wheretobuy: "YesStyle",
    ingredienthighlights: "Propolis, Honey and Hyaluronic Acid",
    ingredients: "Propolis Extract, Honey Extract, Sodium Hyaluronate, Butylene Glycol, 1,2-Hexanediol, Ethylhexylglycerin",
    target: "All Skin Types, especially sensitive skin or those who are acne-prone.",
    instructions: "Apply to a freshly-washed face by either patting gently into the skin or using a cotton pad.",
},{
    name:  "Skin Perfecting 2% BHA Liquid Exfoliant" ,
    image:  "https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwf0fd0988/images/products/skin-perfecting-2-percent-bha-liquid-2010-L.png?sw=360&sfrm=png", 
    brand: "Paula's Choice",
    description: "A gentle leave-on exfoliant with salicylic acid that helps to unclogs pores, smooth wrinkles, and even out skin tone. It can help minimize the appearance of enlarged pores and has a lightweight texture. This product is vegan and cruelty free.",
    kbeauty: false,
    size: "4 fl. oz / 118ml",
    price: 32.00,
    category: "Skincare",
    wheretobuy: "Paula's Choice, Sephora",
    ingredienthighlights: "Salicylic Acid and Green Tea",
    ingredients: "Water, Methylpropanediol, Butylene Glycol, Salicylic Acid, Polysorbate 20, Camellia Oleifera, Sodium Hydroxide, Tetrasodium EDTA",
    target: "All Skin Types, especially those who are acne-prone or skin that needs brightening.",
    instructions: "Apply gently to the skin either by patting or using a cotton pad after cleansing and toning and before the rest of your skincare. Start by gradually using every other day then increasing to daily. Always follow with SPF in the morning.",
}




// ,{
//         name:  "Sony WH-1000xm3 bluetooth over ear headphones" ,
//         image:  "https://www.sony.com/image/1db69f3082965554b728ba8c86c0257d?fmt=png-alpha&wid=378", 
//         brand: "Sony",
//         description: "Noise Canceling Headphones, Wireless Bluetooth Over the Ear Headset",
//         kbeauty: false,
//         available: true,
//         category: "electronics",
//         reviews: [   
//         {
//             Rating: 5,
//             review: "The WH-1000XM3 is simply sensational - the perfect long-haul travel companion, office upgrade or daily commute enhancement"
//         }]  
// }

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


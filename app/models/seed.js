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
    type: "moisturizer",
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
    type: "serum",
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
    type: "toner",
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
    type: "toner",
},{
    name:  "The Kure Intense Bond Repair Hair Mask" ,
    image:  "https://cdn.shopify.com/s/files/1/2117/1151/products/amika_220228_PDP_Repair_Collection_Mask_250ml_2885-RGB-trans-shadow-2000x2000_1000x.png?v=1647627490", 
    brand: "amika",
    description: "An ultra-moisturizing hair mask that is clinically proven to significantly hydrate, repair, strengthen, and improve manageability. This mask will manage dryness, damage, split ends and breakage through 3 nutrient-rich plant butters, vegan proteins, and sea buckthorn. It is vegan and cruelty free.",
    kbeauty: false,
    size: "8.4 fl. oz / 250ml",
    price: 38.00,
    category: "Haircare",
    wheretobuy: "Sephora, loveamika.com",
    ingredienthighlights: "Mango butter, Borage oil, Shea butter and Sea Buckthorn rich in fatty-acid Omega 7's.",
    ingredients: "Water/Aqua/Eau, Cetearyl Alcohol, Cetyl Alcohol, Isopropyl Myristate, Behentrimonium Chloride, Dimethicone, Glycerin, Panthenol, Hippophae Rhamnoides (Sea Buckthorn/Argousier) Fruit/Seed Oil, Borago Officinalis (Borage/Bourrache) Seed Oil, Mangifera Indica (Mango/Mangue) Seed Butter, Butyrospermum Parkii (Shea/Karite) Butter, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Hydrolyzed Quinoa, Tocopheryl Acetate, Cetrimonium Chloride, Magnesium Aluminum Silicate, Butylene Glycol, Bis-PCA Dimethicone, Disodium PEG-12 Dimethicone Sulfosuccinate, Aminomethyl Propanol, Chlorphenesin, BHT, Ethylhexylglycerin, Citric Acid, Isopropyl Alcohol, Phenoxyethanol, Benzyl Alcohol, Potassium Sorbate, Sodium Benzoate, Fragrance/Parfum, Benzyl Benzoate, Hydroxycitronellal, Limonene antistatic agent/agent antistatique.",
    target: "For Straight, Wavy and Curly Hair with Medium to Thick Hair Texture.",
    instructions: "After cleansing, apply through damp hair saturating the middle to the ends of hair. Leave on for 5 to 10 minutes then rinse. Use weekly.",
    type: "hair mask",
}, {
    name:  "Liquid Glass Moisture-Rich Miracle Smoothing Sealant" ,
    image:  "https://img.shopstyle-cdn.com/sim/6e/0b/6e0b4a561b61c6eed5d5b08c60df2d2b_best/drybar-liquid-glass-miracle-smoothing-sealant.jpg", 
    brand: "Drybar",
    description: "A heat-activated spray that lasts through up to three washes, delivering frizz resistance, intensive moisturization, and a super-glossy finish.",
    kbeauty: false,
    size: "6.4 oz / 188 mL",
    price: 34.00,
    category: "Haircare",
    wheretobuy: "Sephora, Drybar, Ulta",
    ingredienthighlights: "Mango butter, Coconut oil, Rapeseed oil and Linseed Oil",
    ingredients: "Aqua (Water, Eau), Dipropylene Glycol, Cetyl Triethylmonium Dimethicone PEG-8 Succinate, Polysilicone-29, Mangifera Indica (Mango) Seed Butter, Cocos Nucifera (Coconut) Oil, Brassica Campestris (Rapeseed) Seed Oil, Linum Usitatissimum (Linseed) Seed Oil, Emblica Officinalis Fruit Extract, Sodium Coco PG-Dimonium Chloride Phosphate, Tetrasodium Glutamate Diacetate, Sodium Hydroxide, Polysorbate 20, Hydroxypropylgluconamide, Silicone Quaternium-18, Trideceth-6, Trideceth-12, Hydroxypropylammonium Gluconate, Tartaric Acid, Cetrimonium Chloride, Glycolic Acid, Caprylyl Glycol, Hexylene Glycol, Phenoxyethanol, Potassium Sorbate, BHT, Citric Acid, Sodium Benzoate, Benzyl Alcohol, Parfum (Fragrance), Linalool, Hexyl Cinnamal, Benzyl Salicylate.",
    target: "For all Hair Types especially those with Thick, Wavy and Curly Hair. ",
    instructions: "Use on damp hair. For best results, do not apply with any other pre-styling products. Begin with clean, towel-dried, detangled hair. Work in sections, spraying generously from roots to ends. Comb through to evenly distribute. To activate and seal in the formula, blow-dry thoroughly and finish with a flatiron or hot tool of your choice.",
    type: "leave-in",
}, {
    name:  "Detox Shampoo" ,
    image:  "https://www.niche-beauty.com/images/generated/det/6/48/ouai-detox-shampoo.jpg", 
    brand: "OUAI",
    description: "A clarifying shampoo that deeply cleanses away dirt, oil, and product buildup with apple cider vinegar while keratin helps strengthen hair. ",
    kbeauty: false,
    size: "10 oz / 300 mL",
    price: 30.00,
    category: "Haircare",
    wheretobuy: "Sephora, OUAI, Ulta",
    ingredienthighlights: "Chelating Agents, Apple Cider Vinegar, and Hydrolyzed Keratin.",
    ingredients: "AQUA (WATER, EAU), SODIUM C14-16 OLEFIN SULFONATE, SODIUM LAUROYL METHYL ISETHIONATE, COCAMIDOPROPYL BETAINE, DECYL GLUCOSIDE, ACRYLATES COPOLYMER, COCAMIDE MIPA, PARFUM (FRAGRANCE), POLYSORBATE 20, HYDROLYZED KERATIN, HYDROXYPROPYL GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, VINEGAR, PEG-150 DISTEARATE, POLYQUATERNIUM-7, GLYCERIN, BENZOPHENONE-4, SODIUM CHLORIDE, SODIUM HYDROXIDE, TETRASODIUM EDTA, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ISOPROPYL ALCOHOL, PROPYLENE GLYCOL, CITRIC ACID, DISODIUM EDTA, CHLORPHENESIN, SODIUM BENZOATE, PHENOXYETHANOL, POTASSIUM SORBATE, LINALOOL, CITRONELLOL, CI 14700 (RED 4), CI 19140 (YELLOW 5), CI 61570 (GREEN 5)",
    target: "All Hair Types, especially for those who have an Oilier or Flakier scalp or who frequently use Silicone Based Products.",
    instructions: "Detangle your hair before getting in the shower. Wet hair with luke-warm water from roots to end. Take a quarter size amount and mix it into your hands. Apply directly to the scalp first then work through hair focusing on roots then mid-shaft and ends. Leave on for 1 to 3 minutes. Use 1x a week or whenever you need a deeper cleanse.",
    type: "shampoo",
},

{
    name:  "The Body Exfoliator" ,
    image:  "https://img.ssensemedia.com/images/212527M650004_1/necessaire-the-body-exfoliator-eucalyptus-250-ml.jpg", 
    brand: "Necessaire",
    description: "A weekly multi-exfoliant for skin health—available in fragrance-free and in essential oil blends: Eucalyptus and Sandalwood.",
    kbeauty: false,
    size: "6.1 oz/ 180 mL",
    price: 30.00,
    category: "Bodycare",
    wheretobuy: "Sephora, Necessaire",
    ingredienthighlights: "Bamboo charcoal, Glycolic Acid and Salicylic Acid",
    ingredients: "Water (Aqua), Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Pumice, Glycerin, Propanediol, Acrylates Crosspolymer-4, Sclerocarya Birrea Seed Oil, Salicylic Acid, Glycolic Acid, Lactic Acid, Tocopherol, Niacinamide, Gluconolactone, Charcoal Powder, Zea Mays (Corn) Starch, Mannitol, Microcrystalline Cellulose, Amylopectin, Dextrin, Polydextrose, Sodium Benzoate, Sodium PCA, Calcium Gluconate, Eucalyptus Globulus (Eucalyptus) Leaf Oil, Lavandula Angustifolia (Lavender) Oil, Abies Sibirica (Siberian Fir) Oil, Zingiber Officinale (Ginger) Root Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Pogostemon Cablin (Patchouli) Oil.",
    target: "All Skin Types",
    instructions: "Use one to two times a week or as desired. Apply all over the body. Massage for foam. Rinse well.",
    type: "body exfoliant",
}, {
    name:  "High Roller Ingrown Hair Tonic with AHA and BHA" ,
    image:  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZDW7p.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f", 
    brand: "Topicals",
    description: "A lightweight serum for your armpits, and bikini area—to soothe, calm, and comfort irritated skin, and discourage the formation of visible bumps from ingrown hairs. Great for dark spots, uneven texture, and acne.",
    kbeauty: false,
    size: "1.7 oz/ 50 mL",
    price: 26.00,
    category: "Bodycare",
    wheretobuy: "Sephora, Topicals",
    ingredienthighlights: "Salicylic Acid, Zinc PCA, and Glycolic Acid",
    ingredients: "Water/Aqua/Eau, Salix Alba (Willow) Bark Extract, Glycolic Acid, Salicylic Acid, Zinc PCA, Niacinamide, Allantoin, Centella Asiatica Extract, Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Phytonadione, Hydroxyethylcellulose, Butylene Glycol, Polysorbate 20, Sodium Benzoate, Potassium Hydroxide, Disodium EDTA, Phenoxyethanol.",
    target: "All Skin Types",
    instructions: "Roll onto clean, dry, affected area. Can be used daily however be sure to use sunscreen and limit sun exposure while using this product.",
    type: "body exfoliant",
}, {
    name:  "Detox Shampoo" ,
    image:  "https://www.niche-beauty.com/images/generated/det/6/48/ouai-detox-shampoo.jpg", 
    brand: "OUAI",
    description: "A clarifying shampoo that deeply cleanses away dirt, oil, and product buildup with apple cider vinegar while keratin helps strengthen hair. ",
    kbeauty: false,
    size: "10 oz / 300 mL",
    price: 30.00,
    category: "Haircare",
    wheretobuy: "Sephora, OUAI, Ulta",
    ingredienthighlights: "Chelating Agents, Apple Cider Vinegar, and Hydrolyzed Keratin.",
    ingredients: "AQUA (WATER, EAU), SODIUM C14-16 OLEFIN SULFONATE, SODIUM LAUROYL METHYL ISETHIONATE, COCAMIDOPROPYL BETAINE, DECYL GLUCOSIDE, ACRYLATES COPOLYMER, COCAMIDE MIPA, PARFUM (FRAGRANCE), POLYSORBATE 20, HYDROLYZED KERATIN, HYDROXYPROPYL GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, VINEGAR, PEG-150 DISTEARATE, POLYQUATERNIUM-7, GLYCERIN, BENZOPHENONE-4, SODIUM CHLORIDE, SODIUM HYDROXIDE, TETRASODIUM EDTA, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ISOPROPYL ALCOHOL, PROPYLENE GLYCOL, CITRIC ACID, DISODIUM EDTA, CHLORPHENESIN, SODIUM BENZOATE, PHENOXYETHANOL, POTASSIUM SORBATE, LINALOOL, CITRONELLOL, CI 14700 (RED 4), CI 19140 (YELLOW 5), CI 61570 (GREEN 5)",
    target: "All Hair Types, especially for those who have an Oilier or Flakier scalp or who frequently use Silicone Based Products.",
    instructions: "Detangle your hair before getting in the shower. Wet hair with luke-warm water from roots to end. Take a quarter size amount and mix it into your hands. Apply directly to the scalp first then work through hair focusing on roots then mid-shaft and ends. Leave on for 1 to 3 minutes. Use 1x a week or whenever you need a deeper cleanse.",
    type: "shampoo",
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


const mongoose =require("mongoose")
const Product=require('./product')
mongoose.connect("mongodb://127.0.0.1:27017/sample")
// .then(()=>{
//     console.log("connected");
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// async function Productlist(){
//     try {
//         //create document


//     //     const product=new Product({
//     //         title:"stylish shoe",
//     //         price:2000,
//     //         brand:"nike"
//     //     })
//     //    await product.save()
     
//     //  await product.save()

//     //     console.log(product);


//         //in other way

//         const product=await Product.create([{
//             title:"stylish shoe",
//           price:2000,
//            brand:"nike"
//         },
//         {
//             title:"men fashion",
//             price:1000,
//              brand:"addidas"
//             }])
//         console.log(product);
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// Productlist()



async function getProduct(){
    try {
        const products=await Product.find()
        console.log(products);
        
    } catch (error) {
        console.log(error);
        
    }
}

getProduct()


// async function getProductName() {
//     const pbyname=await Product.findOne({title:"stylish shoe"})
//     console.log(pbyname);
    
    
// }
// getProductName()



// async function updateProduct(){
//     try {
//         const product=await Product.findByIdAndUpdate("6712318202a1bb8512ca426b",{
//             price:4000
//         },{new:true}) 
//         console.log(product);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// updateProduct()



// async function createP() {
//     try {
//         const product=await Product.create([{
//                          title:"women shoe",
//                     price:1000,
//                       brand:"nike"
//                    },
//                    {
//                         title:"men fashion",
//                         price:1500,
//                         brand:"addidas"
//                      }])
//              console.log(product);
                    
              
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// createP()


// async function removeP() {
//     try {
//         const products=await Product.findByIdAndDelete('671238a25b462279b8474f2c')
//         console.log(products);
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
    

    
// }

// removeP()
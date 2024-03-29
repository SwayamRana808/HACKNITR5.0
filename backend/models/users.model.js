const mongoose=require('mongoose')
 
const userSchema=new mongoose.Schema({   //  { "name": "swayam","email":"fse","password":"cas","products":[[{"productName":"kurta","productDesc":"size l","productPrice":990,"productImg":["fsdf","scdv","fcsd"]}]] }
    name:String,
    email:String,
    password:String,
    Location:{
        type:String,
        default:"Default Location"},
   wishlist: [{
        wishlistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "wishlist"
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        }
    }]
    
})

module.exports=mongoose.model("User",userSchema)
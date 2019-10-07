const mongoose = require('mongoose')

 const SpotSchema = new mongoose.Schema({
     thumbnail: String,
     thumbnail_location: String,
     company: String,
     price: Number,
     techs: [String],
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
     }

 }, {
    toJSON: {
        virtuals: true, 
    }
 })

//  SpotSchema.virtual('thumbnail_url').get(function(){
//       return `https://air-cnc-images.s3.amazonaws.com/${this.thumbnail}`
//  })

 module.exports = mongoose.model('Spot', SpotSchema)
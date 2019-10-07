const Spot = require('../Models/Spot')
const User = require('../Models/User')

module.exports = {

    async index(req, res){
        const { tech } = req.query

        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    },

    async store(req, res){

        console.log(req.file)
        
        const { originalname: filename, location } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: "user does not exist" })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            thumbnail_location: location,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        
        return res.json(spot)
    }
}
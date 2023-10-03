const Property = require('../model/Property'); //user model


exports.addProperty = async (req, res) => {
    try {

        const { name,
            address,
            ownerName,
            price,
            size,
            description, } = req.body;

            const newProperty=new Property({name,address,ownerName,price,size,description});

            const savePorperty=await newProperty.save();

            return res.status(201).json(savePorperty);


    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}


exports.getProperty = async (req, res) => {
    try {
        // Find all properties in the database
        const properties = await Property.find();

        // Respond with the retrieved properties
        res.status(200).json(properties);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
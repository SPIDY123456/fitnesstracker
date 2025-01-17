const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MONGODB connected successfully....');
    }
    catch(error)
    {
        console.error('MONGODB connection error')
        process.exit(1);
    }
}

module.exports = connectDB;

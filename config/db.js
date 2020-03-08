const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch(e) {
        console.log(`Error : ${e.message}`.red);
    }
}


module.exports = connectDB;
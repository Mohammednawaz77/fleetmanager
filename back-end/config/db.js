const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://matter7259:HOfQ25rERcIa91uX@cluster0.sa68da8.mongodb.net/?appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
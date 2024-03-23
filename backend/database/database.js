const mongoose = require("mongoose");
const URL =process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URL, {
      writeConcern: {
        w: "majority",
        wtimeout: 0,
        provenance: "clientSupplied",
      },
    });
    console.log("Connection to database successful !");
  } catch (error) {
    console.error("Database connection failed:", error);
        process.exit(1);
  }
};
module.exports = connectDb;

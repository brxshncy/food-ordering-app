import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable not set");
    }
    const connection = await mongoose.connect(mongoUri);
    console.log(`Mongo DB connected`, connection.connection.host);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

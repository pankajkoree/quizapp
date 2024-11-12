import mongoose, { ConnectOptions } from "mongoose";

export async function connect(): Promise<void> {
  // mongodb URL
  const mongoUri = process.env.MONGO_URI;

  // checking if the error is with mongoDB url
  if (!mongoUri) {
    console.log(`no mongoURL`);
    process.exit(1);
  }

  try {
    // connecting to mongodb
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    } as ConnectOptions);

    const connection = mongoose.connection;

    // message on successful connection
    connection.on("connected", () => {
      console.log(`MongoDB connected successfully`);
    });

    // message on error
    connection.on("error", (err) => {
      console.log(`MongoDB connection error : ${err}`);
      process.exit(1);
    });
  } catch (error) {
    console.log(`error while connecting to mongoDB : ${error}`);
    process.exit(1);
  }
}

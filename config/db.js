import mongoose from 'mongoose';

const connectDb = async () => {
  const mongoUrl = `${process.env.MONGO_ROOT}${process.env.MONGODB_PSWD}${process.env.MONGO_URI}`;

  mongoose.set('strictQuery', false);
  mongoose.connect(mongoUrl).then(
    () => console.log('Connected'),
    (err) => {
      console.log('ERROR:', err.message);
      process.exit();
    }
  );
};

export default connectDb;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true }
});

export default mongoose.model('User', userSchema);

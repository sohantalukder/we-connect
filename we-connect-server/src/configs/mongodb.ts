import configConstant from '../constants/config.constant';
import mongoose from 'mongoose';

// Mongoose ODM
mongoose.connect(configConstant.MONGO_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
  console.log('Database Connected!');
});

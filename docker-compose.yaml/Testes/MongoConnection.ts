import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config/Constants';

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      const options: ConnectOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      await mongoose.connect(config.MONGO_CONNECTION, options);
      console.log('Database connected');
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

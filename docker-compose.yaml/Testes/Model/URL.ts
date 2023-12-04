import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { User } from './User'; 

export class URL {
  @prop({ required: true })
  hash!: string;

  @prop({ required: true })
  originURL!: string;

  @prop({ required: true })
  shortURL!: string;

  
  @prop({ ref: () => User, required: true })
  createdBy!: Ref<User>;
}

export const URLModel = getModelForClass(URL);

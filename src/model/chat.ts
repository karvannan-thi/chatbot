import { mongoose } from "../config/database";
import { Document, Model, Schema } from "mongoose";

export interface Ichat extends Document {
    message: string;
    create: Date;
    user: string
  }

const schema = new Schema({
    title: String,
    create: {
      type: Date,
      "default": Date.now
    },
    user: String
  });
  

  
export const Chat = mongoose.model<Ichat>("Chat", schema);

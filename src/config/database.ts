import { Mockgoose } from "mockgoose-fix";
import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {

  const mockgoose = new Mockgoose(mongoose);
  mockgoose.helper.setDbVersion("3.4.3");

  mockgoose.prepareStorage().then((): void => {
    mongoose.connect("mongodb://example.com:23400/TestingDB", {
      useMongoClient: true,
    });
  });

} else {

  mongoose.connect("mongodb://karvannan:Connect1@ds029911.mlab.com:29911/karvannan", {
    useMongoClient: true,
  });

}

export { mongoose };
import app from "./app";
import { Server } from 'http'
import mongoose from "mongoose";
const PORT = 5000;

let server: Server;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  // Server Connection
  server = app.listen(PORT, () => {
    console.log(`✅ Triply Explore listening on PORT ${PORT}`);
  });
  try {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log(error);
  }
}
main();


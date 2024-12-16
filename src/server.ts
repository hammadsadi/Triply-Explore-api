import app from "./app";
import { Server } from 'http'
const PORT = 5000

let server:Server
async function bootstrap(){
server = app.listen(PORT, () => {
  console.log(`✅ Triply Explore listening on PORT ${PORT}`);
});
}

bootstrap()


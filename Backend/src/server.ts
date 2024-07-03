import { Server } from "http";
import app from "./app";

const PORT = 5000;

async function main() {
  const server: Server = app.listen(PORT, () => {
    console.log("Portfolio Management App is running on", PORT);
  });
  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.info("Your Server is closed");
      });
    }
    process.exit(1);
  };

  process.on("uncaughtException", (error) => {
    console.log(error);
    exitHandler();
  });
  process.on("unhandledRejection", (error) => {
    console.log(error);
    exitHandler();
  });
}

main();

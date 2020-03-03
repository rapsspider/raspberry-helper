import components from "./config/components.js";
import Server from "./server";

process.on("SIGINT", () => {
  Server.close(() => console.log("Fermeture du serveur"));
});

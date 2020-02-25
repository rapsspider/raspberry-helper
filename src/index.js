import ComponentsService from "./services/ComponentsService";
import Server from "./server";

process.on("SIGINT", () => {
  Server.close(() => console.log("Fermeture du serveur"));
  ComponentsService.destroy();
});

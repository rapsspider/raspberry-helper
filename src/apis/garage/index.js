import ComponentsService from "../../services/ComponentsService";
import components from "../../config/components";
const GarageRouter = require("express").Router();

const html = `<html><head></head><body><style>body { font-size: 4em; }</style>
  <ul>
    <li><a href="/api/garage/up">up</a></li>
    <li><a href="/api/garage/stop">stop</a></li>
    <li><a href="/api/garage/down">down</a></li>
  </ul>
</body></html>`;

const garageSwitch = components.garageSwitch;

GarageRouter.get('/down', (req, res) => {
  garageSwitch.down();
  return res.send(html);
});
GarageRouter.get('/up', (req, res) => {
  garageSwitch.up();
  return res.send(html)
});
GarageRouter.get('/stop', (req, res) => {
  garageSwitch.stop();
  return res.send(html)
});

export default GarageRouter;


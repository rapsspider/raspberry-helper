import ComponentsService from "../services/ComponentsService";
const EventEmitter = require('events');

class AbstractComponent extends EventEmitter {
  constructor() {
    super();
    ComponentsService.push(this);
  }

  destroy() {
    throw new Error("Not implemented");
  }
}

export default AbstractComponent;
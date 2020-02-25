import AbstractComponent from "./AbstractComponent";
const Gpio = require('onoff').Gpio;

export default class Switch extends AbstractComponent {
  constructor(pinCode) {
    super(pinCode);
    this.pin = pinCode;
    this.gpio = new Gpio(pinCode, 'out');
  }

  switchOn = () => {
    this.gpio.writeSync(1);
    this.emit("switchOn");
  }

  switchOff = () => {
    this.gpio.writeSync(0);
    this.emit("switchOff");
  }

  destroy = () => {
    this.gpio.writeSync(0);
    this.gpio.unexport();
  }
}
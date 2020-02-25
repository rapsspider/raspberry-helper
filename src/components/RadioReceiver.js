import AbstractComponent from "./AbstractComponent";
const rpi433 = require('rpi-433-tristate');

export default class Switch extends AbstractComponent {
  constructor(pinCode) {
    super(pinCode);
    this.pin = pinCode;
    this.sniffer = rpi433.sniffer({
      pin: pinCode,
      debounceDelay: 500
    });

    this.init();
  }

  init = () => {
    // Receive (data is like {code: xxx, pulseLength: xxx})
    rfSniffer.on('data', (data) => {
      console.log('Code received: '+data.code+' pulse length : '+data.pulseLength);
      this.emit('data', data);
    });
  }
}
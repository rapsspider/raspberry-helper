import AbstractComponent from "./AbstractComponent";
const Gpio = require('onoff').Gpio;

const STATUT = {
  PRESS: "PRESS",
  UNPRESS: "UNPRESS"
}

const waitTimeMS = 150;
const waitIntervalTimeMS = 5000;

export default class Button extends AbstractComponent {
  constructor(pinCode) {
    super(pinCode);
    this.pin = pinCode;
    this.count = 0;
    this.lastChange = 0;
    this.timeout = null;
    this.interval = null;
    this.intervalCount = 0;
    this.gpio = new Gpio(pinCode, 'in', 'both');
    this.statut = STATUT.UNPRESS;

    this.init();
  }

  init = () => {
    console.log(this.intervalFct);
    this.gpio.watch((err, value) => { 
      if (err) { //if an error
        console.error('There was an error', err); 
        return;
      }

      if (value) {
        // si nouvelle pression, alors on réinitilise le timeout
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        this.interval = setInterval(this.intervalFct, waitIntervalTimeMS);
        this.lastChange = (new Date()).getTime();
      } else {
        clearInterval(this.interval);
        this.interval = null;
        this.delai = (new Date()).getTime() - this.lastChange;
        this.lastChange = null;
        setTimeout(this.timeoutFct, waitTimeMS);
        this.count++;
      }
    })
  }

  timeoutFct = () => {
    clearTimeout(this.timeout);
    this.timeout = null;
    
    this.emit("click", {delai: this.delai, count: this.count});

    this.delai = null;
    this.count = 0;
  }

  intervalFct = () => {
    this.intervalCount++;

    this.emit("press", this.intervalCount);
  }

  destroy = () => {
   this.gpio.unexport();
  }
}
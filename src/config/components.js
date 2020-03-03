import { Button, Switch, SwitchUpDown } from "rasp-components";

const components = {
  // Switch
  garageSwitch : new SwitchUpDown({
    // UP
    buttonUp : new Button(4),
    relayUp : new Switch(27),

    // Down
    buttonDown : new Button(17),
    relayDown : new Switch(25),

    // Stop Button
    buttonStop : new Button(22),
  }),

//  radioReceiver : new RadioReceiver(12),
}

export default components;

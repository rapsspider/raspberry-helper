import Button from "../components/Button";
import Switch from "../components/Switch";
import SwitchUpDown from "../components/SwitchUpDown";

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
  })
}

export default components;
import { BrowserRouter, Route } from "react-router-dom";
import Usb from "./chaild-components/directory/AllGrids/usbGrid";
// import Directory from "./chaild-components/directory/directory.component";
import Body from "./body";
import Mouse from "./chaild-components/directory/AllGrids/mouseGrid";
import Mobile from "./chaild-components/directory/AllGrids/mobilesGrid";
import Chargers from "./chaild-components/directory/AllGrids/ChargersGrid";
import Laptops from "./chaild-components/directory/AllGrids/LaptopsGrid";
import Speakers from "./chaild-components/directory/AllGrids/SpeakersGrid";
import Login from "./chaild-components/Login/Login";
function RouterConfig(props) {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Body} />
      <Route path="/usb" exact component={Usb} />
      <Route path="/mouse" exact component={Mouse} />
      <Route path="/mobiles" exact component={Mobile} />
      <Route path="/Chargers" exact component={Chargers} />
      <Route path="/Laptops" exact component={Laptops} />
      <Route path="/Speakers" exact component={Speakers} />
      <Route path="/Login" exact component={Login} />
    </BrowserRouter>
  );
}
export default RouterConfig;

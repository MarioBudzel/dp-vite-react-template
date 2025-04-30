import endPoints from "./documentation/endpoints";
import gettingStarted from "./documentation/gettingStarted";
import adminPages from "./homeDemo/adminPages";
import userPages from "./homeDemo/userPages";

const menuItems = {
  docs: [gettingStarted, endPoints],
  userDemo: [userPages, adminPages],
};

export default menuItems;

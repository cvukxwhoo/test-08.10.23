import All from "../pages/All";
import Active from "../pages/Active";
import Completed from "../pages/Completed";

const publicRoutes = [
  { path: "/", component: All },
  { path: "/active", component: Active },
  { path: "/completed", component: Completed },
];

export { publicRoutes };

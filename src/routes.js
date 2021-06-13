
import Notifications from "./component/Notifications";
import Service from "./component/service";
import Groups from "./component/groups";
import Sms from "./component/sms";
import Dashboard from './component/Dashboard';
import UserProfile from './component/UserProfile'
import Table from "./component/TableList";
import Payment from "./component/payment";
import NewGroup from "./component/newGroup"
import ViewGroup from "./component/groupView"
import Pay from "./component/pay"
import Receipt from "./component/reciept"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-home",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Sms",
    name: "Sms",
    icon: "fa fa-sms",
    component: Sms,
    layout: "/admin",
  },
  
  {
    path: "/groups",
    name: "Groups",
    icon: "fa fa-users",
    component: Groups,
    layout: "/admin",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "fa fa-shopping-cart",
    component: Service,
    layout: "/admin",
  },
  {
    path: "/Payment",
    name: "Payment",
    icon: "fa fa-credit-card",
    component: Payment,
    layout: "/admin",
  },
  {
    path: "/history",
    name: "Table List",
    icon: "fa fa-history",
    component: Table,
    layout: "/admin",
  },
  {
    path: "/add-group",
    name: "New Contact",
    icon: "nc-icon nc-bell-55",
    component: NewGroup,
    layout: "/admin",
  },
  {
    path: "/view-group",
    name: "View Group",
    icon: "nc-icon nc-bell-55",
    component: ViewGroup,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa fa-bell",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "fa fa-user",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/pay",
    name: "Make Payment",
    icon: "fa fa-user",
    component: Pay,
    layout: "/admin",
  },
  {
    path: "/receipt",
    name: "Print Receipt",
    icon: "fa fa-user",
    component: Receipt,
    layout: "/admin",
  },
];

export default dashboardRoutes;

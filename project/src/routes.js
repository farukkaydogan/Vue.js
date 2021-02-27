import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import Header from "./components/Header";

export const routes = [
  {
    path: '/', name: 'anasayfa', components: {
      default: Home,
      "header-top" : Header
    }
  },
  {
    path: '/action', name: 'kullanici',
    components : {
      default : User,
      "header-bottom" : Header
    },
    children: [
      {path: '', component: UserStart}, // /user
      {path: ':id', component: UserDetail}, // /user/12
      {path: ':id/paragraf', component: UserDetail}, // /user/12



    ]
  },
  { path : "/redirect", redirect : "/action"},
  { path : "*", redirect: "/"}
];

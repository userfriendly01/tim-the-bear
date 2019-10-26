import {
  Home,
  Meet,
  Gear,
  Sponsor,
  Train,
  Contact
} from '../pages'

export const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/meet",
      component: Meet
    },
    {
      path: "/gear",
      component: Gear
    },
    {
      path: "/sponsor",
      component: Sponsor
    },
    {
      path: "/train",
      component: Train
    },
    {
      path: "/contact",
      component: Contact
    }
];
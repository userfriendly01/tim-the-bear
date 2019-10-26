import {
  Home,
  MeetTheBear
} from '../pages'

export const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/bear",
      component: MeetTheBear
    }
];
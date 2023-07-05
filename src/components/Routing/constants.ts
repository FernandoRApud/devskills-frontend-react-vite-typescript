import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import AboutMe from '../../pages/AboutMe/AboutMe';
import { ROUTES } from '../../utilities';

export const PUBLIC_ROUTES = [
  {
    id: 'public0',
    path: ROUTES.NOT_FOUND,
    component: NotFound,
  },
  {
    id: 'public1',
    path: ROUTES.HOME,
    component: Home,
  },
  {
    id: 'public2',
    path: ROUTES.ABOUTME,
    component: AboutMe,
  },
];

import Home from 'ui/pages/Home';
import NotFound from 'ui/pages/NotFound';

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound }
];

export default routes;

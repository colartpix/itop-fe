import React from 'react';

const Landing = React.lazy(() => import('./views/landing'))


const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/', name: 'Landing', component: Landing },
];

export default routes;

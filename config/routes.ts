export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { redirect: '/main', path: '/' },
      {
        path: '/main',
        component: '@/layouts/mainLayout',
        routes: [
          { redirect: '/main/robot', path: '/main' },
          {
            path: '/main/robot',
            component: '@/pages/robot',
          },
        ],
      },
    ],
  },
];

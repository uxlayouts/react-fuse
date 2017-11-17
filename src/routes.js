import Root from './Root';
import Home from './Home/';
import About from './About/';
import Search from './Search/';
import Blog from './Blog/';

export default [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About,
        name: 'About',
      },
      {
        path: '/search',
        component: Search,
        name: 'Search',
      },
      {
        path: '/blog',
        component: Blog,
        name: 'Blog',
      },
    ]
  }
]

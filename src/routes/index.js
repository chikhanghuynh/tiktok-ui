import Following from '~/components/Following';
import Home from '~/components/Home';
import Profile from '~/components/Profile';
import Upload from '~/components/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import Search from '~/components/Search';
const privateRoutes = [];

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };

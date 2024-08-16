import { useEffect } from 'react';
import { Layout, RequireAuth } from './routes/Layout/Layout';
import ListPage from './routes/ListPage/ListPage';
import LoginPage from './routes/LoginPage/LoginPage';
import Profile from './routes/Profile/Profile';
import ProfileUpdatePage from './routes/ProfileUpdatePage/ProfileUpdatePage';
import RegisterPage from './routes/Registerpage/RegisterPage';
import SinglePage from './routes/SinglePage/SinglePage';

import HomePage from './routes/homePage/HomePage';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import NewPostPage from './routes/newPostPage/newPostPage';
import { singlePageLoader } from './components/lib/loaders';
function App() {
  useEffect(() => {
    console.log('REACT_APP_API_URL', process.env.REACT_APP_API_URL);
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: '/register',
          element: <RegisterPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

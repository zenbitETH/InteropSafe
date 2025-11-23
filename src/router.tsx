
import { createBrowserRouter } from 'react-router-dom';
import Root from './App';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Create from './pages/Create';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'landing', element: <Landing /> },
      { path: 'create', element: <Create /> },
    ],
  },
]);

export default router;
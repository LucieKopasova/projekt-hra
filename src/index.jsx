import { createRoot } from 'react-dom/client';
import { App } from './pages/App/App';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './global.css';
import { HomePage } from './pages/HomePage/HomePage';
import { RulesPage } from './pages/RulesPage/RulesPage';
import { StoryPage } from './pages/StoryPage/StoryPage';
import { GamePage } from './pages/GamePage/GamePage';
import { DevPage } from './pages/DevPage/DevPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'pravidla',
        element: <RulesPage />,
      },
      {
        path: 'pribeh',
        element: <StoryPage />,
      },
      {
        path: 'hra',
        element: <GamePage />,
      },
      {
        path: 'devpage',
        element: <DevPage />,
      }
    ]
  }

]);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
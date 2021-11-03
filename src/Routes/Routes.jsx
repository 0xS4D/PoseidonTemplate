// --IMPORTS--

// --Pages--
import Home from '@/Pages/Home'
import Layout from '@/Layouts/Layout'
import Subroute from '@/Pages/Subroute'
import Page404 from '@/Pages/Page404'
// // --Components--
import Counter from '@/Components/Counter'

export const Routes = [
  {
    path: '/',
    element: Home
  },
  {
    // -- Path with layout --
    path: '/layout/',
    element: Layout,
    children: [
      {
        path: '/',
        element: Counter
      }
    ]
  },
  {
    // -- Path without layout --
    path: '/layout',
    children: [
      {
        path: '/secret',
        element: Subroute
      }
    ]
  },
  {
    path: '/*all',
    element: Page404
  }
]

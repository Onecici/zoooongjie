import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { useAnimatedRoutes } from 'react-animated-router'

const Home = lazy(() => import('../views/home'))
const About = lazy(() => import('../views/about'))


export default function Route() {
  return (
    <Suspense>
      {useAnimatedRoutes([
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/',
          element: <Navigate to="/home" />
        },
        {
          path: '*',
          element: <Navigate to="/home" />
        }
      ])}
    </Suspense>
  )
}

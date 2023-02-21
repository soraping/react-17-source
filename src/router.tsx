import React, { Children, lazy, Suspense } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'
import Home from '@/pages/home'

const User = lazy(() => import('@/pages/user'))
const About = lazy(() => import('@/pages/about'))

const lazyLoad = children => {
    return <Suspense fallback={<>loading</>}>{children}</Suspense>
  }


export default function Router(){

    const routes: RouteObject[] = [
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '/about',
                    element : lazyLoad(<About />)
                },
                {
                    path: '/user',
                    element: lazyLoad(<User />)
                }
            ]
        }
    ]
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}
/* eslint-disable no-unused-vars */
// REACT BASES IMPORTS 
import React, { lazy, Suspense } from 'react'
import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// NON-LAZY FILE IMPORTS
import Layout from './Layout';
import LoadingPage from './Pages/LoadingPage/LoadingPage'
import Hero from './Pages/Hero/Hero';
import AuthPage from './Pages/AuthPage/AuthPage';


// LAZY LOAD THE PAGES
const LandingPage = lazy( () => import('./Pages/Hero/Hero'));
// const LoadingPage = lazy( ()=> import('./Pages/LoadingPage/LoadingPage') )

function Routes() {

  // CREATING ROUTES
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/app' element={ <Layout /> }> 
          
        </Route>,

        <Route 
          path='/' 
          index
          element={
            <Suspense fallback={<LoadingPage />} >
              {/* <LandingPage /> */}
              <Hero />
            </Suspense>
          } 
        />,
        <Route 
          path='/auth' 
          element={
            <Suspense fallback={<LoadingPage />}>
              <AuthPage/>
            </Suspense>
          } 
        />

      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default Routes
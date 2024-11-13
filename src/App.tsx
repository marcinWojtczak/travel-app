import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";
import HomePage from '@pages/home/HomePage';
import ThingsToDoPage from "./pages/thingsToDo/ThingsToDoPage";
import Header from '@components/Header'
import { fetchGeolocation } from "./features/location/locationSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import ExploreCountryPage from "@pages/exploreCuntry/ExploreCountryPage";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'things-to-do/:title',
        element: <ThingsToDoPage />
      },
      {
        path: 'explore-country/:title',
        element: <ExploreCountryPage />
      }
    ]
  }
]);


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGeolocation())
  }, [dispatch])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App

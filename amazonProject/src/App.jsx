import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import viteLogo from '/vite.svg'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App

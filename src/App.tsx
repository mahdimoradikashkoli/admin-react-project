import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Categories from "./products/categories/categories"
import axios from "axios"
import PupularCourse from "./products/pupularcourse/pupularcourse"
import TopMentor from "./products/topmentor/topmentor"
export const instance=axios.create({
  baseURL:"http://localhost:4003",
  headers:{
    "Content-Type":"multipart/form-data"
  }
})

function App() {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path:"/",
        element:<Categories/>
      },
      {
        path:"/pupularcourse",
        element:<PupularCourse/>
      },
      {
        path:"/topmentor",
        element:<TopMentor/>
      },
    ])}/>
  )
}

export default App

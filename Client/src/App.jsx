import "./App.css";
import Main from "./Pages/Main.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Main />} />)
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

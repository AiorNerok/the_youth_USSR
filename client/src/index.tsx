import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

import "./index.css";


// Никогда так не делай. Это плохо. Не повторяй за мной
if (localStorage.getItem('user')=== null && window.location.pathname !== '/login') {
  window.location.href = '/login'
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={routes} />);

import { Layout } from "components/layout";
import { Company, Empty, Home, Login, Message, News, Services } from "pages";
import { Team } from "pages/Team";
import { NewEmployee } from "pages/NewEmployee";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/Message",
        element: <Message />,
      },
      {
        path: "/newemployee",
        element: <NewEmployee />,
      },
      {
        path: "/*",
        element: <Empty />,
      },
    ],
  },
]);

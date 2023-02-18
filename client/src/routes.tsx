import { Layout } from "components/layout";
import { Home, HR } from "pages";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/hr",
    element: (
      <Layout>
        <HR />
      </Layout>
    ),
  },
]);

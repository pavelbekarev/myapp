import HomePage from "#pages/HomePage";
import ResidencePage from "#pages/ResidencePage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: '/residence',
        Component: ResidencePage,
      }
    ],
  },
]);

export default router;

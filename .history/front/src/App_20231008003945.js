import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./page/NotFoundPage";
import Main from "./page/Main";
import Detail from "./page/Detail";
import Root from "./page/Root";
import Toolkit from "./page/Toolkit";
import Search from "./page/Search";
import { useState } from "react";
import Activity from "./component/Activity";
import ActivityDetail from "./component/ActivityDetail";
import Community from "./page/Community";

function App() {
  const [categoryOn, setCategoryOn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root categoryOn={categoryOn} setCategoryOn={setCategoryOn} />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Main setCategoryOn={setCategoryOn} /> },
        {
          path: "/activity",
          element: <Activity setCategoryOn={setCategoryOn} />,
        },
        {
          path: "/activity/detail/:id",
          element: <ActivityDetail setCategoryOn={setCategoryOn} />,
        },
        { path: "/search", element: <Search setCategoryOn={setCategoryOn} /> },
        {
          path: "/toolkit",
          element: <Toolkit setCategoryOn={setCategoryOn} />,
        },
        {
          path: "/toolkit/detail/:id",
          element: <Detail setCategoryOn={setCategoryOn} />,
        },
        { path: "*", element: <NotFoundPage /> },
        {
          path: "/community",
          element: <Community setCategoryOn={setCategoryOn} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
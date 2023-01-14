import { createHashRouter } from "react-router-dom";

import LayoutHome from "../Layouts/LayoutHome";

export const router = createHashRouter([
  {
    path: "/",
    element: <LayoutHome />,
  },
]);

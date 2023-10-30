import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import * as React from "react";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')).render(
	<RouterProvider router={router} />
);


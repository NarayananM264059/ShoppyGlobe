import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { lazy, Suspense } from "react";

// lazy load components to improve performance
const Cart = lazy(() => import("./components/cartComponents/Cart.jsx"));
const ProductDetails = lazy(() =>
  import("./components/productComponents/ProductDetails.jsx")
);
const Checkout = lazy(() => import("./components/CheckOut.jsx"));
const OrderConfirmation = lazy(() => import("./components/OrderConfirmation.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));

// define app routes using react router
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // redirect root to /home
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        // load product list
        element: <ProductList />,
      },
      {
        path: "/cart",
        // lazy load cart with fallback
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/productDetails/:id",
        // lazy load product details with fallback
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        // lazy load checkout with fallback
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/orderConfirmation",
        // lazy load order confirmation with fallback
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <OrderConfirmation />
          </Suspense>
        ),
      },
    ],
    // lazy load error page
    errorElement: (
      <Suspense fallback={<div>loading...</div>}>
        <Error />
      </Suspense>
    ),
  },
]);

// render the app in the root element
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrap the app with redux provider */}
    <Provider store={store}>
      {/* router provider to manage routes */}
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);

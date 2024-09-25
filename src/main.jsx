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
import ProductList from "./components/productComponents/ProductList.jsx";
import NotFound from "./components/NotFound.jsx"; 

// Lazy load components to improve performance
const Cart = lazy(() => import("./components/cartComponents/Cart.jsx"));
const ProductDetails = lazy(() =>
  import("./components/productComponents/ProductDetails.jsx")
);
const Checkout = lazy(() => import("./components/CheckOut.jsx"));
const OrderConfirmation = lazy(() => import("./components/OrderConfirmation.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));

// Define app routes using react router
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // Redirect root to /home
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        // Load product list
        element: <ProductList />,
      },
      {
        path: "/cart",
        // Lazy load cart with fallback
        element: (
          <Suspense fallback={<div>Loading cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/productDetails/:id",
        // Lazy load product details with fallback
        element: (
          <Suspense fallback={<div>Loading product details...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        // Lazy load checkout with fallback
        element: (
          <Suspense fallback={<div>Loading checkout...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/orderConfirmation",
        // Lazy load order confirmation with fallback
        element: (
          <Suspense fallback={<div>Loading order confirmation...</div>}>
            <OrderConfirmation />
          </Suspense>
        ),
      },
      {
        path: "*", 
        element: <NotFound />, 
      },
    ],
    // Lazy load error page
    errorElement: (
      <Suspense fallback={<div>Loading error page...</div>}>
        <Error />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);

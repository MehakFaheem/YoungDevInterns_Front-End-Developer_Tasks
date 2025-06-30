import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Error from "./pages/Error";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard")); 

// Optimized loading component
const LoadingSpinner = ({ page }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '700px',
    fontSize: '16px',
    color: '#666',
    transition: 'min-height 0.3s ease-in-out' // smooth transition
  }}>
    Loading {page}...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { 
        path: "/", 
        element: (
          <Suspense fallback={<LoadingSpinner page="Home" />}>
            <Home />
          </Suspense>
        ) 
      },
      { 
        path: "/about", 
        element: (
          <Suspense fallback={<LoadingSpinner page="About" />}>
            <About />
          </Suspense>
        ) 
      },
      { 
        path: "/contact", 
        element: (
          <Suspense fallback={<LoadingSpinner page="Contact" />}>
            <Contact />
          </Suspense>
        ) 
      },
      { 
        path: "/dashboard", // NEW ROUTE ADDED
        element: (
          <Suspense fallback={<LoadingSpinner page="Dashboard" />}>
            <Dashboard />
          </Suspense>
        ) 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
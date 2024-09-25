import { Outlet } from "react-router-dom";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";

//  renders the Header, Footer, and the current route's content (Outlet).
function App() {
  return (
    // This section defines the container for the entire application, ensuring it takes up the full screen height.
    <section className="min-h-screen container mx-auto flex flex-col">
      <Header />
            <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;

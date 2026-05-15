import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";   //Outlet acts as a placeholder

function RootLayout() {
  return (
    <div>
        <Header />
        {/* placeholder */}
        <div className="min-h-screen mx-16 bg-gray-100">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout
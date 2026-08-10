import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { CharD1 } from "./Pages/chard1";

export function Layout() {
    return (
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
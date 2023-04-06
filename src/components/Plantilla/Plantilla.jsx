import { Outlet } from "react-router-dom"
import { Header } from "../home/Header/Header"

export const Plantilla = () => {
    return (
        <>
        
        < Header />
            <Outlet />
            
        </>
    )
}
import { Header } from "../home/Header/Header"
import { Outlet } from "react-router-dom"

export const Template = () => {
    return (
        <>
            < Header />
                < Outlet />
        </>
    )
}
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

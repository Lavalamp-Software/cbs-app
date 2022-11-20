import React from "react";
import Link from "next/link"
import { readBuilderProgram } from "typescript";
import NavComponent from "./NavComponent";

const Navbar : React.FC = () => {
    return (
        <nav style={{
            "backgroundColor": "rgba(10,10,10,0.2)",
            "height": "5rem",
            "display": "flex"
        }}>
            <NavComponent route="/">Home</NavComponent>
            <NavComponent route="/">Lol</NavComponent>
        </nav>
    )
}

export default Navbar
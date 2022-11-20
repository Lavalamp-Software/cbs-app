import Link from "next/link"
import React from "react"

export interface NavComponentProps {
    children : string,
    route : string
}

const NavComponent : React.FC<NavComponentProps> = ({children, route}) => {
    return (
        <div style={{
            "height": "100%",
        }}> 
            <Link href={route}>
                <button style={{
                    "flexDirection": "row",
                    "WebkitAppearance": "none",
                    "border": "none",
                    "backgroundColor": "rgba(1,1,1,0.3)",
                    "width": "10rem",
                    "height": "100%",
                    "fontSize": "2em"
                }}>
                    {children}
                </button>
            </Link>
        </div>
    )
}
export default NavComponent
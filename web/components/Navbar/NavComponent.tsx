import Link from "next/link"
import React from "react"

const NavComponent : React.FC = () => {
    return (
        <div style={{
        }}> 
            <Link href={""} style={{
                "backgroundColor": "none",
                "color": "rgb(71, 170, 240)",
            }}>
                <button style={{
                    "WebkitAppearance": "none",
                    "border": "none",
                    "backgroundColor": "rgba(1,1,1,0.3)",
                    "height": "100%",
                    "width": "100%"
                }}>
                    ss
                </button>
            </Link>
        </div>
    )
}
export default NavComponent
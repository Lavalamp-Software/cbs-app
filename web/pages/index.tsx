import { NextPage } from "next";
import { Head } from "next/document";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

const Home : NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <>
    <main>
      <Navbar></Navbar>
      <h1 style={{
        "textAlign": "center",
        "fontSize": "2.5em",
        "padding": "2rem"
      }}><span style={{
        "color": "rgb(1,86,250)"
      }}>CBS</span> - a C/C++ Build System inspired by pypi, npm, and cargo</h1>
      <div style={{
        "whiteSpace": "pre",
        "paddingLeft": "5rem",
        "padding": "1rem",
        "tabSize": "4",
        "backgroundColor": "rgb(26, 26, 26)",
        "color": "rgb(217, 217, 217)",
        "fontFamily": "'Jetbrains Mono', monospace"
      }}>
          {
            
            `#include <cbs/mypackage>` +

            `int main() { \n` +
              `\tMyPackageClass::println("hello, this is working!"); \n` +
              `\treturn 0; \n` +
              `}`
            }
            
        </div>

        <div style={{
          "display": "flex",
          "flexDirection": "row"
        }}>
          <input type={"text"} style={{
            "WebkitAppearance": "none",
            "border": "none",
            "width": "80%",
            "fontSize": "1.5em",
            "height": "2rem",
            "transitionDuration": "250ms",
            "backgroundColor": "rgb(20,20,20)",
            "fontFamily": "'Jetbrains Mono', monospace"
          }}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value.replaceAll(" ", "-"))
          }}
          >
          </input>
            <button style={{
              "WebkitAppearance": "none",
              "border": "none",
              "height": "2rem",
              "width": "20%",
              "fontSize": "1.5em",
              "backgroundColor": "rgb(50,50,50)"
            }}
            >
              <Link href={`/packages/${searchQuery}`}>Search</Link>
            </button>
        </div>
    </main>
    </>
  )
}

export default Home
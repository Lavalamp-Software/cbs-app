import { NextPage } from "next";
import { Head } from "next/document";
import { Navbar } from "../components/Navbar";

const Home : NextPage = () => {
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
    </main>
    </>
  )
}

export default Home
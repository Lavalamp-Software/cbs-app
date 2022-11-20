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
        "backgroundColor": "rgba(10,10,10,0.5)",
        "width": "100%",
        "height": "10rem"
      }}>
        <pre>
          {
            `
            #include <cbs/mypackage>

            int main() {
              MyPackageClass::println("hello, this is working!");
              return 0;
            }
            `
          }
        </pre>
      </div>
    </main>
    </>
  )
}

export default Home
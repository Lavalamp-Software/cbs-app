import { NextPage } from "next";
import { Head } from "next/document";

const Home : NextPage = () => {
  return (
    <>
    <main>
      <h1 style={{
        "textAlign": "center",
        "fontSize": "2.5em",
        "padding": "2rem"
      }}>Build without Pain - that is what we have thought about when creating <span style={{
        "color": "rgb(1,86,250)"
      }}>CBS</span>.</h1>
      <div style={{
        "backgroundColor": "rgba(10,10,10,0.5)",
        "width": "100%",
        "height": "10rem"
      }}>
        <p>
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
        </p>
      </div>
    </main>
    </>
  )
}

export default Home
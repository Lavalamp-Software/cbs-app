import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const PkgPage : NextPage = () => {
    const router = useRouter()
    const {pkg} = router.query
    return (
        <>
        <Head>
            <title>{pkg}</title>
        </Head>
        <main>
            
        </main>
        </>
    )
}


export default PkgPage
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const QuerySearchPage : NextPage = () => {
    const router = useRouter()
    const {query} = router.query
    return (
        <>
        <Head>

        </Head>
        <main>
            <h1>Search key = {query}</h1>
        </main>
        </>
    )
}
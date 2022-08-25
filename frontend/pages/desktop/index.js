import Head from "next/head";
import Image from "next/image";

import { DesktopLayout } from "../../components";

export default function Home() {
  return (
    <DesktopLayout>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>
          Welcome to <a href="https://nextjs.org">Med-X Desktop!</a>
        </h1>
      </div>
    </DesktopLayout>
  );
}

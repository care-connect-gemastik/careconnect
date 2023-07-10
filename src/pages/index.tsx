import { HeaderResponsive } from "@/components/header";
import { Card } from "@mantine/core";
import { Poppins } from "next/font/google";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CareConnect</title>
        <meta
          name="description"
          content="CareConnect: Hubungkan Lansia dengan Dunia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <HeaderResponsive
          links={[
            {
              link: "/",
              label: "Home",
            },
            {
              link: "/artikel",
              label: "Artikel",
            },
            {
              link: "/kegiatan",
              label: "Kegiatan",
            },
            {
              link: "/lembaga",
              label: "Lembaga",
            },
          ]}
        />
        <Card padding="lg" radius="md" mx="auto">
          <h1>CareConnect</h1>
        </Card>
      </main>
    </>
  );
}

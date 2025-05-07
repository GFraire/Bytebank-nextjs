import { Header, HeaderContainer } from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bytebank | Home</title>
        <meta
          name="description"
          content="Um banco digital feito especialmente para você."
        />
      </Head>

      <Header>
        <HeaderContainer>
          <div>
            <Image
              alt="Texto escrito Bytebank"
              height={32}
              src="/logo.png"
              priority
              width={146}
            />

            <span>Sobre</span>

            <span>Serviços</span>
          </div>

          <div>
            <button>Abrir minha conta</button>

            <button className="outlined">Já tenho conta</button>
          </div>
        </HeaderContainer>
      </Header>
    </>
  );
}

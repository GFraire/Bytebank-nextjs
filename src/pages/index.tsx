import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { BaseButton } from "@/components/ui/button/style";
import {
  AdvantageCard,
  AdvantageSection,
  FooterContainer,
  FooterContent,
  HeaderContainer,
  HeaderContent,
  HeroSection,
  HomeContainer,
  HomeContent,
  MainContainer,
} from "@/styles/pages/home";

export default function Home() {
  const advantageCards = [
    {
      icon: "present",
      title: "Conta e cartão gratuitos",
      description:
        "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
      alt: "Presente",
    },
    {
      icon: "withdraw",
      title: "Saques sem custo",
      description:
        "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
      alt: "Mão retirando dinheiro do caixa",
    },
    {
      icon: "star",
      title: "Programa de pontos",
      description:
        "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
      alt: "Estrela",
    },
    {
      icon: "devices",
      title: "Seguro Dispositivos",
      description:
        "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
      alt: "Notebook, tablet e celular",
    },
  ];

  return (
    <>
      <Head>
        <title>Bytebank | Home</title>
        <meta
          name="description"
          content="Um banco digital feito especialmente para você."
        />
      </Head>

      <HomeContainer>
        <HeaderContainer>
          <HeaderContent>
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
              <BaseButton disabled>Abrir minha conta</BaseButton>

              <Link href="/account">
                <BaseButton outlined>Já tenho conta</BaseButton>
              </Link>
            </div>
          </HeaderContent>
        </HeaderContainer>

        <HomeContent>
          <MainContainer>
            <HeroSection>
              <p>
                Experimente mais liberdade no controle da sua vida financeira.
                Crie sua conta com a gente!
              </p>

              <Image
                src="/banner.png"
                height={412}
                width={660}
                priority
                alt="Desenho de uma pessoa segurando dinheiro"
              />
            </HeroSection>

            <AdvantageSection>
              <h3>Vantagens do nosso banco:</h3>

              <div className="advantage-content">
                {advantageCards.map((card) => {
                  return (
                    <AdvantageCard key={card.title}>
                      <Image
                        src={`/icons/${card.icon}.svg`}
                        width={73}
                        height={56}
                        alt={card.alt}
                      />

                      <span>{card.title}</span>

                      <p>{card.description}</p>
                    </AdvantageCard>
                  );
                })}
              </div>
            </AdvantageSection>
          </MainContainer>
        </HomeContent>

        <FooterContainer>
          <FooterContent>
            <div className="infos">
              <strong>Serviços</strong>

              <span>Conta corrente</span>

              <span>Conta PJ</span>

              <span>Cartão de crédito</span>
            </div>

            <div className="infos">
              <strong>Contato</strong>

              <span>0800 004 250 08</span>

              <span>meajuda@bytebank.com.br</span>

              <span>ouvidoria@bytebank.com.br</span>
            </div>

            <div className="infos-icons">
              <strong>Desenvolvido por Alura</strong>

              <Image
                alt="Texto escrito Bytebank"
                height={32}
                src="/logo-white.png"
                priority
                width={146}
              />

              <div>
                <Image
                  alt=""
                  height={30}
                  src="/icons/instagram.svg"
                  width={30}
                />

                <Image
                  alt=""
                  height={30}
                  src="/icons/whatsapp.svg"
                  width={30}
                />

                <Image alt="" height={30} src="/icons/youtube.svg" width={30} />
              </div>
            </div>
          </FooterContent>
        </FooterContainer>
      </HomeContainer>
    </>
  );
}

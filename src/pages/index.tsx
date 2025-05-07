import { BaseButton } from "@/components/button/style";
import {
  AdvantageCard,
  AdvantageSection,
  HeaderContainer,
  HeaderContent,
  HeroSection,
  HomeContainer,
  HomeContent,
  MainContainer,
} from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/image";

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
              <BaseButton>Abrir minha conta</BaseButton>

              <BaseButton outlined>Já tenho conta</BaseButton>
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
      </HomeContainer>
    </>
  );
}

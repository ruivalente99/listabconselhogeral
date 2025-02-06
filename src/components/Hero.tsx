"use client";
import { BackgroundImage } from "@/components/BackgroundImage";
import { Container } from "@/components/Container";
import { AnimatedTimeline } from "./animated-timeline";

const UTAD_ElectionEvents = [
  {
    id: "2",
    title: "Inovação Pedagógica",
    description:
      "Proposta de melhoria nas abordagens de ensino, avaliação docente e integração de IA no ensino superior.",
  },
  {
    id: "3",
    title: "Expansão da Oferta de Mestrados",
    description:
      "Planeamento para atualização de conteúdos programáticos e evitar sobrecarga teórica no 2º ciclo.",
  },
  {
    id: "4",
    title: "Aproximação ao Mercado de Trabalho",
    description:
      "Promoção de experiências práticas para melhor aplicação do conhecimento teórico.",
  },
  {
    id: "5",
    title: "Apoio Económico e Habitação",
    description:
      "Identificação do aumento dos custos com habitação e defesa de mais apoios financeiros para estudantes deslocados.",
  },
  {
    id: "6",
    title: "Saúde Mental dos Estudantes",
    description:
      "Garantia da continuidade do projeto YOUNG (in) Mental Health, assegurando apoio psicológico na UTAD.",
  },
  {
    id: "7",
    title: "Melhoria na Acessibilidade",
    description:
      "Planeamento para tornar o campus mais inclusivo e acessível a estudantes com mobilidade reduzida.",
  },
  {
    id: "8",
    title: "Reforço da Representatividade Estudantil",
    description:
      "Defesa de maior participação dos estudantes nas decisões estratégicas da universidade.",
  },
  {
    id: "9",
    title: "Compromisso com a Comunidade Académica",
    description:
      "Criação de um ambiente universitário acessível, inovador e alinhado com as necessidades dos estudantes.",
  },
];

export default UTAD_ElectionEvents;

export function Hero() {
  return (
    <>
      <div className="">
        <BackgroundImage />
      </div>
      <div className="relative z-10">
        <Container className="mt-15 relative rounded-lg bg-white bg-opacity-90 p-8 shadow-lg sm:mt-96">
          <h2
            id="conselho-title"
            className="font-display text-4xl font-medium tracking-tighter text-fuchsia-600 sm:text-5xl"
          >
            O que é o Conselho Geral?
          </h2>

          <div className="mt-4 text-center">
            <p className="text-justify text-sm text-fuchsia-900 sm:text-lg">
              O Conselho Geral da UTAD é o órgão máximo de decisão estratégica e
              de fiscalização da instituição, desempenhando um papel fundamental
              no futuro da mesma. Este é constituído por treze representantes
              dos docentes e investigadores, um representante dos trabalhadores
              não docentes e não investigadores, sete personalidades de
              reconhecido mérito externas à Universidade de Trás-os-Montes e
              Alto Douro e apenas quatro estudantes de 1º, 2º e 3º ciclos, cujo
              objetivo é a defesa da visão dos estudantes da academia,
              perfazendo um total de vinte e cinco membros.
            </p>
            <h3 className="mt-4 text-center text-fuchsia-900 sm:text-xl">
              Conhece a Lista B para o Conselho Geral da UTAD! Descobre as
              propostas e os membros que a compõem.
            </h3>
          </div>
        </Container>
        <Container className="relative mt-20 rounded-lg bg-white bg-opacity-90 p-8 shadow-lg">
          <h2
            id="timeline"
            className="font-display text-4xl font-medium tracking-tighter text-fuchsia-600 sm:text-5xl"
          >
            Algumas das propostas da Lista B
          </h2>

          <AnimatedTimeline events={UTAD_ElectionEvents} />
        </Container>
      </div>
    </>
  );
}

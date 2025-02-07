"use client";

import { useId } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { Badge } from "./ui/badge";
import { Compass, MailIcon } from "lucide-react";

const ECT = () => (
  <Badge className="bg-orange-500 hover:bg-orange-600">ECT</Badge>
);
const ESS = () => (
  <Badge className="bg-yellow-500 hover:bg-yellow-600">ESS</Badge>
);
const ECHS = () => (
  <Badge className="bg-indigo-500 hover:bg-indigo-600">ECHS</Badge>
);
const ECVA = () => (
  <Badge className="bg-green-500 hover:bg-green-600">ECVA</Badge>
);
const ECAV = () => <Badge className="bg-red-500 hover:bg-red-600">ECAV</Badge>;

const days = [
  {
    name: "Membros",
    date: "",
    dateTime: "",
    speakers: [
      {
        name: "Fernando Gonçalves",
        role: "Mestrado em Engenharia Agronómica",
        image: "/images/avatars/fernando.jpeg",
        badge: ECAV,
        email: "",
      },
      {
        name: "Inês Souto",
        role: "Licenciatura em Psicologia",
        image: "/images/avatars/ines.jpg",
        badge: ECHS,
        email: "inessouto40@gmail.com",
      },
      {
        name: "Eduarda Fernandes",
        role: "Mestrado Integrado em Medicina Veterinária",
        image: "/images/avatars/duda.jpg",
        badge: ECAV,
        email: "",
      },
      {
        name: "Tiago Queirós",
        role: "Licenciatura em Enfermagem",
        image: "/images/avatars/tiago.jpg",
        badge: ESS,
        email: "tiagovieiracampos3@gmail.com",
      },
      {
        name: "Mariana Silva",
        role: "Licenciatura em Ciências da Nutrição",
        image: "/images/avatars/mariana.jpg",
        badge: ECVA,
        email: "uni.marianasilva04@gmail.com",
      },
      {
        name: "Miguel Barrias",
        role: "Mestrado Integrado em Engenharia Eletrotécnica e de Computadores",
        image: "/images/avatars/barrias.jpg",
        badge: ECT,
        email: "miguelbarrias03@gmail.com",
      },
    ],
  },
  {
    name: "Mandatário",
    date: "",
    dateTime: "",
    speakers: [
      {
        name: "Rui Valente",
        role: "Mestrado Engenharia Informática - ECT",
        image: "/images/avatars/valente.jpg",
        badge: ECT,
        email: "rui.valente99@gmail.com",
      },
    ],
  },
];

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  const id = useId();

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center">
            <Compass size={32} className="mr-2 inline-block text-purple-400" />
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-fuchsia-600 sm:text-5xl"
            >
              Membros e Mandatário
            </h2>
          </div>
          {/* <TextFlip /> */}
          <p className="font-display mt-4 text-2xl tracking-tight text-fuchsia-900">
            Conheça os membros e o mandatário da Lista B
          </p>
        </div>
        <div className="mt-14">
          {days.map((day) => (
            <div key={day.name} className="mt-14">
              <h2 className="font-display text-3xl font-medium tracking-tighter text-fuchsia-600 sm:text-4xl">
                {day.name}
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speaker.name} className="mt-5">
                    <div className="rounded-4xl group relative h-[17.5rem] transform overflow-hidden">
                      <div
                        className={clsx(
                          "rounded-4xl absolute bottom-6 left-0 right-4 top-0 border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-fuchsia-300",
                            "border-fuchsia-300",
                            "border-sky-300",
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-fuchsia-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full scale-110 object-cover"
                          src={speaker.image}
                          alt=""
                          priority
                          width={280}
                          height={280}
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="font-display mt-8 text-xl font-bold tracking-tight text-fuchsia-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                    <div className='flex gap-2'>
                      <speaker.badge />
                      <a
                        href={`mailto:${speaker.email}`}
                        className="text-fuchsia-600 hover:text-fuchsia-700"
                      >
                        <MailIcon size={24} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-20 mandatario-letter">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="font-display text-3xl font-medium tracking-tighter text-fuchsia-600 sm:text-4xl mb-4">
            Carta do Mandatário da Lista B
          </h2>
          <p className="text-justify text-slate-700 leading-relaxed">
            Desde 2018, a UTAD tem sido a minha casa. Foi aqui que vivi alguns dos melhores momentos da minha vida, mas também onde enfrentei desafios que me fizeram crescer. Neste percurso, aprendi que a academia é muito mais do que um local de ensino—é um espaço de partilha, evolução e, acima de tudo, de construção do nosso futuro.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Sempre fui um defensor incondicional da nossa academia, mas nunca hesitei em apontar o que pode ser melhorado. Porque quem realmente se importa, não fecha os olhos aos problemas—enfrenta-os e propõe soluções.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Quando recebi o convite para ser mandatário da Lista B para o Conselho Geral, soube que era mais uma oportunidade de contribuir para o futuro da nossa universidade. Vi nesta equipa a mesma vontade que sempre tive: a de retribuir à UTAD tudo o que ela nos deu, garantindo que os estudantes de hoje e de amanhã tenham uma voz ativa nas decisões que moldam o seu percurso académico.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            A Lista B é feita de pessoas com experiência, visão e, acima de tudo, compromisso. Destaco o nome de Fernando Gonçalves, alguém que nunca virou as costas às ideias e projetos que visam melhorar a academia e que sempre colocou os interesses dos estudantes em primeiro lugar. É com esta equipa que acredito que podemos fazer a diferença.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Porque a universidade não é apenas um ponto de passagem—é o alicerce do nosso futuro. Hoje somos estudantes, amanhã seremos a base da sociedade. E é agora que decidimos o caminho que queremos seguir.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Por isso, apelo a todos os estudantes da UTAD: exerçam o vosso direito, façam-se ouvir e votem em quem realmente vos representa.
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Vota B!
          </p>
          <p className="text-justify text-slate-700 leading-relaxed mt-4">
            Rui Valente
          </p>
          <p className="text-justify text-slate-700 leading-relaxed">
            Mandatário da Lista B
          </p>
        </div>
      </Container>
    </section>
  );
}

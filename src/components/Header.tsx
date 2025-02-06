"use client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";
import { Download } from "lucide-react";
export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo />
        </div>
        <div className="font-bold order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-fuchsia-600/10 py-4 font-mono text-sm text-fuchsia-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4 ">
            <p className='bg-white bg-opacity-50 rounded-md p-1'>
              <time dateTime="2025-02-20">20 de Fevereiro, 2025</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p className='bg-white bg-opacity-50 rounded-md p-1'>Vota B</p>
          </div>
          <Button
            className="items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 sm:flex m-4"
            onClick={() => window.open("/principios-orientadores.pdf")}
          >
            <Download size={16} />
            <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
              Princípios orientadores
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
}

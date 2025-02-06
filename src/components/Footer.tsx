import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between text-center md:flex-row">
        <Logo />
        <div className="flex-grow flex justify-center mt-6 md:mt-0">
          <a href="https://www.instagram.com/listab__conselhogeral/" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-fuchsia-700">
            <Instagram /> Segue-nos no Instagram
          </a>
        </div>
        <p className="text-base text-slate-500">
          Copyright &copy; {new Date().getFullYear()} Lista B
        </p>
      </Container>
    </footer>
  )
}

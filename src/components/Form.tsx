'use client'

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Container } from './Container'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xvgzrdzp')
  if (state.succeeded ) {
    return (
      <section id="newsletter" aria-label="Newsletter" className="py-8">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-fuchsia-600 sm:text-5xl"
            >
              Obrigado pela tua opinião ou sugestão!
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-fuchsia-900">
              A tua opinião é muito importante para nós.
            </p>
          </div>
        </Container>
      </section>
    )
  }
  return (
    <section id="newsletter" aria-label="Newsletter" className="py-8 text-fuchsia-900">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-fuchsia-600 sm:text-5xl"
          >
            Dá-nos a tua opinião
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-fuchsia-900">
            
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium 0"
            >
              Email (opcional)
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sm text-red-500"
            />
          </div>
          <div>
            <Label
              htmlFor="message"
              className="block text-sm font-medium 0"
            >
              Ideia, sugestão ou opinião
            </Label>
            <Textarea
              id="message"
              name="message"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-sm text-red-500"
            />
          </div>
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-md border border-transparent bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:outline-none"
          >
            Enviar <Send size={16} />
          </Button>
        </form>
      </Container>
    </section>
  )
}

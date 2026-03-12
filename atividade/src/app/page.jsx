import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Performance",
    desc: "Aplicações rápidas com arquitetura moderna e escalável.",
  },
  {
    title: "Design System",
    desc: "Componentes reutilizáveis e consistentes para todo o produto.",
  },
  {
    title: "Segurança",
    desc: "Infraestrutura robusta para proteger dados e usuários.",
  },
]

const cards = [
  {
    title: "Plataforma Zenith",
    desc: "Gerencie produtos, usuários e dados em um único painel.",
  },
  {
    title: "Análises",
    desc: "Insights inteligentes para ajudar na tomada de decisão.",
  },
  {
    title: "Automação",
    desc: "Automatize tarefas e escale seu negócio sem esforço.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* HERO */}

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Construa o futuro com <span className="text-orange-500">Zenith</span>
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Zenith é uma plataforma moderna projetada para ajudar equipes a construir, gerenciar e escalar produtos digitais mais rapidamente.
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <Button size="lg">Começar agora</Button>
            <Button size="lg" variant="outline">
              Ver documentação
            </Button>
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition">

              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>

                <CardDescription>
                  {feature.desc}
                </CardDescription>
              </CardHeader>

            </Card>
          ))}

        </div>
      </section>

      {/* PLATFORM CARDS */}

      <section className="bg-muted/40 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              Tudo que você precisa em uma plataforma digital
            </h2>

            <p className="text-muted-foreground mt-2">
              Ferramentas pensadas para otimização de processos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {cards.map((card, i) => (
              <Card key={i} className="hover:shadow-xl transition">

                <CardHeader>

                  <CardTitle>{card.title}</CardTitle>

                  <CardDescription>
                    {card.desc}
                  </CardDescription>

                </CardHeader>

                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Ver mais
                  </Button>
                </CardFooter>

              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Preparado para utilizar o Zenith?
          </h2>

          <p className="text-muted-foreground">
            Começe a montar aplicativos modernos hoje.
          </p>

          <Button
            size="lg"
            className="mx-auto px-10 text-lg shadow-lg hover:scale-105 transition"
          >
            Começar
          </Button>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t bg-orange-100 py-10 text-center font-bold text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zenith. All rights reserved.
      </footer>

    </div>
  )
}
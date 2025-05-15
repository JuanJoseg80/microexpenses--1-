import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseChart } from "@/components/expense-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { SavingsGoals } from "@/components/savings-goals"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">MicroSave</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Inicio
            </Link>
            <Link
              href="/transactions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Transacciones
            </Link>
            <Link
              href="/budgets"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Presupuestos
            </Link>
            <Link
              href="/goals"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Metas
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Informes
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-8 w-8 rounded-full" />
              <span className="sr-only">Perfil</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Balance Total</CardDescription>
                <CardTitle className="text-3xl">€2,450.25</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">↑ 2.5%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Gastos Mensuales</CardDescription>
                <CardTitle className="text-3xl">€645.80</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-red-500 font-medium">↑ 4.3%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Ahorros</CardDescription>
                <CardTitle className="text-3xl">€850.00</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium">↑ 12%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Presupuesto Restante</CardDescription>
                <CardTitle className="text-3xl">€354.20</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-amber-500 font-medium">↓ 8.1%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container py-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Resumen de Gastos</CardTitle>
                  <CardDescription>Análisis de tus microgastos por categoría</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Detalles
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ExpenseChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transacciones Recientes</CardTitle>
                <CardDescription>Tus últimos movimientos</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver todas las transacciones
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="container py-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Metas de Ahorro</CardTitle>
                <CardDescription>Progreso hacia tus objetivos financieros</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Nueva Meta
              </Button>
            </CardHeader>
            <CardContent>
              <SavingsGoals />
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; 2024 MicroSave. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

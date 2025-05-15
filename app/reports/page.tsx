import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MonthlyExpenseChart } from "@/components/monthly-expense-chart"
import { CategoryBreakdown } from "@/components/category-breakdown"
import { SavingsProgress } from "@/components/savings-progress"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Volver</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Informes y Análisis</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-8 w-8 rounded-full" />
              <span className="sr-only">Perfil</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="expenses">Gastos</TabsTrigger>
              <TabsTrigger value="income">Ingresos</TabsTrigger>
              <TabsTrigger value="savings">Ahorros</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Tendencia de Gastos</CardTitle>
                    <CardDescription>Análisis de tus gastos en los últimos 6 meses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MonthlyExpenseChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Categoría</CardTitle>
                    <CardDescription>Desglose de gastos por categoría</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CategoryBreakdown />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progreso de Ahorro</CardTitle>
                    <CardDescription>Evolución de tus ahorros</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SavingsProgress />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="expenses">
              <Card>
                <CardHeader>
                  <CardTitle>Análisis Detallado de Gastos</CardTitle>
                  <CardDescription>Visualiza y analiza todos tus gastos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Contenido detallado de gastos aquí</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="income">
              <Card>
                <CardHeader>
                  <CardTitle>Análisis de Ingresos</CardTitle>
                  <CardDescription>Visualiza y analiza todos tus ingresos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Contenido detallado de ingresos aquí</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="savings">
              <Card>
                <CardHeader>
                  <CardTitle>Análisis de Ahorros</CardTitle>
                  <CardDescription>Visualiza y analiza tu progreso de ahorro</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Contenido detallado de ahorros aquí</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

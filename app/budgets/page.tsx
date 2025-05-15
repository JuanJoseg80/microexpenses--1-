import Link from "next/link"
import { ArrowLeft, Edit, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function BudgetsPage() {
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
            <h1 className="text-xl font-bold">Presupuestos</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-8 w-8 rounded-full" />
              <span className="sr-only">Perfil</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Mis Presupuestos</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Presupuesto
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Comida</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </div>
                <CardDescription>Presupuesto mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€180.50 de €250.00</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <Progress value={72} className="h-2" />
                <p className="mt-2 text-sm text-amber-500">Quedan €69.50</p>
              </CardContent>
              <CardFooter className="pt-1">
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Transporte</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </div>
                <CardDescription>Presupuesto mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€95.30 de €120.00</span>
                  <span className="text-sm font-medium">79%</span>
                </div>
                <Progress value={79} className="h-2" />
                <p className="mt-2 text-sm text-amber-500">Quedan €24.70</p>
              </CardContent>
              <CardFooter className="pt-1">
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Ocio</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </div>
                <CardDescription>Presupuesto mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€145.00 de €150.00</span>
                  <span className="text-sm font-medium">97%</span>
                </div>
                <Progress value={97} className="h-2" />
                <p className="mt-2 text-sm text-red-500">Quedan €5.00</p>
              </CardContent>
              <CardFooter className="pt-1">
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Servicios</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </div>
                <CardDescription>Presupuesto mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€85.00 de €200.00</span>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <Progress value={42} className="h-2" />
                <p className="mt-2 text-sm text-green-500">Quedan €115.00</p>
              </CardContent>
              <CardFooter className="pt-1">
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Compras</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </div>
                <CardDescription>Presupuesto mensual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€140.00 de €180.00</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="mt-2 text-sm text-amber-500">Quedan €40.00</p>
              </CardContent>
              <CardFooter className="pt-1">
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-dashed flex flex-col items-center justify-center p-6">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Añadir nuevo presupuesto</p>
              <Button variant="outline" className="mt-4">
                Crear Presupuesto
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

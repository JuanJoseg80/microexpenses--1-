import Link from "next/link"
import { ArrowLeft, Edit, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function GoalsPage() {
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
            <h1 className="text-xl font-bold">Metas de Ahorro</h1>
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
            <h2 className="text-2xl font-bold">Mis Metas</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Meta
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Vacaciones</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </div>
                <CardDescription>Meta para diciembre 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€450 de €1,200</span>
                  <span className="text-sm font-medium">37%</span>
                </div>
                <Progress value={37} className="h-2" />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">Faltan €750</p>
                    <p className="text-muted-foreground">€125/mes para cumplir</p>
                  </div>
                  <Button size="sm">Añadir fondos</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Nuevo Ordenador</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </div>
                <CardDescription>Meta para agosto 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€850 de €1,500</span>
                  <span className="text-sm font-medium">57%</span>
                </div>
                <Progress value={57} className="h-2" />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">Faltan €650</p>
                    <p className="text-muted-foreground">€162/mes para cumplir</p>
                  </div>
                  <Button size="sm">Añadir fondos</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Fondo de Emergencia</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </div>
                <CardDescription>Meta continua</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">€2,500 de €5,000</span>
                  <span className="text-sm font-medium">50%</span>
                </div>
                <Progress value={50} className="h-2" />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">Faltan €2,500</p>
                    <p className="text-muted-foreground">Sin fecha límite</p>
                  </div>
                  <Button size="sm">Añadir fondos</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed flex flex-col items-center justify-center p-6">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Añadir nueva meta de ahorro</p>
              <Button variant="outline" className="mt-4">
                Crear Meta
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

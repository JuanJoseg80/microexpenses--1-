import { Progress } from "@/components/ui/progress"

export function SavingsGoals() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Vacaciones</h3>
            <p className="text-xs text-muted-foreground">Meta para diciembre 2024</p>
          </div>
          <div className="text-right">
            <p className="font-medium">€450 / €1,200</p>
            <p className="text-xs text-muted-foreground">37% completado</p>
          </div>
        </div>
        <Progress value={37} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Nuevo Ordenador</h3>
            <p className="text-xs text-muted-foreground">Meta para agosto 2024</p>
          </div>
          <div className="text-right">
            <p className="font-medium">€850 / €1,500</p>
            <p className="text-xs text-muted-foreground">57% completado</p>
          </div>
        </div>
        <Progress value={57} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Fondo de Emergencia</h3>
            <p className="text-xs text-muted-foreground">Meta continua</p>
          </div>
          <div className="text-right">
            <p className="font-medium">€2,500 / €5,000</p>
            <p className="text-xs text-muted-foreground">50% completado</p>
          </div>
        </div>
        <Progress value={50} className="h-2" />
      </div>
    </div>
  )
}

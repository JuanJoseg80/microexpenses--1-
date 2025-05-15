import { ArrowDownLeft, ArrowUpRight, Coffee, CreditCard, ShoppingBag } from "lucide-react"

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Coffee className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Café Aroma</p>
          <p className="text-xs text-muted-foreground">Hoy, 10:30</p>
        </div>
        <div className="flex items-center gap-1 text-red-500">
          <ArrowUpRight className="h-4 w-4" />
          <span className="font-medium">€4.50</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Supermercado Central</p>
          <p className="text-xs text-muted-foreground">Ayer, 18:45</p>
        </div>
        <div className="flex items-center gap-1 text-red-500">
          <ArrowUpRight className="h-4 w-4" />
          <span className="font-medium">€32.75</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Nómina</p>
          <p className="text-xs text-muted-foreground">25 Mayo, 09:00</p>
        </div>
        <div className="flex items-center gap-1 text-green-500">
          <ArrowDownLeft className="h-4 w-4" />
          <span className="font-medium">€1,250.00</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Tienda de Ropa</p>
          <p className="text-xs text-muted-foreground">24 Mayo, 16:20</p>
        </div>
        <div className="flex items-center gap-1 text-red-500">
          <ArrowUpRight className="h-4 w-4" />
          <span className="font-medium">€45.99</span>
        </div>
      </div>
    </div>
  )
}

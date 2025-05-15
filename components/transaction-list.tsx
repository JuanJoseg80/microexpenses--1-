import {
  ArrowDownLeft,
  ArrowUpRight,
  Coffee,
  CreditCard,
  ShoppingBag,
  Utensils,
  Train,
  Film,
  Wifi,
  Shirt,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TransactionListProps {
  type?: "all" | "income" | "expense"
}

export function TransactionList({ type = "all" }: TransactionListProps) {
  const transactions = [
    {
      id: 1,
      name: "Café Aroma",
      category: "Comida",
      date: "Hoy, 10:30",
      amount: 4.5,
      type: "expense",
      icon: Coffee,
    },
    {
      id: 2,
      name: "Supermercado Central",
      category: "Comida",
      date: "Ayer, 18:45",
      amount: 32.75,
      type: "expense",
      icon: ShoppingBag,
    },
    {
      id: 3,
      name: "Nómina",
      category: "Ingresos",
      date: "25 Mayo, 09:00",
      amount: 1250,
      type: "income",
      icon: CreditCard,
    },
    {
      id: 4,
      name: "Tienda de Ropa",
      category: "Compras",
      date: "24 Mayo, 16:20",
      amount: 45.99,
      type: "expense",
      icon: Shirt,
    },
    {
      id: 5,
      name: "Restaurante Italiano",
      category: "Comida",
      date: "23 Mayo, 21:15",
      amount: 38.5,
      type: "expense",
      icon: Utensils,
    },
    {
      id: 6,
      name: "Metro",
      category: "Transporte",
      date: "23 Mayo, 08:30",
      amount: 1.5,
      type: "expense",
      icon: Train,
    },
    {
      id: 7,
      name: "Cine",
      category: "Ocio",
      date: "22 Mayo, 19:00",
      amount: 12,
      type: "expense",
      icon: Film,
    },
    {
      id: 8,
      name: "Factura Internet",
      category: "Servicios",
      date: "21 Mayo, 10:00",
      amount: 45,
      type: "expense",
      icon: Wifi,
    },
  ]

  const filteredTransactions = type === "all" ? transactions : transactions.filter((t) => t.type === type)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead className="hidden md:table-cell">Categoría</TableHead>
          <TableHead className="hidden md:table-cell">Fecha</TableHead>
          <TableHead className="text-right">Importe</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredTransactions.map((transaction) => {
          const Icon = transaction.icon
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="md:hidden text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="outline">{transaction.category}</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
              <TableCell className="text-right">
                <div
                  className={`flex items-center justify-end gap-1 ${transaction.type === "expense" ? "text-red-500" : "text-green-500"}`}
                >
                  {transaction.type === "expense" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownLeft className="h-4 w-4" />
                  )}
                  <span className="font-medium">€{transaction.amount.toFixed(2)}</span>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

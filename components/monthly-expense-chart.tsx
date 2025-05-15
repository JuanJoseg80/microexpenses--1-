"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Ene", value: 580 },
  { name: "Feb", value: 620 },
  { name: "Mar", value: 550 },
  { name: "Abr", value: 680 },
  { name: "May", value: 645 },
  { name: "Jun", value: 0 },
]

export function MonthlyExpenseChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Cargando gráfico...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value) => [`€${value}`, "Gasto"]}
          labelStyle={{ fontWeight: "bold" }}
          contentStyle={{ borderRadius: "8px" }}
        />
        <Line type="monotone" dataKey="value" stroke="#00b894" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

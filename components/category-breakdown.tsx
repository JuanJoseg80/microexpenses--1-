"use client"

import { useEffect, useState } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Comida", value: 180.5, color: "#00b894" },
  { name: "Transporte", value: 95.3, color: "#00cec9" },
  { name: "Ocio", value: 145, color: "#0984e3" },
  { name: "Servicios", value: 85, color: "#6c5ce7" },
  { name: "Compras", value: 140, color: "#fdcb6e" },
]

export function CategoryBreakdown() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Cargando gráfico...</div>
  }

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`€${value}`, "Gasto"]}
            labelStyle={{ fontWeight: "bold" }}
            contentStyle={{ borderRadius: "8px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

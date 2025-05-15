"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Ene", value: 200 },
  { name: "Feb", value: 400 },
  { name: "Mar", value: 650 },
  { name: "Abr", value: 800 },
  { name: "May", value: 850 },
  { name: "Jun", value: 0 },
]

export function SavingsProgress() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Cargando gráfico...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value) => [`€${value}`, "Ahorro"]}
          labelStyle={{ fontWeight: "bold" }}
          contentStyle={{ borderRadius: "8px" }}
        />
        <Area type="monotone" dataKey="value" stroke="#00b894" fill="#00b89433" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

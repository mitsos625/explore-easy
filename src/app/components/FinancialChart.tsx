"use client"
import type React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Q1 Y1", Έσοδα: 90000, Έξοδα: 75000, Κέρδος: 15000 },
  { name: "Q2 Y1", Έσοδα: 105000, Έξοδα: 80000, Κέρδος: 25000 },
  { name: "Q3 Y1", Έσοδα: 120000, Έξοδα: 85000, Κέρδος: 35000 },
  { name: "Q4 Y1", Έσοδα: 135000, Έξοδα: 90000, Κέρδος: 45000 },
  { name: "Q1 Y2", Έσοδα: 240000, Έξοδα: 150000, Κέρδος: 90000 },
  { name: "Q2 Y2", Έσοδα: 270000, Έξοδα: 160000, Κέρδος: 110000 },
  { name: "Q3 Y2", Έσοδα: 300000, Έξοδα: 170000, Κέρδος: 130000 },
  { name: "Q4 Y2", Έσοδα: 330000, Έξοδα: 180000, Κέρδος: 150000 },
]

const FinancialChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Έσοδα" fill="#4ADE80" />
        <Bar dataKey="Έξοδα" fill="#F87171" />
        <Bar dataKey="Κέρδος" fill="#60A5FA" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default FinancialChart


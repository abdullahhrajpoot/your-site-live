"use client";

import {
    Area,
    AreaChart as RechartsAreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

const data = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 3200 },
    { name: "May", total: 2800 },
    { name: "Jun", total: 4300 },
    { name: "Jul", total: 5100 },
    { name: "Aug", total: 4800 },
    { name: "Sep", total: 6100 },
    { name: "Oct", total: 5900 },
    { name: "Nov", total: 7200 },
    { name: "Dec", total: 8400 },
];

export function AreaChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsAreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#126DFB" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#126DFB" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="name"
                        stroke="#666666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                    />
                    <YAxis
                        stroke="#666666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                        dx={-10}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", fontWeight: "500" }}
                        formatter={(value: number) => [`$${value}`, "Revenue"]}
                        cursor={{ stroke: '#126DFB', strokeWidth: 1, strokeDasharray: '3 3' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#126DFB"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorTotal)"
                        animationDuration={1500}
                        activeDot={{ r: 6, fill: "#126DFB", stroke: "#FFFFFF", strokeWidth: 2 }}
                    />
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    );
}

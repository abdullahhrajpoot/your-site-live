"use client";

import { motion } from "framer-motion";

const customers = [
    { name: "John Doe", email: "john@example.com", amount: "+$2,450.00", initials: "JD" },
    { name: "Sarah Smith", email: "sarah@example.com", amount: "+$1,200.00", initials: "SS" },
    { name: "Mike Johnson", email: "mike@example.com", amount: "+$850.00", initials: "MJ" },
    { name: "Emily Brown", email: "emily@example.com", amount: "+$3,100.00", initials: "EB" },
];

export function CustomerList() {
    return (
        <div className="flex flex-col gap-2">
            {customers.map((customer, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-hover transition-colors cursor-pointer group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                            {customer.initials}
                        </div>
                        <div>
                            <p className="font-semibold text-sm">{customer.name}</p>
                            <p className="text-xs text-subtext">{customer.email}</p>
                        </div>
                    </div>
                    <div className="font-semibold text-success text-sm">
                        {customer.amount}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck } from "lucide-react";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/login", { // Points to the NEW location
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh(); // Tells the bouncer (middleware) to re-check the cookie
            } else {
                alert("Unauthorized Access Attempt.");
                setLoading(false);
            }
        } catch (err) {
            alert("Connection error.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#2D0A0A] flex items-center justify-center p-8">
            <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 shadow-2xl border border-brand-gold/20">
                <div className="flex justify-center mb-6">
                    <ShieldCheck className="text-brand-gold" size={48} />
                </div>
                <h1 className="font-display text-4xl text-brand-burgundy uppercase text-center mb-8">
                    Executive <span className="text-brand-gold italic">Access</span>
                </h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <input
                        type="password"
                        placeholder="Enter Sovereign Key"
                        className="w-full border-b-2 border-brand-gold/20 py-4 outline-none text-brand-burgundy font-bold text-center placeholder:text-brand-burgundy/20"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <button
                        disabled={loading}
                        className="w-full py-4 bg-brand-burgundy text-brand-ivory rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" size={16} /> : "Unlock Suite"}
                    </button>
                </form>
            </div>
        </main>
    );
}
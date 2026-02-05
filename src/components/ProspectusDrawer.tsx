"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ChevronDown } from "lucide-react"; // 1. Imported ChevronDown

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const ProspectusDrawer = ({ isOpen, onClose }: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        budget: "Express (Entry-level)",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Please enter a valid email address.");
            return false;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            setErrorMessage("Please enter a valid 10-digit phone number.");
            return false;
        }

        if (!formData.name || !formData.city) {
            setErrorMessage("Please fill in all required fields.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (!validateForm()) return;

        setStatus("submitting");

        try {
            const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(formData),
            });

            // Since mode is no-cors, we assume success if no error is thrown
            setStatus("success");
            setFormData({
                name: "",
                phone: "",
                email: "",
                city: "",
                budget: "Express (Entry-level)",
                message: ""
            });

            // Optional: Close drawer after delay
            // setTimeout(onClose, 5000);

        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setErrorMessage("Network error. Please try again later.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-brand-burgundy/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-lg bg-brand-ivory z-[101] shadow-2xl p-12 overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-brand-burgundy hover:text-brand-gold transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-12">
                            <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain mb-6" />
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold block mb-4">
                                The Royal Prospectus
                            </span>
                            <h3 className="font-display text-3xl font-bold text-brand-burgundy mb-4">
                                Begin Your <br />
                                <span className="italic">Franchise Journey</span>
                            </h3>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 bg-brand-gold/10 border border-brand-gold text-brand-burgundy rounded-lg text-sm leading-relaxed"
                                >
                                    <p className="font-bold mb-2">Request Sent!</p>
                                    <p>A notification has been dispatched to us. Our team will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <p className="text-sm text-brand-burgundy/60 leading-relaxed font-serif">
                                    Please provide your credentials to receive our comprehensive investment portfolio and financial projections.
                                </p>
                            )}
                        </div>

                        {status !== "success" && (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy"
                                        placeholder="The Distinguished Partner"
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                <div className="group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy"
                                        placeholder="+91 98765 43210"
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                <div className="group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy"
                                        placeholder="partner@example.com"
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                <div className="group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Desired Location(the location you want to open the franchise)
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy"
                                        placeholder="Select Region"
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                {/* 2. MODIFIED: Added 'relative' and ChevronDown Icon */}
                                <div className="group relative">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Investment Capacity
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy appearance-none"
                                    >
                                        <option>The Express (Entry-level)</option>
                                        <option>The Standard (Mid-range)</option>
                                        <option>The Signature (Experienced)</option>
                                        <option>The Premium (Large Scale)</option>
                                    </select>
                                    <ChevronDown
                                        size={16}
                                        className="absolute right-0 bottom-3 text-brand-burgundy/40 pointer-events-none group-focus-within:text-brand-gold transition-colors"
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                <div className="group">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-burgundy/40 mb-2 block transition-colors group-focus-within:text-brand-gold">
                                        Message (Optional:- mention your experience in food industry)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-transparent border-b border-brand-gold/30 py-2 outline-none focus:border-brand-burgundy transition-all text-brand-burgundy resize-none"
                                        placeholder="Tell us about your vision..."
                                    />
                                    <div className="h-[1px] w-0 bg-brand-burgundy group-focus-within:w-full transition-all duration-500"></div>
                                </div>

                                {errorMessage && (
                                    <p className="text-red-500 text-xs font-bold tracking-wide">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full py-5 bg-brand-burgundy text-brand-ivory font-bold uppercase tracking-[0.3em] text-xs gold-border hover:bg-brand-gold hover:text-brand-burgundy transition-all duration-500 mt-8 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Alerting HQ...
                                        </>
                                    ) : (
                                        "Apply for Franchise"
                                    )}
                                </button>
                            </form>
                        )}

                        <div className="mt-16 pt-8 border-t border-brand-gold/10 text-center">
                            <p className="text-[10px] uppercase tracking-widest text-brand-burgundy/40">
                                A member of our team will reach out within 24 hours.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
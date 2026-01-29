"use client";

import React, { createContext, useContext, useState } from "react";
import { ProspectusDrawer } from "@/components/ProspectusDrawer";

interface ProspectusContextType {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (open: boolean) => void;
    openProspectus: () => void;
}

const ProspectusContext = createContext<ProspectusContextType | undefined>(undefined);

export const ProspectusProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openProspectus = () => setIsDrawerOpen(true);

    return (
        <ProspectusContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, openProspectus }}>
            {children}
            <ProspectusDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </ProspectusContext.Provider>
    );
};

export const useProspectus = () => {
    const context = useContext(ProspectusContext);
    if (!context) {
        throw new Error("useProspectus must be used within a ProspectusProvider");
    }
    return context;
};
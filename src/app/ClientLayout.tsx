'use client';

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Determine if the current path requires no sidebar
    const isAuthPage = pathname === "/auth/signin"; // Add more paths as needed

    if (isAuthPage) {
        return (
            <main className="w-full">
                <div className="p-5">{children}</div>
            </main>
        );
    }

    // Render with the sidebar for all other pages
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}

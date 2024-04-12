'use client'

import * as React from "react";
import { useRouter } from "next/navigation";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider navigate={router.push}> 
            {children}
        </NextUIProvider>
    );
}
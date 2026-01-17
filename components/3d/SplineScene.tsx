"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import Three.js component for lazy loading
const SplineScene = dynamic(() => import("@/components/3d/SplineSceneClient"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Loading 3D scene...</div>
        </div>
    ),
});

export default function ThreeScene() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SplineScene />
        </Suspense>
    );
}

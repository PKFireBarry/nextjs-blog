"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error("This page is not available if youre not logged in");
}

    if (!projectId || !dataset) {
        throw new Error(
            "Missing projectId or dataset. Check your sanity.json configuration"
        );
    }

    export const usePreview = definePreview({
        projectId,
        dataset,
        onPublicAccessOnly,
    });
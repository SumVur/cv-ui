import * as icons from "@media/generated";
import {NextRouter} from "next/router";

export type action = "location" | "open" | NextRouter;

export function actionOnIcon(action: action, link: string): () => any {
    switch (action) {
        case "location":
            return () => {
                window.location.href = link
            }
        case "open":
            return () => {
                window.open(link)?.focus()
            }
        default:
            return () => {
                action?.push(link)
            }
    }
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export interface ActionIconInterface {
    title: keyof typeof icons;
    link: string;
    action?: action;
}
import * as icons from "@media/generated";

type action = "location" | "open";

export function actionOnIcon(action: action, link: string) {
    switch (action) {
        case "location":
            window.location.href = link
            break;
        case "open":
            window.open(link)?.focus()
            break;
    }
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export interface ActionIconInterface {
    title: keyof typeof icons;
    link: string;
    action: action;
}
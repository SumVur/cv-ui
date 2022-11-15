import * as icons from "@media/generated/SocialIcons";

type action = "location" | "open";

export function actionOnSocialLink(action: action, link: string) {
    switch (action) {
        case "location":
            window.location.href = link
            break;
        case "open":
            window.open(link)?.focus()
            break;
    }
}

export interface SocialLink {
    name: keyof typeof icons;
    link: string;
    action: action;
}
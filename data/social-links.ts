import * as icons from "@media/generated/SocialIcons";

export interface SocialLink {
  name: keyof typeof icons;
  link: string;
}
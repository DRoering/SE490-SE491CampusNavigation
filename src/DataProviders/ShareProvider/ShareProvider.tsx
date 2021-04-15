import { Share } from "@capacitor/core";
import { Item } from "../../Reuseable";

export const ShareProvider = (shareItem: Item): Promise<void> =>
  Share.share({
    title: "Email Item...",
    text: "More item information found in the link",
    url: shareItem.webSite,
    dialogTitle: "Select Sharing Method",
  });

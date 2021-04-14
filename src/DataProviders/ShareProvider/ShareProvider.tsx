import { Share } from "@capacitor/core";
import { Item } from "../../Reuseable";

export const ShareProvider = (shareItem: Item) =>
  Share.share({
    title: "Email Item...",
    text: "More item information found in the link",
    url: shareItem.webSite,
    dialogTitle: "Select Sharing Method",
  }).then(
    (success) => console.log("Shared successfully"),
    (error) => console.log("Failed to share")
  );

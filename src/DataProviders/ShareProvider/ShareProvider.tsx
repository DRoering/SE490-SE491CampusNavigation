import { Share, ShareOptions } from "@capacitor/core";

export const ShareProvider = (options: ShareOptions): Promise<void> =>
  Share.share(options);

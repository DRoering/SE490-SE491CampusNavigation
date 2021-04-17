import { Plugins, ShareOptions } from "@capacitor/core";
const { Share } = Plugins;

export const ShareProvider = (options: ShareOptions): Promise<void> =>
  Share.share(options);

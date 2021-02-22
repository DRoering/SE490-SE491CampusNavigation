export const Strings = {
  apiUrl: "https://api.airtable.com/v0/appX1ffTov7j8hqP4/",
  apiKey: "keyMSO7kBfGHYMyXm",
  scsuUrl: "https://www.stcloudstate.edu",
  eventUrl: "https://huskiesconnect.stcloudstate.edu/image/",
};

const baseOptions = ["Alpha", "Distance"];

export const ItemSortOptions = {
  buildingOptions: [...baseOptions, "Open"],
  eventOptions: [...baseOptions, "Date"],
  lotOptions: [...baseOptions, "Open"],
  orgOptions: [...baseOptions],
};

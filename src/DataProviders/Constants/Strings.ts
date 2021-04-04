export const Strings = {
  apiUrl: "https://api.airtable.com/v0/appX1ffTov7j8hqP4/",
  apiKey: "keyMSO7kBfGHYMyXm",
  scsuUrl: "https://www.stcloudstate.edu",
  eventUrl: "https://huskiesconnect.stcloudstate.edu/image/",
  feedbackId: "template_ig98ogk",
  serviceId: "service_35tsdi2",
};

const baseOptions = ["Alpha", "Distance"];

export const ItemSortOptions = {
  buildingOptions: [...baseOptions],
  eventOptions: [...baseOptions, "Date"],
  lotOptions: [...baseOptions],
  orgOptions: [...baseOptions],
};

export const ItemFilterOptions = {
  buildingOptions: [...baseOptions, "Open"],
  // eventOptions: [...baseOptions, "Date"],
  // lotOptions: [...baseOptions, "Open"],
  // orgOptions: [...baseOptions],
  orgCategories: [
    "academic focus",
    "arts",
    "communication",
    "council advisory group",
    "fraternities and sororities",
    "graduate professional",
    "honoraries",
    "language and culture",
    "political and social action",
    "recreation and sports",
    "religious and spiritual",
    "service and advocacy",
    "special interest",
    "sport clubs",
    "student organization",
  ],
};

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

export const Information = [
  {
    key: 1,
    title: "SCSU",
    information:
      "At St. Cloud State, an education is about far more than an education. It will be an opportunity to explore ideas, seek out unique perspectives and embrace new challenges – all of which will help you help you unleash your true potential. You will make life-long memories on our 100-acre campus along the scenic Mississippi River. We have more than 200 undergraduate programs of study and more than 60 graduate programs, holding nearly every available national accreditation. Founded in 1869, St. Cloud State has evolved into a comprehensive university. We're on a mission to unleash ideas... unleash imagination, purpose and promise.",
    imgUrl:
      "https://www.stcloudstate.edu/_files/images/homepage-18/video-still.jpg",
  },
  {
    key: 2,
    title: "The App",
    information:
      "This application was created to help students and guests navigate the St. Cloud State University (SCSU) campus. Our goal is to provide information about buildings, parking lots, events, and organizations on campus.",
    imgUrl: "assets/images/about-app.png",
  },
  {
    key: 3,
    title: "The Team",
    information:
      "Our team is composed of Software Engineering students from SCSU. This application was created as part of our senior capstone project.",
    imgUrl: "assets/images/team-photo.jpg",
  },
];

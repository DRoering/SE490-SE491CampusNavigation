import moment from "moment";
import { Organization } from "./Organization";

const organization: Organization[] = [];

//const getOrganization = (): Organization => {
// return {
//   Officers: "officerName",
//   meetingTime: moment(),
//   communication: "communicationtype",
//  application: "fillAplication",
//   id: 2346,
//   name: "orgName",
//   coordinates: [8754, 790],
//  };
//};

for (let i = 1; i <= 12; i++) {
  organization.push({
    id: i,
    name: `Organization Name ${i}`,
    officers: "officerName",
    meetingTime: moment(),
    communication: "communicationtype",
    application: "fillAplication",
    coordinates: [8754, 790],
  });
}
export const useFakeOrganization = (): Organization[] => {
  return organization;
};

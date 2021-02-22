import emailjs, { init } from "emailjs-com";
import { Strings } from "../";
init("user_ZNEXkJRtpcnLiED5Emprm");

export const Emailer = {
  sendFeedback(fromEmail: string, fromName: string, message: string): void {
    {
      const templateParams = {
        from_email: fromEmail,
        from_name: fromName,
        message: message,
      };

      emailjs.send(Strings.serviceId, Strings.feedbackId, templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  },
  verifyEmail(e: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
  },
};

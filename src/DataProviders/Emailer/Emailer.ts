import emailjs, { init } from "emailjs-com";
import { Strings } from "../";
init("user_ZNEXkJRtpcnLiED5Emprm");

export const Emailer = {
  sendFeedback(
    fromEmail: string,
    fromName: string,
    message: string
  ): Promise<{ message: string }> {
    {
      const templateParams = {
        from_email: fromEmail,
        from_name: fromName,
        message: message,
      };

      return emailjs
        .send(Strings.serviceId, Strings.feedbackId, templateParams)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            return Promise.resolve({ message: response.text });
          },
          function (error) {
            console.log("FAILED...", error);
            return Promise.reject({ message: error });
          }
        );
    }
  },
  verifyEmail(e: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
  },
};

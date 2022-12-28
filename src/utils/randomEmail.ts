import { nanoid } from "nanoid";
import randomNumber from "./randomNumber";

const domains = [
  "gmail.com",
  "naver.com",
  "hanmail.net",
  "hotmail.com",
  "yahoo.com",
];

/**
 * Returns a random generated email address. User Id is totally random.
 * Email domain is one of the following: gmail, naver, hanmail, hotmail, yahoo
 *
 * @returns Random email address.
 */

const randomEmail = () => {
  const userId = nanoid(15);
  const domain = domains[randomNumber(0, domains.length - 1)];
  return `${userId}@${domain}`;
};

export default randomEmail;

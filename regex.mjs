import { SeedEmails } from './data/seed.mjs'

const regexValidators = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export function TestEmailRegex() {
    const emails = SeedEmails(10);
    const results = emails.map(email => regexValidators.email.test(email));
    const mapResults = Object.fromEntries(emails.map((key, idx) => [key, results[idx]]));
    console.log(mapResults);
}
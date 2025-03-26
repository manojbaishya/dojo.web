import { faker } from '@faker-js/faker';

/**
 * Generate email data
 *
 * @export
 * @param {number} count
 * @returns {Array<string>}
 */
export function SeedEmails(count) {
    const emails = [];
    for (let idx = 0; idx < count; idx++) {
        emails.push(faker.internet.email());
    }
    return emails;
}
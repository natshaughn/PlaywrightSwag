import { faker } from '@faker-js/faker';

export function generateCustomer() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postcode: faker.location.zipCode()
  };
}

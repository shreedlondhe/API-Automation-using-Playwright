import { faker } from '@faker-js/faker';

export interface User {
    name: string;
    age: number;
    city: string;
}

export function generateUser(): User {
    return {
        name: faker.person.fullName(),
        age: faker.number.int({ min: 18, max: 60 }),
        city: faker.location.city()
    };
}
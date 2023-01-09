import faker from "faker";

export default (req, res) => {
  const customers = [...new Array(10)].map((_, index) => {
    return {
      index,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      name: faker.name.findName(firstName, lastName),
      email: faker.internet.email(firstName, lastName),
      username: faker.internet.userName(firstName, lastName),
      city: faker.address.city(),
      phone: faker.phone.phoneNumber(),
      streetAddress: faker.address.streetAddress(),
      citystatezip: `${faker.address.city()} 
        ${faker.address.stateAbbr()} 
        ${faker.zipCode()}`,
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      avatar: faker.internet.avatar(),
    };
  });

  res.status(200).json(JSON.stringify(customers));
};

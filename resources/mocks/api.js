export const users = [
  {
    id: 1,
    name: 'Asur Bernardo',
  },
  {
    id: 2,
    name: 'David Gonzalez',
  },
  {
    id: 3,
    name: 'Javier Marti',
  },
  {
    id: 4,
    name: 'José García',
  },
  {
    id: 5,
    name: 'Bachir hassani',
  },
  {
    id: 6,
    name: 'Jorge lopez',
  },
  {
    id: 7,
    name: 'Alejandro',
  },
];

export const propertyTypes = [
  {
    id: 1,
    name: 'home',
  },
  {
    id: 2,
    name: 'garage',
  },
  {
    id: 3,
    name: 'office',
  },
  {
    id: 4,
    name: 'floor',
  },
  {
    id: 5,
    name: 'hotel',
  },
  {
    id: 6,
    name: 'study',
  },
  {
    id: 7,
    name: 'store',
  },
];
export const properties = [
  {
    id: 1,
    userId: 2,
    typeId: 1,
    name: 'Penthouse - General Peron 32',
    rentedFrom: new Date(2020, 1, 22),
    rentedTo: new Date(2020, 7, 7),
    rentalDuration: 0,
    currentDate: new Date(),
  },
  {
    id: 2,
    userId: 3,
    typeId: 1,
    name: 'Flat - Castellana 201',
    rentedFrom: new Date(2023, 1, 1),
    rentedTo: new Date(2023, 7, 1),
    currentDate: new Date(),

  },
  {
    id: 3,
    userId: 4,
    typeId: 2,
    name: 'Parking - Nuevos Ministerios',
    rentedFrom: new Date(2020, 3, 9),
    rentedTo: new Date(2020, 4, 7),
    currentDate: new Date(),

  },
  {
    id: 7,
    userId: 2,
    typeId: 2,
    name: 'Parking - Gran Via 56',
    rentedFrom: new Date(2021, 4, 21),
    rentedTo: new Date(2023, 6, 1),
    currentDate: new Date(),

  },
  {
    id: 4,
    userId: 1,
    typeId: 3,
    name: 'Office - Ibiza Metro',
    rentedFrom: new Date(2020, 5, 22),
    rentedTo: new Date(2023, 5, 30),
    currentDate: new Date(),

  },
  {
    id: 5,
    userId: 1,
    typeId: 3,
    name: 'Office - Plaza Castilla',
    rentedFrom: new Date(2023, 2, 2),
    rentedTo: new Date(2023, 4, 9),
    currentDate: new Date(),

  },
  {
    id: 6,
    userId: 2,
    typeId: 3,
    name: 'Office - Puente Segovia',
    rentedFrom: new Date(2021, 2, 2),
    rentedTo: new Date(2022, 3, 3),
    currentDate: new Date(),

  },
];

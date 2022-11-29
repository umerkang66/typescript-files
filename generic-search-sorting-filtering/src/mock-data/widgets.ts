import { IWidget } from '../interfaces';

export const widgets: IWidget[] = [
  {
    title: 'I am title 1',
    description: 'cool description 1',
    id: 1,
    rating: 10,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isSpecialCard: false,
  },
  {
    title: 'Title 2',
    description: 'cool description 2',
    id: 2,
    rating: 7,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isSpecialCard: true,
  },
  {
    title: 'Title Three',
    description: 'another description',
    id: 3,
    rating: 4,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isSpecialCard: false,
  },
  {
    title: 'Title 4: I love generics',
    description: 'generics are awesome!',
    id: 4,
    rating: 6,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isSpecialCard: false,
  },
  {
    title: 'We also love TypeScript',
    description: 'Yes, TypeScript is also very cool',
    id: 5,
    rating: 10,
    created: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    isSpecialCard: false,
  },
];

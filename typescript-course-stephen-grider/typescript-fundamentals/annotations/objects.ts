interface Profile {
  age: number;
  name: string;
  coords: {
    lat: number;
    lng: number;
  };
  setAge: (age: number) => number;
}

const profile: Profile = {
  name: 'umer',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number) {
    return (this.age = age);
  },
};

const { age, setAge }: Profile = profile;

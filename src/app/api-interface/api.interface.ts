export interface Person {
  name: string;
  age: number;
  data: PersonData[];
}

export interface PersonData {
  skin: string;
  hair: string;
}

export interface TestInterface {
  name: string;
  getName(): string;
}

export interface ProductData {
  category: string,
  price: number,
  thumbnail: string,
  images: string[],
  title: string,
  id: number
}
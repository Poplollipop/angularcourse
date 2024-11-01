
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



export interface ObjectResult {
  statusCode: number;
  data: ResultData;
  message: string;
  success: boolean;
}

export interface ResultData {
  page: number,
  limit: number,
  totalPages: number,
  previousPage: boolean,
  nextPage: boolean,
  totalItems: number,
  currentPageItems: number,
  data: any[];
}

export interface ProductData {
  category: string,
  price: number,
  thumbnail: string,
  images: string[],
  title: string,
  id: number
}



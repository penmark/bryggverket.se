export interface CloudinaryImage {
  width?: number;
  height?: number;
  format?: string;
  url?: string;
  secure_url: string;
}

export interface Brewer {
  email: string;
  name: {first: string, last: string}
  image: CloudinaryImage;
}

export interface Beer {
  name: string;
  slug: string;
  type: string;
  image: CloudinaryImage;
  description: string;
  abv: number;
  ibu?: number;
  systembolagetId?: string;
}


export interface ImageDefinition {
  height?: number;
  width?: number;
  url: string;
}

export interface NewsEntry {
  caption: {text: string};
  images: {
    low_resolution?: ImageDefinition,
    standard_resolution?: ImageDefinition,
    thumbnail?: ImageDefinition
  }
  link: string;
}

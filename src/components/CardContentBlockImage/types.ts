export interface CardContentBlockImageProps {
  title: string;
  content: Array<cards>;
  id: string;
}

interface cards {
  name:  string;
  quote: string;
  title:  string;
  icon:  string;
  about: string;
}

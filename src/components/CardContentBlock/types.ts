export interface CardContentBlockProps {
  title: string;
  content: Array<cards>;
  id: string;
}

interface cards {
  title:  string;
  content:  string;
  icon:  string;
}

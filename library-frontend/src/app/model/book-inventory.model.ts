export interface BookInventory {
  id: number;
  bookId: number;
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
  active: boolean;
  description: string;
  quantity: number;
}

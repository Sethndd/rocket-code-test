export interface BookHistory {
  loanId: number;
  bookId: number;
  studentId: number;
  studentName: string;
  loanDate: string;
  dueDate: string;
  returnDate: string | null;
  status: string;
}

export interface StudentHistory {
  loanId: number;
  bookId: number;
  studentId: number;
  title: string;
  loanDate: string;
  dueDate: string;
  returnDate: string | null;
  status: string;
}

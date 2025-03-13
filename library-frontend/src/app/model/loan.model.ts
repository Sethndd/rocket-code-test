export interface Loan {
  loanId: number;
  bookId: number;
  studentId: number;
  studentName: string;
  title: string;
  loanDate: string;
  dueDate: string;
  returnDate: string | null;
  status: string;
}

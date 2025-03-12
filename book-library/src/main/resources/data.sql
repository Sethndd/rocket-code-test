-- Insertando libros en Books
INSERT INTO Books (title, author, publisher, publication_year, description) VALUES
('The Catcher in the Rye', 'J.D. Salinger', 'Little, Brown and Company', 1951, 'A story about teenage rebellion and identity.'),
('To Kill a Mockingbird', 'Harper Lee', 'J.B. Lippincott & Co.', 1960, 'A novel about racism and injustice in the Deep South.'),
('1984', 'George Orwell', 'Secker & Warburg', 1949, 'A dystopian novel about a totalitarian regime.'),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Charles Scribner''s Sons', 1925, 'A critique of the American Dream in the 1920s.'),
('Pride and Prejudice', 'Jane Austen', 'T. Egerton', 1813, 'A romantic novel about love and social class.'),
('Dune', 'Frank Herbert', 'Chilton Books', 1965, 'A science fiction novel set in a distant future.'),
('The Lord of the Rings', 'J.R.R. Tolkien', 'George Allen & Unwin', 1954, 'A fantasy epic about a quest to destroy a powerful ring.'),
('Don Quixote', 'Miguel de Cervantes', 'Francisco de Robles', 1605, 'A satirical novel about a delusional knight and his squire.'),
('Moby-Dick', 'Herman Melville', 'Richard Bentley', 1851, 'A novel about a vengeful captain and a giant whale.'),
('War and Peace', 'Leo Tolstoy', 'The Russian Messenger', 1869, 'A historical novel set during the Napoleonic Wars.');

-- Insertando inventario en Inventory
INSERT INTO Inventory (book_id, quantity) VALUES
(1, 5),
(3, 4),
(4, 2);

-- Insertando estudiantes en Students
INSERT INTO Students (first_name, last_name, email, enrollment_number, phone_number) VALUES
('Alice', 'Johnson', 'alice.johnson@example.com', 'ENR001', '555-1234'),
('Bob', 'Smith', 'bob.smith@example.com', 'ENR002', '555-5678'),
('Charlie', 'Brown', 'charlie.brown@example.com', 'ENR003', '555-9101'),
('David', 'Wilson', 'david.wilson@example.com', 'ENR004', '555-1122');

-- Insertando préstamos en Loans
INSERT INTO Loans (book_id, student_id, loan_date, due_date, return_date) VALUES
(1, 1, '2025-03-01', '2025-03-15', NULL),
(1, 2, '2025-03-01', '2025-03-15', NULL),
(2, 2, '2025-02-20', '2025-03-05', '2025-03-02'),
(3, 3, '2025-02-25', '2025-03-10', NULL),
(4, 4, '2025-03-02', '2025-03-16', NULL);

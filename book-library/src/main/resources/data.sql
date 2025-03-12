-- Insertando libros en Books
INSERT INTO Books (title, author, publisher, publication_year, isbn, description) VALUES
('The Catcher in the Rye', 'J.D. Salinger', 'Little, Brown and Company', 1951, '9780316769488', 'A story about teenage rebellion and identity.'),
('To Kill a Mockingbird', 'Harper Lee', 'J.B. Lippincott & Co.', 1960, '9780061120084', 'A novel about racism and injustice in the Deep South.'),
('1984', 'George Orwell', 'Secker & Warburg', 1949, '9780451524935', 'A dystopian novel about a totalitarian regime.'),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Charles Scribner''s Sons', 1925, '9780743273565', 'A critique of the American Dream in the 1920s.');

-- Insertando inventario en Inventory
INSERT INTO Inventory (book_id, quantity) VALUES
(1, 5),
(3, 4),
(4, 2);

-- Insertando estudiantes en Students
INSERT INTO Students (first_name, last_name, email, enrollment_number, phone) VALUES
('Alice', 'Johnson', 'alice.johnson@example.com', 'ENR001', '555-1234'),
('Bob', 'Smith', 'bob.smith@example.com', 'ENR002', '555-5678'),
('Charlie', 'Brown', 'charlie.brown@example.com', 'ENR003', '555-9101'),
('David', 'Wilson', 'david.wilson@example.com', 'ENR004', '555-1122');

-- Insertando préstamos en Loans
INSERT INTO Loans (book_id, student_id, loan_date, due_date, return_date) VALUES
(1, 1, '2025-03-01', '2025-03-15', NULL),
(2, 2, '2025-02-20', '2025-03-05', '2025-03-02'),
(3, 3, '2025-02-25', '2025-03-10', NULL),
(4, 4, '2025-03-02', '2025-03-16', NULL);

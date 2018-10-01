CREATE TABLE IF NOT EXISTS payment(id INTEGER PRIMARY KEY AUTOINCREMENT,invoiced TEXT,code TEXT,description TEXT, amount TEXT, payor TEXT, paymentDate TEXT);
INSERT INTO payment(invoiced, code, description, amount, payor, paymentDate) VALUES ('Simon', 'Ionic', '4', 'test', 'test', 'test' );

-- ============================================================
-- Farm2Table — Supabase (PostgreSQL) Schema
-- Converted from MySQL dump (dump.sql)
-- Run this in Supabase SQL Editor to create all tables + seed data
-- ============================================================

-- ─────────────────────────────────────────────
-- TABLE: users
-- ─────────────────────────────────────────────
CREATE TABLE users (
  user_id   SERIAL PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  phone     VARCHAR(15),
  email     VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role      VARCHAR(10) NOT NULL CHECK (role IN ('ADMIN','FARMER','CONSUMER')),
  status    VARCHAR(20) NOT NULL,
  photo_url VARCHAR(200),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (user_id, name, phone, email, password_hash, role, status, photo_url, created_at) VALUES
(1,'Ramesh Kumar','9876543210','ramesh@gmail.com','hash1','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(2,'Suresh Patel','9876543211','suresh@gmail.com','hash2','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(3,'Baldev Singh','9876543212','baldev@gmail.com','hash3','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(4,'Arjun Reddy','9876543213','arjun@gmail.com','hash4','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(5,'Amit Sharma','9876543214','amit@gmail.com','hash5','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(6,'Priya Verma','9876543215','priya@gmail.com','hash6','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(7,'Rahul Das','9876543216','rahul@gmail.com','hash7','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(8,'Neha Gupta','9876543217','neha@gmail.com','hash8','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(9,'Karan Mehta','9876543218','karan@gmail.com','hash9','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(10,'Sneha Iyer','9876543219','sneha@gmail.com','hash10','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01+00'),
(11,'Anita Sharma','9876543226','anita@gmail.com','hash17','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16+00'),
(12,'Rohit Jain','9876543227','rohit@gmail.com','hash18','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16+00'),
(13,'Meera Nair','9876543228','meera@gmail.com','hash19','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16+00'),
(14,'Aditya Roy','9876543229','aditya@gmail.com','hash20','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16+00');

-- Sync sequence after manual inserts
SELECT setval('users_user_id_seq', (SELECT MAX(user_id) FROM users));


-- ─────────────────────────────────────────────
-- TABLE: addresses
-- ─────────────────────────────────────────────
CREATE TABLE addresses (
  address_id SERIAL PRIMARY KEY,
  user_id    INT REFERENCES users(user_id),
  type       VARCHAR(20) NOT NULL,
  line1      VARCHAR(100) NOT NULL,
  street     VARCHAR(100),
  apartment  VARCHAR(50),
  city       VARCHAR(50),
  state      VARCHAR(50),
  pincode    VARCHAR(10)
);

CREATE INDEX idx_addresses_user_id ON addresses(user_id);

INSERT INTO addresses (address_id, user_id, type, line1, street, apartment, city, state, pincode) VALUES
(1,5,'HOME','Flat 101','MG Road',NULL,'Delhi','Delhi','110001'),
(2,6,'HOME','Flat 202','Brigade Road',NULL,'Bengaluru','Karnataka','560001'),
(3,7,'HOME','House 33','Salt Lake',NULL,'Kolkata','WB','700001'),
(4,8,'HOME','Flat 5','Marine Drive',NULL,'Mumbai','Maharashtra','400001'),
(5,9,'HOME','Street 10','T Nagar',NULL,'Chennai','Tamil Nadu','600001'),
(6,10,'HOME','Sector 21','Sector Road',NULL,'Chandigarh','Chandigarh','160001'),
(7,5,'WORK','Connaught Place','CP',NULL,'Delhi','Delhi','110001'),
(8,6,'WORK','Whitefield','ITPL',NULL,'Bengaluru','Karnataka','560066'),
(9,7,'WORK','Park Street','Central',NULL,'Kolkata','WB','700016'),
(10,8,'WORK','Andheri','West',NULL,'Mumbai','Maharashtra','400053');

SELECT setval('addresses_address_id_seq', (SELECT MAX(address_id) FROM addresses));


-- ─────────────────────────────────────────────
-- TABLE: delivery_partners
-- ─────────────────────────────────────────────
CREATE TABLE delivery_partners (
  partner_id SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  phone      VARCHAR(15),
  email      VARCHAR(100),
  status     VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO delivery_partners (partner_id, name, phone, email, status, created_at) VALUES
(1,'Delhivery','9000000001','support@delhivery.com','ACTIVE','2026-02-04 17:44:47+00'),
(2,'BlueDart','9000000002','support@bluedart.com','ACTIVE','2026-02-04 17:44:47+00'),
(3,'EcomExpress','9000000003','support@ecom.com','ACTIVE','2026-02-04 17:44:47+00'),
(4,'Shadowfax','9000000004','support@shadowfax.com','ACTIVE','2026-02-04 17:44:47+00'),
(5,'Dunzo','9000000005','support@dunzo.com','ACTIVE','2026-02-04 17:44:47+00'),
(6,'IndiaPost','9000000006','support@indiapost.gov','ACTIVE','2026-02-04 17:44:47+00'),
(7,'XpressBees','9000000007','support@xpress.com','ACTIVE','2026-02-04 17:44:47+00'),
(8,'DTDC','9000000008','support@dtdc.com','ACTIVE','2026-02-04 17:44:47+00'),
(9,'Amazon Logistics','9000000009','support@amazon.com','ACTIVE','2026-02-04 17:44:47+00'),
(10,'Flipkart Logistics','9000000010','support@flipkart.com','ACTIVE','2026-02-04 17:44:47+00');

SELECT setval('delivery_partners_partner_id_seq', (SELECT MAX(partner_id) FROM delivery_partners));


-- ─────────────────────────────────────────────
-- TABLE: farmer_profiles
-- ─────────────────────────────────────────────
CREATE TABLE farmer_profiles (
  farmer_id                  INT PRIMARY KEY REFERENCES users(user_id),
  farmer_name                VARCHAR(100) NOT NULL,
  nearest_warehouse_location VARCHAR(200),
  farm_size                  NUMERIC(10,2),
  verified                   BOOLEAN,
  verification_status        VARCHAR(50)
);

INSERT INTO farmer_profiles (farmer_id, farmer_name, nearest_warehouse_location, farm_size, verified, verification_status) VALUES
(1,'Ramesh Farms','Jaipur',5.50,TRUE,'VERIFIED'),
(2,'Patel Agro','Anand',8.20,TRUE,'VERIFIED'),
(3,'Singh Farms','Ludhiana',6.10,TRUE,'VERIFIED'),
(4,'Reddy Farms','Hyderabad',7.00,TRUE,'VERIFIED'),
(5,'Yadav Farms','Lucknow',4.80,TRUE,'VERIFIED'),
(6,'Gowda Agro','Mysuru',9.00,TRUE,'VERIFIED'),
(7,'Chauhan Fields','Indore',5.90,TRUE,'VERIFIED'),
(8,'Naik Farms','Goa',3.50,TRUE,'VERIFIED'),
(9,'Pawar Agro','Pune',6.80,TRUE,'VERIFIED'),
(10,'Patil Farms','Kolhapur',7.20,TRUE,'VERIFIED');


-- ─────────────────────────────────────────────
-- TABLE: consumer_profiles
-- ─────────────────────────────────────────────
CREATE TABLE consumer_profiles (
  consumer_id INT PRIMARY KEY REFERENCES users(user_id),
  timestamps  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO consumer_profiles (consumer_id, timestamps) VALUES
(5,'2026-02-04 17:43:20+00'),
(6,'2026-02-04 17:43:20+00'),
(7,'2026-02-04 17:43:20+00'),
(8,'2026-02-04 17:43:20+00'),
(9,'2026-02-04 17:43:20+00'),
(10,'2026-02-04 17:43:20+00'),
(11,'2026-02-04 17:43:20+00'),
(12,'2026-02-04 17:43:20+00'),
(13,'2026-02-04 17:43:20+00'),
(14,'2026-02-04 17:43:20+00');


-- ─────────────────────────────────────────────
-- TABLE: products
-- ─────────────────────────────────────────────
CREATE TABLE products (
  product_id       SERIAL PRIMARY KEY,
  farmer_id        INT REFERENCES farmer_profiles(farmer_id),
  name             VARCHAR(100) NOT NULL,
  description      TEXT,
  category         VARCHAR(50) NOT NULL,
  unit             VARCHAR(20) NOT NULL,
  price            NUMERIC(10,2) NOT NULL,
  stock_qty        INT NOT NULL,
  harvest_date     DATE,
  location         VARCHAR(100),
  rating           NUMERIC(3,2),
  primary_image_url VARCHAR(200),
  status           VARCHAR(20) NOT NULL,
  timestamps       TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_farmer_id ON products(farmer_id);

INSERT INTO products (product_id, farmer_id, name, description, category, unit, price, stock_qty, harvest_date, location, rating, primary_image_url, status, timestamps) VALUES
(1,1,'Organic Wheat',NULL,'Grain','kg',30.00,500,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(2,2,'Basmati Rice',NULL,'Grain','kg',80.00,300,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(3,3,'Fresh Tomatoes',NULL,'Vegetable','kg',25.00,200,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(4,4,'Green Chillies',NULL,'Vegetable','kg',40.00,150,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(5,1,'Onions',NULL,'Vegetable','kg',20.00,500,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(6,2,'Potatoes',NULL,'Vegetable','kg',18.00,600,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(7,3,'Mustard Oil',NULL,'Oil','ltr',160.00,100,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(8,4,'Fresh Mangoes',NULL,'Fruit','kg',120.00,250,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(9,1,'Spinach',NULL,'Leafy','kg',15.00,120,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00'),
(10,2,'Carrots',NULL,'Vegetable','kg',22.00,180,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31+00');

SELECT setval('products_product_id_seq', (SELECT MAX(product_id) FROM products));


-- ─────────────────────────────────────────────
-- TABLE: orders
-- ─────────────────────────────────────────────
CREATE TABLE orders (
  order_id              SERIAL PRIMARY KEY,
  consumer_id           INT REFERENCES consumer_profiles(consumer_id),
  order_total           NUMERIC(10,2) NOT NULL,
  discount_total        NUMERIC(10,2),
  tax_total             NUMERIC(10,2),
  delivery_fee_total    NUMERIC(10,2),
  status                VARCHAR(20) NOT NULL,
  payment_method        VARCHAR(50),
  payment_status        VARCHAR(20),
  customer_name         VARCHAR(100),
  delivery_address_id   INT REFERENCES addresses(address_id),
  delivery_address_text VARCHAR(200)
);

CREATE INDEX idx_orders_consumer_id ON orders(consumer_id);
CREATE INDEX idx_orders_delivery_address_id ON orders(delivery_address_id);

INSERT INTO orders (order_id, consumer_id, order_total, discount_total, tax_total, delivery_fee_total, status, payment_method, payment_status, customer_name, delivery_address_id, delivery_address_text) VALUES
(1,5,500.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),
(2,6,700.00,NULL,NULL,NULL,'PLACED','CARD','PAID',NULL,NULL,NULL),
(3,7,450.00,NULL,NULL,NULL,'DELIVERED','COD','PAID',NULL,NULL,NULL),
(4,8,600.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),
(5,9,350.00,NULL,NULL,NULL,'DELIVERED','CARD','PAID',NULL,NULL,NULL),
(6,10,900.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),
(7,5,200.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),
(8,6,300.00,NULL,NULL,NULL,'PLACED','CARD','PAID',NULL,NULL,NULL),
(9,7,800.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),
(10,8,250.00,NULL,NULL,NULL,'DELIVERED','COD','PAID',NULL,NULL,NULL);

SELECT setval('orders_order_id_seq', (SELECT MAX(order_id) FROM orders));


-- ─────────────────────────────────────────────
-- TABLE: order_farmers
-- ─────────────────────────────────────────────
CREATE TABLE order_farmers (
  order_farmer_id SERIAL PRIMARY KEY,
  order_id        INT REFERENCES orders(order_id),
  farmer_id       INT REFERENCES farmer_profiles(farmer_id),
  sub_total       NUMERIC(10,2) NOT NULL,
  discount_total  NUMERIC(10,2),
  tax_total       NUMERIC(10,2),
  delivery_fee    NUMERIC(10,2),
  grand_total     NUMERIC(10,2),
  status          VARCHAR(20) NOT NULL,
  timestamps      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_farmers_order_id ON order_farmers(order_id);
CREATE INDEX idx_order_farmers_farmer_id ON order_farmers(farmer_id);

INSERT INTO order_farmers (order_farmer_id, order_id, farmer_id, sub_total, discount_total, tax_total, delivery_fee, grand_total, status, timestamps) VALUES
(1,1,1,1200.00,50.00,60.00,40.00,1250.00,'CONFIRMED','2026-02-04 17:45:32+00'),
(2,2,2,900.00,20.00,45.00,30.00,955.00,'CONFIRMED','2026-02-04 17:45:32+00'),
(3,3,3,700.00,0.00,35.00,25.00,760.00,'SHIPPED','2026-02-04 17:45:32+00'),
(4,4,4,1500.00,100.00,75.00,40.00,1515.00,'DELIVERED','2026-02-04 17:45:32+00'),
(5,5,1,500.00,0.00,25.00,20.00,545.00,'CONFIRMED','2026-02-04 17:45:32+00'),
(6,6,2,650.00,10.00,32.00,20.00,692.00,'CONFIRMED','2026-02-04 17:45:32+00'),
(7,7,3,1100.00,50.00,55.00,35.00,1140.00,'SHIPPED','2026-02-04 17:45:32+00'),
(8,8,4,800.00,20.00,40.00,25.00,845.00,'DELIVERED','2026-02-04 17:45:32+00'),
(9,9,1,950.00,30.00,48.00,30.00,998.00,'CONFIRMED','2026-02-04 17:45:32+00'),
(10,10,2,1200.00,60.00,60.00,40.00,1240.00,'CONFIRMED','2026-02-04 17:45:32+00');

SELECT setval('order_farmers_order_farmer_id_seq', (SELECT MAX(order_farmer_id) FROM order_farmers));


-- ─────────────────────────────────────────────
-- TABLE: order_items
-- ─────────────────────────────────────────────
CREATE TABLE order_items (
  order_item_id         SERIAL PRIMARY KEY,
  order_farmer_id       INT REFERENCES order_farmers(order_farmer_id),
  product_id            INT REFERENCES products(product_id),
  variant_id            INT,
  quantity              INT NOT NULL,
  unit_price_at_purchase NUMERIC(10,2),
  line_total            NUMERIC(10,2)
);

CREATE INDEX idx_order_items_order_farmer_id ON order_items(order_farmer_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

INSERT INTO order_items (order_item_id, order_farmer_id, product_id, variant_id, quantity, unit_price_at_purchase, line_total) VALUES
(1,1,1,NULL,10,120.00,1200.00),
(2,2,2,NULL,5,180.00,900.00),
(3,3,3,NULL,7,100.00,700.00),
(4,4,4,NULL,10,150.00,1500.00),
(5,5,5,NULL,5,100.00,500.00),
(6,6,6,NULL,5,130.00,650.00),
(7,7,7,NULL,10,110.00,1100.00),
(8,8,8,NULL,8,100.00,800.00),
(9,9,9,NULL,5,190.00,950.00),
(10,10,10,NULL,10,120.00,1200.00);

SELECT setval('order_items_order_item_id_seq', (SELECT MAX(order_item_id) FROM order_items));


-- ─────────────────────────────────────────────
-- TABLE: payments
-- ─────────────────────────────────────────────
CREATE TABLE payments (
  payment_id SERIAL PRIMARY KEY,
  order_id   INT REFERENCES orders(order_id),
  status     VARCHAR(20) NOT NULL,
  method     VARCHAR(50),
  paid_at    TIMESTAMPTZ,
  timestamps TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_order_id ON payments(order_id);

INSERT INTO payments (payment_id, order_id, status, method, paid_at, timestamps) VALUES
(1,1,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42+00'),
(2,2,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42+00'),
(3,3,'SUCCESS','COD',NULL,'2026-02-04 17:44:42+00'),
(4,4,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42+00'),
(5,5,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42+00'),
(6,6,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42+00'),
(7,7,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42+00'),
(8,8,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42+00'),
(9,9,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42+00'),
(10,10,'SUCCESS','COD',NULL,'2026-02-04 17:44:42+00');

SELECT setval('payments_payment_id_seq', (SELECT MAX(payment_id) FROM payments));


-- ─────────────────────────────────────────────
-- TABLE: deliveries
-- ─────────────────────────────────────────────
CREATE TABLE deliveries (
  delivery_id     SERIAL PRIMARY KEY,
  order_farmer_id INT REFERENCES order_farmers(order_farmer_id),
  scheduled_slot  TIMESTAMPTZ,
  partner_id      INT REFERENCES delivery_partners(partner_id),
  status          VARCHAR(20) NOT NULL,
  dispatched_at   TIMESTAMPTZ,
  delivered_at    TIMESTAMPTZ
);

CREATE INDEX idx_deliveries_order_farmer_id ON deliveries(order_farmer_id);
CREATE INDEX idx_deliveries_partner_id ON deliveries(partner_id);

INSERT INTO deliveries (delivery_id, order_farmer_id, scheduled_slot, partner_id, status, dispatched_at, delivered_at) VALUES
(1,1,'2026-02-04 17:46:03+00',1,'OUT_FOR_DELIVERY',NULL,NULL),
(2,2,'2026-02-04 17:46:03+00',2,'OUT_FOR_DELIVERY',NULL,NULL),
(3,3,'2026-02-04 17:46:03+00',3,'DELIVERED',NULL,NULL),
(4,4,'2026-02-04 17:46:03+00',1,'DELIVERED',NULL,NULL),
(5,5,'2026-02-04 17:46:03+00',2,'OUT_FOR_DELIVERY',NULL,NULL),
(6,6,'2026-02-04 17:46:03+00',3,'OUT_FOR_DELIVERY',NULL,NULL),
(7,7,'2026-02-04 17:46:03+00',1,'SHIPPED',NULL,NULL),
(8,8,'2026-02-04 17:46:03+00',2,'DELIVERED',NULL,NULL),
(9,9,'2026-02-04 17:46:03+00',3,'SHIPPED',NULL,NULL),
(10,10,'2026-02-04 17:46:03+00',1,'OUT_FOR_DELIVERY',NULL,NULL);

SELECT setval('deliveries_delivery_id_seq', (SELECT MAX(delivery_id) FROM deliveries));


-- ─────────────────────────────────────────────
-- TABLE: delivery_events
-- ─────────────────────────────────────────────
CREATE TABLE delivery_events (
  event_id      SERIAL PRIMARY KEY,
  delivery_id   INT REFERENCES deliveries(delivery_id),
  status        VARCHAR(20) NOT NULL,
  event_time    TIMESTAMPTZ,
  location_text VARCHAR(200),
  notes         TEXT
);

CREATE INDEX idx_delivery_events_delivery_id ON delivery_events(delivery_id);

INSERT INTO delivery_events (event_id, delivery_id, status, event_time, location_text, notes) VALUES
(1,1,'Picked Up','2026-02-04 17:46:08+00','Jaipur',NULL),
(2,2,'Picked Up','2026-02-04 17:46:08+00','Anand',NULL),
(3,3,'Delivered','2026-02-04 17:46:08+00','Ludhiana',NULL),
(4,4,'Delivered','2026-02-04 17:46:08+00','Hyderabad',NULL),
(5,5,'Packed','2026-02-04 17:46:08+00','Jaipur',NULL),
(6,6,'Packed','2026-02-04 17:46:08+00','Anand',NULL),
(7,7,'In Transit','2026-02-04 17:46:08+00','Punjab',NULL),
(8,8,'Delivered','2026-02-04 17:46:08+00','Hyderabad',NULL),
(9,9,'In Transit','2026-02-04 17:46:08+00','Rajasthan',NULL),
(10,10,'Picked Up','2026-02-04 17:46:08+00','Gujarat',NULL);

SELECT setval('delivery_events_event_id_seq', (SELECT MAX(event_id) FROM delivery_events));


-- ─────────────────────────────────────────────
-- TABLE: cart_items
-- ─────────────────────────────────────────────
CREATE TABLE cart_items (
  cart_item_id        SERIAL PRIMARY KEY,
  user_id             INT REFERENCES users(user_id),
  product_id          INT REFERENCES products(product_id),
  variant_id          INT,
  quantity            INT NOT NULL,
  unit_price_snapshot NUMERIC(10,2)
);

CREATE INDEX idx_cart_items_user_id ON cart_items(user_id);
CREATE INDEX idx_cart_items_product_id ON cart_items(product_id);

INSERT INTO cart_items (cart_item_id, user_id, product_id, variant_id, quantity, unit_price_snapshot) VALUES
(1,5,1,NULL,2,30.00),
(2,6,2,NULL,1,80.00),
(3,7,3,NULL,3,25.00),
(4,8,4,NULL,2,40.00),
(5,9,5,NULL,4,20.00),
(6,10,6,NULL,2,18.00),
(7,5,7,NULL,1,160.00),
(8,6,8,NULL,2,120.00),
(9,7,9,NULL,3,15.00),
(10,8,10,NULL,2,22.00);

SELECT setval('cart_items_cart_item_id_seq', (SELECT MAX(cart_item_id) FROM cart_items));


-- ─────────────────────────────────────────────
-- TABLE: conversations
-- ─────────────────────────────────────────────
CREATE TABLE conversations (
  conversation_id SERIAL PRIMARY KEY,
  order_id        INT REFERENCES orders(order_id),
  consumer_id     INT REFERENCES consumer_profiles(consumer_id),
  farmer_id       INT REFERENCES farmer_profiles(farmer_id),
  status          VARCHAR(20) NOT NULL
);

CREATE INDEX idx_conversations_order_id ON conversations(order_id);
CREATE INDEX idx_conversations_consumer_id ON conversations(consumer_id);
CREATE INDEX idx_conversations_farmer_id ON conversations(farmer_id);

INSERT INTO conversations (conversation_id, order_id, consumer_id, farmer_id, status) VALUES
(1,1,5,1,'OPEN'),(2,2,6,2,'OPEN'),(3,3,7,3,'OPEN'),(4,4,8,4,'OPEN'),(5,5,9,1,'OPEN'),
(6,6,10,2,'OPEN'),(7,7,5,3,'OPEN'),(8,8,6,4,'OPEN'),(9,9,7,1,'OPEN'),(10,10,8,2,'OPEN');

SELECT setval('conversations_conversation_id_seq', (SELECT MAX(conversation_id) FROM conversations));


-- ─────────────────────────────────────────────
-- TABLE: messages
-- ─────────────────────────────────────────────
CREATE TABLE messages (
  message_id      SERIAL PRIMARY KEY,
  conversation_id INT REFERENCES conversations(conversation_id),
  sender_user_id  INT REFERENCES users(user_id),
  message_type    VARCHAR(20) NOT NULL,
  body            TEXT,
  media_url       VARCHAR(200),
  created_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  read_at         TIMESTAMPTZ
);

CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_sender_user_id ON messages(sender_user_id);

INSERT INTO messages (message_id, conversation_id, sender_user_id, message_type, body, media_url, created_at, read_at) VALUES
(1,1,5,'TEXT','Order shipped?',NULL,'2026-02-04 18:16:49+00',NULL),
(2,1,1,'TEXT','Yes, arriving soon',NULL,'2026-02-04 18:16:49+00',NULL),
(3,2,6,'TEXT','Delivery update?',NULL,'2026-02-04 18:16:49+00',NULL),
(4,2,2,'TEXT','Out for delivery',NULL,'2026-02-04 18:16:49+00',NULL),
(5,3,7,'TEXT','Received thanks',NULL,'2026-02-04 18:16:49+00',NULL),
(6,4,8,'TEXT','Quality good',NULL,'2026-02-04 18:16:49+00',NULL),
(7,5,9,'TEXT','Invoice needed',NULL,'2026-02-04 18:16:49+00',NULL),
(8,6,10,'TEXT','Payment done',NULL,'2026-02-04 18:16:49+00',NULL),
(9,7,5,'TEXT','Satisfied',NULL,'2026-02-04 18:16:49+00',NULL),
(10,8,6,'TEXT','Will order again',NULL,'2026-02-04 18:16:49+00',NULL);

SELECT setval('messages_message_id_seq', (SELECT MAX(message_id) FROM messages));


-- ─────────────────────────────────────────────
-- TABLE: reviews
-- ─────────────────────────────────────────────
CREATE TABLE reviews (
  review_id       SERIAL PRIMARY KEY,
  order_id        INT REFERENCES orders(order_id),
  order_farmer_id INT REFERENCES order_farmers(order_farmer_id),
  consumer_id     INT REFERENCES consumer_profiles(consumer_id),
  farmer_id       INT REFERENCES farmer_profiles(farmer_id),
  consumer_name   VARCHAR(100),
  consumer_avatar VARCHAR(200),
  rating          NUMERIC(3,2) NOT NULL,
  comment         TEXT,
  created_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_order_id ON reviews(order_id);
CREATE INDEX idx_reviews_order_farmer_id ON reviews(order_farmer_id);
CREATE INDEX idx_reviews_consumer_id ON reviews(consumer_id);
CREATE INDEX idx_reviews_farmer_id ON reviews(farmer_id);

INSERT INTO reviews (review_id, order_id, order_farmer_id, consumer_id, farmer_id, consumer_name, consumer_avatar, rating, comment, created_at) VALUES
(1,1,1,5,1,'Amit Sharma',NULL,4.50,'Fresh vegetables','2026-02-04 17:46:14+00'),
(2,2,2,6,2,'Priya Verma',NULL,4.00,'Good quality','2026-02-04 17:46:14+00'),
(3,3,3,7,3,'Rahul Das',NULL,5.00,'Excellent grains','2026-02-04 17:46:14+00'),
(4,4,4,8,4,'Neha Gupta',NULL,4.50,'Timely delivery','2026-02-04 17:46:14+00'),
(5,5,5,9,1,'Karan Mehta',NULL,4.00,'Nice packing','2026-02-04 17:46:14+00'),
(6,6,6,10,2,'Sneha Iyer',NULL,5.00,'Loved quality','2026-02-04 17:46:14+00'),
(7,7,7,5,3,'Amit Sharma',NULL,4.00,'Good service','2026-02-04 17:46:14+00'),
(8,8,8,6,4,'Priya Verma',NULL,5.00,'Great taste','2026-02-04 17:46:14+00'),
(9,9,9,7,1,'Rahul Das',NULL,4.20,'Satisfied','2026-02-04 17:46:14+00'),
(10,10,10,8,2,'Neha Gupta',NULL,4.80,'Excellent','2026-02-04 17:46:14+00');

SELECT setval('reviews_review_id_seq', (SELECT MAX(review_id) FROM reviews));


-- ─────────────────────────────────────────────
-- TABLE: dispute_tickets
-- ─────────────────────────────────────────────
CREATE TABLE dispute_tickets (
  dispute_id  SERIAL PRIMARY KEY,
  order_id    INT REFERENCES orders(order_id),
  raised_by   INT REFERENCES users(user_id),
  reason      TEXT,
  status      VARCHAR(20) NOT NULL,
  admin_notes TEXT,
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_dispute_tickets_order_id ON dispute_tickets(order_id);
CREATE INDEX idx_dispute_tickets_raised_by ON dispute_tickets(raised_by);

INSERT INTO dispute_tickets (dispute_id, order_id, raised_by, reason, status, admin_notes, created_at) VALUES
(1,1,5,'Damaged product','OPEN',NULL,'2026-02-04 17:47:00+00'),
(2,2,6,'Late delivery','OPEN',NULL,'2026-02-04 17:47:00+00'),
(3,3,7,'Wrong item','RESOLVED',NULL,'2026-02-04 17:47:00+00'),
(4,4,8,'Missing item','OPEN',NULL,'2026-02-04 17:47:00+00'),
(5,5,9,'Poor quality','OPEN',NULL,'2026-02-04 17:47:00+00'),
(6,6,10,'Refund delay','OPEN',NULL,'2026-02-04 17:47:00+00'),
(7,7,5,'Quantity issue','RESOLVED',NULL,'2026-02-04 17:47:00+00'),
(8,8,6,'Packaging issue','OPEN',NULL,'2026-02-04 17:47:00+00'),
(9,9,7,'Delay','OPEN',NULL,'2026-02-04 17:47:00+00'),
(10,10,8,'Expired product','OPEN',NULL,'2026-02-04 17:47:00+00');

SELECT setval('dispute_tickets_dispute_id_seq', (SELECT MAX(dispute_id) FROM dispute_tickets));


-- ─────────────────────────────────────────────
-- TABLE: notifications
-- ─────────────────────────────────────────────
CREATE TABLE notifications (
  notification_id SERIAL PRIMARY KEY,
  user_id         INT REFERENCES users(user_id),
  type            VARCHAR(20) NOT NULL,
  title           VARCHAR(100),
  message         TEXT,
  created_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  read_flag       BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);

INSERT INTO notifications (notification_id, user_id, type, title, message, created_at, read_flag) VALUES
(1,5,'ORDER','Order Placed','Your order is confirmed','2026-02-04 17:46:50+00',FALSE),
(2,6,'PAYMENT','Payment Success','Payment received','2026-02-04 17:46:50+00',FALSE),
(3,7,'DELIVERY','Shipped','Order shipped','2026-02-04 17:46:50+00',FALSE),
(4,8,'DELIVERY','Delivered','Order delivered','2026-02-04 17:46:50+00',FALSE),
(5,9,'ORDER','Packed','Order packed','2026-02-04 17:46:50+00',FALSE),
(6,10,'ORDER','Processing','Order processing','2026-02-04 17:46:50+00',FALSE),
(7,5,'OFFER','Discount','New offer available','2026-02-04 17:46:50+00',FALSE),
(8,6,'ORDER','Update','Delivery update','2026-02-04 17:46:50+00',FALSE),
(9,7,'PAYMENT','Refund','Refund processed','2026-02-04 17:46:50+00',FALSE),
(10,8,'OFFER','Sale','Weekend sale live','2026-02-04 17:46:50+00',FALSE);

SELECT setval('notifications_notification_id_seq', (SELECT MAX(notification_id) FROM notifications));


-- ─────────────────────────────────────────────
-- TABLE: analytics_consumer
-- ─────────────────────────────────────────────
CREATE TABLE analytics_consumer (
  analytics_id  SERIAL PRIMARY KEY,
  consumer_id   INT REFERENCES consumer_profiles(consumer_id),
  order_history TEXT,
  total_spend   NUMERIC(10,2),
  total_order   INT
);

CREATE INDEX idx_analytics_consumer_consumer_id ON analytics_consumer(consumer_id);

INSERT INTO analytics_consumer (analytics_id, consumer_id, order_history, total_spend, total_order) VALUES
(1,5,NULL,12000.00,15),(2,6,NULL,15000.00,20),(3,7,NULL,8000.00,10),(4,8,NULL,20000.00,25),
(5,9,NULL,9500.00,12),(6,10,NULL,17500.00,22),(7,11,NULL,6000.00,8),(8,12,NULL,9000.00,11),
(9,13,NULL,11000.00,14),(10,14,NULL,13000.00,16);

SELECT setval('analytics_consumer_analytics_id_seq', (SELECT MAX(analytics_id) FROM analytics_consumer));


-- ─────────────────────────────────────────────
-- TABLE: analytics_farmer
-- ─────────────────────────────────────────────
CREATE TABLE analytics_farmer (
  analytics_id    SERIAL PRIMARY KEY,
  farmer_id       INT REFERENCES farmer_profiles(farmer_id),
  product_history TEXT,
  total_earn      NUMERIC(10,2),
  total_order     INT,
  timestamp       TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_farmer_farmer_id ON analytics_farmer(farmer_id);

INSERT INTO analytics_farmer (analytics_id, farmer_id, product_history, total_earn, total_order, timestamp) VALUES
(1,1,NULL,50000.00,120,'2026-02-04 17:47:11+00'),
(2,2,NULL,45000.00,100,'2026-02-04 17:47:11+00'),
(3,3,NULL,38000.00,95,'2026-02-04 17:47:11+00'),
(4,4,NULL,60000.00,150,'2026-02-04 17:47:11+00'),
(5,1,NULL,52000.00,125,'2026-02-04 17:47:11+00'),
(6,2,NULL,47000.00,110,'2026-02-04 17:47:11+00'),
(7,3,NULL,39000.00,98,'2026-02-04 17:47:11+00'),
(8,4,NULL,61000.00,155,'2026-02-04 17:47:11+00'),
(9,1,NULL,54000.00,130,'2026-02-04 17:47:11+00'),
(10,2,NULL,49000.00,115,'2026-02-04 17:47:11+00');

SELECT setval('analytics_farmer_analytics_id_seq', (SELECT MAX(analytics_id) FROM analytics_farmer));


-- ─────────────────────────────────────────────
-- TABLE: organic_certificates
-- ─────────────────────────────────────────────
CREATE TABLE organic_certificates (
  cert_id      SERIAL PRIMARY KEY,
  farmer_id    INT REFERENCES farmer_profiles(farmer_id),
  cert_number  VARCHAR(50),
  issuing_body VARCHAR(100),
  issue_date   DATE,
  expiry_date  DATE,
  status       VARCHAR(20) NOT NULL
);

CREATE INDEX idx_organic_certificates_farmer_id ON organic_certificates(farmer_id);

INSERT INTO organic_certificates (cert_id, farmer_id, cert_number, issuing_body, issue_date, expiry_date, status) VALUES
(1,1,'ORG1001','APEDA','2024-01-01','2027-01-01','VALID'),
(2,2,'ORG1002','APEDA','2024-02-01','2027-02-01','VALID'),
(3,3,'ORG1003','FSSAI','2024-03-01','2027-03-01','VALID'),
(4,4,'ORG1004','FSSAI','2024-01-15','2027-01-15','VALID'),
(5,1,'ORG1005','APEDA','2024-04-01','2027-04-01','VALID'),
(6,2,'ORG1006','APEDA','2024-05-01','2027-05-01','VALID'),
(7,3,'ORG1007','FSSAI','2024-06-01','2027-06-01','VALID'),
(8,4,'ORG1008','FSSAI','2024-07-01','2027-07-01','VALID'),
(9,1,'ORG1009','APEDA','2024-08-01','2027-08-01','VALID'),
(10,2,'ORG1010','APEDA','2024-09-01','2027-09-01','VALID');

SELECT setval('organic_certificates_cert_id_seq', (SELECT MAX(cert_id) FROM organic_certificates));


-- ─────────────────────────────────────────────
-- TABLE: crop_advisories
-- ─────────────────────────────────────────────
CREATE TABLE crop_advisories (
  advisory_id SERIAL PRIMARY KEY,
  title       VARCHAR(100),
  crop_tag    VARCHAR(50),
  season_tag  VARCHAR(50),
  region_tag  VARCHAR(50),
  content     TEXT,
  created_by  INT REFERENCES users(user_id),
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_crop_advisories_created_by ON crop_advisories(created_by);

INSERT INTO crop_advisories (advisory_id, title, crop_tag, season_tag, region_tag, content, created_by, created_at) VALUES
(1,'Wheat irrigation tips','WHEAT',NULL,'Punjab','Use timely irrigation',1,'2026-02-04 17:47:17+00'),
(2,'Rice pest control','RICE',NULL,'WB','Use organic sprays',2,'2026-02-04 17:47:17+00'),
(3,'Cotton care','COTTON',NULL,'Gujarat','Monitor pests',3,'2026-02-04 17:47:17+00'),
(4,'Tomato farming','TOMATO',NULL,'Karnataka','Improve soil quality',4,'2026-02-04 17:47:17+00'),
(5,'Onion storage','ONION',NULL,'Maharashtra','Use dry storage',1,'2026-02-04 17:47:17+00'),
(6,'Sugarcane tips','SUGARCANE',NULL,'UP','Proper fertilization',2,'2026-02-04 17:47:17+00'),
(7,'Potato yield','POTATO',NULL,'Bihar','Use quality seeds',3,'2026-02-04 17:47:17+00'),
(8,'Maize crop care','MAIZE',NULL,'MP','Avoid water logging',4,'2026-02-04 17:47:17+00'),
(9,'Chilli farming','CHILLI',NULL,'AP','Control insects',1,'2026-02-04 17:47:17+00'),
(10,'Pulse crop care','PULSES',NULL,'Rajasthan','Balanced nutrients',2,'2026-02-04 17:47:17+00');

SELECT setval('crop_advisories_advisory_id_seq', (SELECT MAX(advisory_id) FROM crop_advisories));


-- ─────────────────────────────────────────────
-- TABLE: favorite_items
-- ─────────────────────────────────────────────
CREATE TABLE favorite_items (
  favorite_item_id SERIAL PRIMARY KEY,
  user_id          INT REFERENCES users(user_id),
  product_id       INT REFERENCES products(product_id),
  variant_id       INT,
  created_at       TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_favorite_items_user_id ON favorite_items(user_id);
CREATE INDEX idx_favorite_items_product_id ON favorite_items(product_id);

INSERT INTO favorite_items (favorite_item_id, user_id, product_id, variant_id, created_at) VALUES
(1,5,1,NULL,'2026-02-04 18:16:33+00'),
(2,6,2,NULL,'2026-02-04 18:16:33+00'),
(3,7,3,NULL,'2026-02-04 18:16:33+00'),
(4,8,4,NULL,'2026-02-04 18:16:33+00'),
(5,9,5,NULL,'2026-02-04 18:16:33+00'),
(6,10,6,NULL,'2026-02-04 18:16:33+00'),
(7,5,8,NULL,'2026-02-04 18:16:33+00'),
(8,6,9,NULL,'2026-02-04 18:16:33+00'),
(9,7,10,NULL,'2026-02-04 18:16:33+00'),
(10,8,7,NULL,'2026-02-04 18:16:33+00');

SELECT setval('favorite_items_favorite_item_id_seq', (SELECT MAX(favorite_item_id) FROM favorite_items));


-- ─────────────────────────────────────────────
-- TABLE: government_schemes
-- ─────────────────────────────────────────────
CREATE TABLE government_schemes (
  scheme_id         SERIAL PRIMARY KEY,
  title             VARCHAR(100),
  eligibility       TEXT,
  benefits          TEXT,
  application_steps TEXT,
  lastdate_apply    DATE
);

INSERT INTO government_schemes (scheme_id, title, eligibility, benefits, application_steps, lastdate_apply) VALUES
(1,'PM-KISAN','All small farmers','6000/year','Online apply','2026-12-31'),
(2,'Soil Health Card','Farmers','Soil testing','Visit office','2026-12-31'),
(3,'Crop Insurance','Farmers','Loss coverage','Apply online','2026-12-31'),
(4,'KCC Loan','Farmers','Low interest loan','Bank apply','2026-12-31'),
(5,'Organic Farming','Organic farmers','Subsidy','Dept apply','2026-12-31'),
(6,'Irrigation Scheme','Farmers','Water support','Online','2026-12-31'),
(7,'Seed Subsidy','Farmers','Seed support','Local office','2026-12-31'),
(8,'Storage Scheme','Farmers','Warehouse subsidy','Apply portal','2026-12-31'),
(9,'Farm Mechanization','Farmers','Equipment subsidy','Apply online','2026-12-31'),
(10,'Solar Pump Scheme','Farmers','Solar pump subsidy','Dept apply','2026-12-31');

SELECT setval('government_schemes_scheme_id_seq', (SELECT MAX(scheme_id) FROM government_schemes));


-- ─────────────────────────────────────────────
-- TABLE: user_private_bank_details
-- ─────────────────────────────────────────────
CREATE TABLE user_private_bank_details (
  user_id              INT PRIMARY KEY REFERENCES users(user_id),
  account_holder_name  VARCHAR(100),
  account_number       VARCHAR(20),
  ifsc_code            VARCHAR(20),
  bank_name            VARCHAR(100),
  updated_at           TIMESTAMPTZ
);

INSERT INTO user_private_bank_details (user_id, account_holder_name, account_number, ifsc_code, bank_name, updated_at) VALUES
(5,'Amit Sharma','12345678901','SBIN0000123','State Bank of India',NULL),
(6,'Priya Verma','12345678902','HDFC0000456','HDFC Bank',NULL),
(7,'Rahul Das','12345678903','ICIC0000789','ICICI Bank',NULL),
(8,'Neha Gupta','12345678904','AXIS0000111','Axis Bank',NULL),
(9,'Karan Mehta','12345678905','PUNB0000222','Punjab National Bank',NULL),
(10,'Sneha Iyer','12345678906','SBIN0000333','State Bank of India',NULL),
(11,'Anita Sharma','12345678907','HDFC0000444','HDFC Bank',NULL),
(12,'Rohit Jain','12345678908','ICIC0000555','ICICI Bank',NULL),
(13,'Meera Nair','12345678909','AXIS0000666','Axis Bank',NULL),
(14,'Aditya Roy','12345678910','PUNB0000777','Punjab National Bank',NULL);

-- ============================================================
-- END OF SCHEMA
-- ============================================================

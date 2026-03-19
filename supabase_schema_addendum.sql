-- ============================================================
-- Farm2Table — Supabase Schema ADDENDUM
-- Run this AFTER supabase_schema.sql
-- Contains additional tables matching all UI screens
-- ============================================================


-- ─────────────────────────────────────────────
-- TABLE: farmer_wallets
-- Source: WithdrawalScreen, FarmerWithdrawalHistory
-- Tracks a farmer's earnings balance
-- ─────────────────────────────────────────────
CREATE TABLE farmer_wallets (
  wallet_id       SERIAL PRIMARY KEY,
  farmer_id       INT UNIQUE REFERENCES farmer_profiles(farmer_id),
  available_balance NUMERIC(12,2) NOT NULL DEFAULT 0,
  pending_balance   NUMERIC(12,2) NOT NULL DEFAULT 0,
  total_earned      NUMERIC(12,2) NOT NULL DEFAULT 0,
  next_payout_date  DATE,
  updated_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO farmer_wallets (farmer_id, available_balance, pending_balance, total_earned, next_payout_date) VALUES
(1, 50000.00, 12500.00, 142500.00, '2026-12-25'),
(2, 45000.00, 8000.00, 110000.00, '2026-12-25'),
(3, 38000.00, 5000.00, 95000.00,  '2026-12-25'),
(4, 60000.00, 0.00,    150000.00, '2026-12-25');


-- ─────────────────────────────────────────────
-- TABLE: withdrawal_requests
-- Source: WithdrawalScreen, FarmerWithdrawalHistory
-- Fields: amount, fee, status, method, bank acc
-- ─────────────────────────────────────────────
CREATE TABLE withdrawal_requests (
  withdrawal_id        SERIAL PRIMARY KEY,
  farmer_id            INT REFERENCES farmer_profiles(farmer_id),
  amount               NUMERIC(12,2) NOT NULL,
  platform_fee         NUMERIC(10,2) DEFAULT 0,
  net_amount           NUMERIC(12,2),
  status               VARCHAR(20) NOT NULL CHECK (status IN ('PENDING','PROCESSING','COMPLETED','FAILED')),
  method               VARCHAR(50),              -- 'Direct Bank', 'IMPS Transfer', 'UPI Payout'
  account_holder_name  VARCHAR(100),
  account_number       VARCHAR(20),
  ifsc_code            VARCHAR(20),
  account_last4        VARCHAR(4),
  reference_id         VARCHAR(50) UNIQUE,
  requested_at         TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  processed_at         TIMESTAMPTZ
);

CREATE INDEX idx_withdrawal_requests_farmer_id ON withdrawal_requests(farmer_id);

INSERT INTO withdrawal_requests (farmer_id, amount, platform_fee, net_amount, status, method, account_holder_name, account_number, ifsc_code, account_last4, reference_id, requested_at, processed_at) VALUES
(1, 15000.00, 150.00, 14850.00, 'COMPLETED', 'Direct Bank',  'Ramesh Kumar', '12345678904521', 'SBIN0000123', '4521', 'REF-99281', '2026-12-18 09:00:00+00', '2026-12-18 14:30:00+00'),
(1, 12500.00, 125.00, 12375.00, 'PROCESSING','IMPS Transfer','Ramesh Kumar', '12345678904521', 'SBIN0000123', '4521', 'REF-99275', '2026-12-19 04:45:00+00', NULL),
(1, 8000.00,  80.00,  7920.00,  'COMPLETED', 'UPI Payout',   'Ramesh Kumar', '12345678909876', 'SBIN0000333', '9876', 'REF-99260', '2026-12-10 05:30:00+00', '2026-12-10 11:00:00+00'),
(1, 2500.00,  25.00,  2475.00,  'FAILED',    'Direct Bank',  'Ramesh Kumar', '12345678904521', 'SBIN0000123', '4521', 'REF-99255', '2026-12-05 03:50:00+00', '2026-12-05 09:20:00+00');


-- ─────────────────────────────────────────────
-- TABLE: coupons
-- Source: DiscountScreen
-- Fields: code, description, discount_type, value
-- ─────────────────────────────────────────────
CREATE TABLE coupons (
  coupon_id      SERIAL PRIMARY KEY,
  code           VARCHAR(30) NOT NULL UNIQUE,
  description    TEXT,
  discount_type  VARCHAR(20) NOT NULL CHECK (discount_type IN ('PERCENT','FLAT','FREE_DELIVERY')),
  discount_value NUMERIC(10,2),
  min_order_amount NUMERIC(10,2),
  max_uses       INT,
  uses_count     INT DEFAULT 0,
  valid_from     DATE,
  valid_until    DATE,
  is_active      BOOLEAN DEFAULT TRUE,
  created_at     TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO coupons (code, description, discount_type, discount_value, min_order_amount, max_uses, is_active, valid_from, valid_until) VALUES
('WELCOME50',  'Get 50% off on your first order above ₹500', 'PERCENT',       50.00, 500.00, 1000, TRUE, '2026-01-01', '2026-12-31'),
('FREESHIP',   'Free delivery on all orders this weekend',    'FREE_DELIVERY',  0.00,    0.00, 5000, TRUE, '2026-01-01', '2026-12-31'),
('VEGGIE20',   'Flat 20% off on all fresh vegetables',        'PERCENT',       20.00,    0.00, 2000, TRUE, '2026-01-01', '2026-12-31'),
('NEWUSER100', 'Flat ₹100 off for new sign-ups',              'FLAT',         100.00, 299.00,  500, TRUE, '2026-01-01', '2026-12-31');


-- ─────────────────────────────────────────────
-- TABLE: consumer_coupon_usages
-- Source: DiscountScreen (applied coupon tracking)
-- ─────────────────────────────────────────────
CREATE TABLE consumer_coupon_usages (
  usage_id    SERIAL PRIMARY KEY,
  consumer_id INT REFERENCES consumer_profiles(consumer_id),
  coupon_id   INT REFERENCES coupons(coupon_id),
  order_id    INT REFERENCES orders(order_id),
  used_at     TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_coupon_usages_consumer_id ON consumer_coupon_usages(consumer_id);


-- ─────────────────────────────────────────────
-- TABLE: consumer_payment_cards
-- Source: ConsumerAddCardScreen, ConsumerPaymentMethodsScreen
-- Stores saved card details (tokenised — no real PANs in prod)
-- ─────────────────────────────────────────────
CREATE TABLE consumer_payment_cards (
  card_id             SERIAL PRIMARY KEY,
  consumer_id         INT REFERENCES consumer_profiles(consumer_id),
  card_holder_name    VARCHAR(100) NOT NULL,
  card_last4          VARCHAR(4) NOT NULL,
  card_type           VARCHAR(20),          -- 'VISA', 'MASTERCARD', 'RUPAY'
  expiry_month        SMALLINT,
  expiry_year         SMALLINT,
  payment_token       VARCHAR(255),         -- gateway token replacing real PAN
  is_default          BOOLEAN DEFAULT FALSE,
  created_at          TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payment_cards_consumer_id ON consumer_payment_cards(consumer_id);

INSERT INTO consumer_payment_cards (consumer_id, card_holder_name, card_last4, card_type, expiry_month, expiry_year, is_default) VALUES
(5, 'Amit Sharma',  '4521', 'VISA',       12, 2027, TRUE),
(6, 'Priya Verma',  '9876', 'MASTERCARD', 06, 2026, TRUE),
(7, 'Rahul Das',    '1234', 'RUPAY',      09, 2028, TRUE);


-- ─────────────────────────────────────────────
-- TABLE: loyalty_points
-- Source: LoyaltyPointsScreen
-- ─────────────────────────────────────────────
CREATE TABLE loyalty_points (
  loyalty_id      SERIAL PRIMARY KEY,
  consumer_id     INT UNIQUE REFERENCES consumer_profiles(consumer_id),
  total_points    INT NOT NULL DEFAULT 0,
  redeemed_points INT NOT NULL DEFAULT 0,
  updated_at      TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO loyalty_points (consumer_id, total_points, redeemed_points) VALUES
(5,  120, 0),
(6,  250, 50),
(7,  85,  0),
(8,  310, 100),
(9,  50,  0),
(10, 175, 25),
(11, 40,  0),
(12, 95,  0),
(13, 130, 0),
(14, 200, 0);


-- ─────────────────────────────────────────────
-- TABLE: loyalty_rewards
-- Source: LoyaltyPointsScreen (redeem rewards list)
-- ─────────────────────────────────────────────
CREATE TABLE loyalty_rewards (
  reward_id           SERIAL PRIMARY KEY,
  title               VARCHAR(100) NOT NULL,
  description         TEXT,
  points_required     INT NOT NULL,
  reward_type         VARCHAR(30),     -- 'COUPON', 'FREE_DELIVERY', 'CASHBACK'
  reward_value        NUMERIC(10,2),
  is_active           BOOLEAN DEFAULT TRUE
);

INSERT INTO loyalty_rewards (title, description, points_required, reward_type, reward_value, is_active) VALUES
('₹50 Coupon',       'Discount voucher worth ₹50',  200, 'COUPON',        50.00, TRUE),
('Free Delivery',    'One free delivery on any order', 100, 'FREE_DELIVERY', 0.00, TRUE),
('₹100 Cashback',   'Cashback to wallet',           350, 'CASHBACK',     100.00, TRUE);


-- ─────────────────────────────────────────────
-- TABLE: loyalty_transactions
-- Source: LoyaltyPointsScreen (point earn/spend history)
-- ─────────────────────────────────────────────
CREATE TABLE loyalty_transactions (
  txn_id      SERIAL PRIMARY KEY,
  consumer_id INT REFERENCES consumer_profiles(consumer_id),
  points      INT NOT NULL,             -- positive = earned, negative = redeemed
  txn_type    VARCHAR(20) NOT NULL CHECK (txn_type IN ('EARNED','REDEEMED')),
  reference   VARCHAR(100),             -- order_id or reward_id as reference
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_loyalty_txns_consumer_id ON loyalty_transactions(consumer_id);

INSERT INTO loyalty_transactions (consumer_id, points, txn_type, reference, created_at) VALUES
(5,  120, 'EARNED',   'order_1',  '2026-02-04 18:00:00+00'),
(6,  300, 'EARNED',   'order_2',  '2026-02-04 18:00:00+00'),
(6,  -50, 'REDEEMED', 'reward_2', '2026-02-05 10:00:00+00');


-- ─────────────────────────────────────────────
-- TABLE: product_media
-- Source: AddItemScreen (photo/video upload per product)
-- ─────────────────────────────────────────────
CREATE TABLE product_media (
  media_id    SERIAL PRIMARY KEY,
  product_id  INT REFERENCES products(product_id),
  media_type  VARCHAR(10) NOT NULL CHECK (media_type IN ('IMAGE','VIDEO')),
  url         VARCHAR(300) NOT NULL,
  sort_order  SMALLINT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_media_product_id ON product_media(product_id);


-- ─────────────────────────────────────────────
-- TABLE: product_fulfillment_options
-- Source: AddItemScreen (Pickup / Delivery toggles)
-- ─────────────────────────────────────────────
CREATE TABLE product_fulfillment_options (
  option_id   SERIAL PRIMARY KEY,
  product_id  INT UNIQUE REFERENCES products(product_id),
  pickup      BOOLEAN DEFAULT TRUE,
  delivery    BOOLEAN DEFAULT FALSE,
  updated_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO product_fulfillment_options (product_id, pickup, delivery) VALUES
(1,  TRUE,  FALSE),
(2,  TRUE,  TRUE),
(3,  TRUE,  FALSE),
(4,  TRUE,  TRUE),
(5,  TRUE,  FALSE),
(6,  FALSE, TRUE),
(7,  TRUE,  TRUE),
(8,  FALSE, TRUE),
(9,  TRUE,  FALSE),
(10, TRUE,  TRUE);


-- ─────────────────────────────────────────────
-- TABLE: otp_logs
-- Source: FarmerOtpScreen, ForgotPasswordScreen, VerificationScreen
-- Stores OTP requests (not actual OTP in prod — use hashed)
-- ─────────────────────────────────────────────
CREATE TABLE otp_logs (
  otp_id      SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(user_id),
  phone       VARCHAR(15),
  email       VARCHAR(100),
  otp_hash    VARCHAR(255),             -- store bcrypt hash, not plaintext
  purpose     VARCHAR(30) NOT NULL CHECK (purpose IN ('SIGNUP','LOGIN','RESET_PASSWORD','FARMER_VERIFY')),
  expires_at  TIMESTAMPTZ NOT NULL,
  verified_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_otp_logs_user_id ON otp_logs(user_id);


-- ─────────────────────────────────────────────
-- TABLE: farmer_daily_stats
-- Source: FarmerTodayStatsScreen, FarmerMonthlyStatsScreen
-- Per-day aggregated stats per farmer
-- ─────────────────────────────────────────────
CREATE TABLE farmer_daily_stats (
  stat_id           SERIAL PRIMARY KEY,
  farmer_id         INT REFERENCES farmer_profiles(farmer_id),
  stat_date         DATE NOT NULL,
  revenue           NUMERIC(12,2) DEFAULT 0,
  orders_count      INT DEFAULT 0,
  avg_processing_hr NUMERIC(4,1),
  top_product_id    INT REFERENCES products(product_id),
  growth_percent    NUMERIC(5,2),
  created_at        TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (farmer_id, stat_date)
);

CREATE INDEX idx_farmer_daily_stats_farmer_id ON farmer_daily_stats(farmer_id);
CREATE INDEX idx_farmer_daily_stats_date ON farmer_daily_stats(stat_date);

INSERT INTO farmer_daily_stats (farmer_id, stat_date, revenue, orders_count, avg_processing_hr, top_product_id, growth_percent) VALUES
(1, '2026-03-19', 1200.00, 24, 4.2, 3, 12.00),
(1, '2026-03-18', 1080.00, 19, 3.8, 3, 8.00),
(2, '2026-03-19', 950.00,  18, 5.0, 2, 5.00),
(3, '2026-03-19', 700.00,  12, 6.0, 6, -2.00),
(4, '2026-03-19', 1500.00, 30, 3.5, 4, 20.00);


-- ─────────────────────────────────────────────
-- TABLE: farmer_hourly_stats
-- Source: FarmerTodayStatsScreen (hourly bar chart)
-- ─────────────────────────────────────────────
CREATE TABLE farmer_hourly_stats (
  hourly_stat_id SERIAL PRIMARY KEY,
  farmer_id      INT REFERENCES farmer_profiles(farmer_id),
  stat_date      DATE NOT NULL,
  hour_slot      SMALLINT NOT NULL,   -- 8, 10, 12, 14, 16, 18 (24-hr)
  revenue        NUMERIC(10,2) DEFAULT 0,
  orders_count   INT DEFAULT 0
);

CREATE INDEX idx_farmer_hourly_farmer_date ON farmer_hourly_stats(farmer_id, stat_date);

INSERT INTO farmer_hourly_stats (farmer_id, stat_date, hour_slot, revenue, orders_count) VALUES
(1, '2026-03-19', 8,  200.00, 3),
(1, '2026-03-19', 10, 450.00, 7),
(1, '2026-03-19', 12, 300.00, 5),
(1, '2026-03-19', 14, 600.00, 9),
(1, '2026-03-19', 16, 150.00, 2),
(1, '2026-03-19', 18, 400.00, 6);


-- ─────────────────────────────────────────────
-- TABLE: user_sessions
-- Source: SignInScreen / SignUpScreen (auth state)
-- Tracks active/expired sessions per user
-- ─────────────────────────────────────────────
CREATE TABLE user_sessions (
  session_id  SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(user_id),
  device_info VARCHAR(200),
  ip_address  VARCHAR(45),
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  expires_at  TIMESTAMPTZ,
  revoked_at  TIMESTAMPTZ
);

CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);


-- ─────────────────────────────────────────────
-- TABLE: help_tickets
-- Source: HelpCenter screen
-- ─────────────────────────────────────────────
CREATE TABLE help_tickets (
  ticket_id   SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(user_id),
  subject     VARCHAR(200),
  body        TEXT,
  status      VARCHAR(20) NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN','IN_PROGRESS','RESOLVED','CLOSED')),
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  resolved_at TIMESTAMPTZ
);

CREATE INDEX idx_help_tickets_user_id ON help_tickets(user_id);


-- ─────────────────────────────────────────────
-- TABLE: user_preferences
-- Source: AccessibilityScreen, LanguageScreen, ConsumerSettingsScreen
-- ─────────────────────────────────────────────
CREATE TABLE user_preferences (
  pref_id           SERIAL PRIMARY KEY,
  user_id           INT UNIQUE REFERENCES users(user_id),
  language          VARCHAR(10) DEFAULT 'en',
  font_size         VARCHAR(20) DEFAULT 'medium',  -- 'small','medium','large'
  high_contrast     BOOLEAN DEFAULT FALSE,
  screen_reader     BOOLEAN DEFAULT FALSE,
  push_notifications BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  updated_at        TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user_preferences (user_id, language) VALUES
(1,'en'),(2,'en'),(3,'hi'),(4,'en'),
(5,'en'),(6,'hi'),(7,'en'),(8,'en'),
(9,'ta'),(10,'kn'),(11,'en'),(12,'en'),
(13,'ml'),(14,'en');


-- ─────────────────────────────────────────────
-- TABLE: market_prices
-- Source: FarmerOrderHistoryScreen (price vs market comparison)
-- Reference daily market rates per crop/category
-- ─────────────────────────────────────────────
CREATE TABLE market_prices (
  price_id    SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  category    VARCHAR(50),
  market_price NUMERIC(10,2) NOT NULL,   -- price per unit (kg/ltr)
  unit        VARCHAR(20) DEFAULT 'kg',
  price_date  DATE NOT NULL,
  region      VARCHAR(100),
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_market_prices_product_date ON market_prices(product_name, price_date);

INSERT INTO market_prices (product_name, category, market_price, unit, price_date, region) VALUES
('Red Tomato',  'Vegetable', 82.00, 'kg', '2026-03-19', 'National'),
('Onion Red',   'Vegetable', 32.00, 'kg', '2026-03-19', 'National'),
('Potato',      'Vegetable', 20.00, 'kg', '2026-03-19', 'National'),
('Organic Wheat','Grain',    28.00, 'kg', '2026-03-19', 'National'),
('Basmati Rice','Grain',     75.00, 'kg', '2026-03-19', 'National'),
('Spinach',     'Leafy',     12.00, 'kg', '2026-03-19', 'National'),
('Mustard Oil', 'Oil',      150.00, 'ltr','2026-03-19', 'National'),
('Fresh Mangoes','Fruit',   110.00, 'kg', '2026-03-19', 'National');


-- ─────────────────────────────────────────────
-- TABLE: order_tracking_events
-- Source: OrderTrackingScreen, DeliveryStatusScreen
-- Step-by-step timeline (richer than delivery_events)
-- ─────────────────────────────────────────────
CREATE TABLE order_tracking_events (
  event_id    SERIAL PRIMARY KEY,
  order_id    INT REFERENCES orders(order_id),
  delivery_id INT REFERENCES deliveries(delivery_id),
  step_label  VARCHAR(100) NOT NULL,   -- 'Order Placed', 'Packed', 'Picked Up', etc.
  step_icon   VARCHAR(50),             -- icon key for frontend
  is_completed BOOLEAN DEFAULT FALSE,
  event_time  TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_tracking_order_id ON order_tracking_events(order_id);

INSERT INTO order_tracking_events (order_id, delivery_id, step_label, is_completed, event_time) VALUES
(1, 1, 'Order Placed',    TRUE, '2026-02-04 10:00:00+00'),
(1, 1, 'Packed',          TRUE, '2026-02-04 11:30:00+00'),
(1, 1, 'Picked Up',       TRUE, '2026-02-04 13:00:00+00'),
(1, 1, 'Out for Delivery',TRUE, '2026-02-04 15:00:00+00'),
(1, 1, 'Delivered',      FALSE, NULL),
(3, 3, 'Order Placed',    TRUE, '2026-02-04 09:00:00+00'),
(3, 3, 'Packed',          TRUE, '2026-02-04 10:00:00+00'),
(3, 3, 'Picked Up',       TRUE, '2026-02-04 11:00:00+00'),
(3, 3, 'Out for Delivery',TRUE, '2026-02-04 13:00:00+00'),
(3, 3, 'Delivered',       TRUE, '2026-02-04 16:00:00+00');


-- ─────────────────────────────────────────────
-- TABLE: farmer_verification_docs
-- Source: FarmerVerificationScreen
-- Stores document upload info for farmer KYC
-- ─────────────────────────────────────────────
CREATE TABLE farmer_verification_docs (
  doc_id      SERIAL PRIMARY KEY,
  farmer_id   INT REFERENCES farmer_profiles(farmer_id),
  doc_type    VARCHAR(50) NOT NULL,  -- 'AADHAAR','PAN','LAND_RECORD','BANK_PROOF'
  doc_url     VARCHAR(300),
  status      VARCHAR(20) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','VERIFIED','REJECTED')),
  submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  reviewed_at  TIMESTAMPTZ
);

CREATE INDEX idx_farmer_docs_farmer_id ON farmer_verification_docs(farmer_id);


-- ─────────────────────────────────────────────
-- VIEWS (convenience for frontend queries)
-- ─────────────────────────────────────────────

-- Farmer wallet summary with profile info
CREATE OR REPLACE VIEW v_farmer_wallet_summary AS
SELECT
  fp.farmer_id,
  fp.farmer_name,
  u.email,
  u.phone,
  fw.available_balance,
  fw.pending_balance,
  fw.total_earned,
  fw.next_payout_date
FROM farmer_profiles fp
JOIN users u ON u.user_id = fp.farmer_id
LEFT JOIN farmer_wallets fw ON fw.farmer_id = fp.farmer_id;

-- Consumer loyalty summary
CREATE OR REPLACE VIEW v_consumer_loyalty AS
SELECT
  cp.consumer_id,
  u.name,
  u.email,
  lp.total_points,
  lp.redeemed_points,
  (lp.total_points - lp.redeemed_points) AS available_points
FROM consumer_profiles cp
JOIN users u ON u.user_id = cp.consumer_id
LEFT JOIN loyalty_points lp ON lp.consumer_id = cp.consumer_id;

-- ============================================================
-- END OF ADDENDUM
-- ============================================================

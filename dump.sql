-- MySQL dump 10.13  Distrib 9.5.0, for macos15 (arm64)
--
-- Host: localhost    Database: farm2table
-- ------------------------------------------------------
-- Server version	9.5.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '1dc88e0e-be40-11f0-b8fa-9283d9b502e8:1-188,
4a239492-d8eb-11f0-bcff-d6bf37d8945b:1-110';

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `type` varchar(20) NOT NULL,
  `line1` varchar(100) NOT NULL,
  `street` varchar(100) DEFAULT NULL,
  `apartment` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,5,'HOME','Flat 101','MG Road',NULL,'Delhi','Delhi','110001'),(2,6,'HOME','Flat 202','Brigade Road',NULL,'Bengaluru','Karnataka','560001'),(3,7,'HOME','House 33','Salt Lake',NULL,'Kolkata','WB','700001'),(4,8,'HOME','Flat 5','Marine Drive',NULL,'Mumbai','Maharashtra','400001'),(5,9,'HOME','Street 10','T Nagar',NULL,'Chennai','Tamil Nadu','600001'),(6,10,'HOME','Sector 21','Sector Road',NULL,'Chandigarh','Chandigarh','160001'),(7,5,'WORK','Connaught Place','CP',NULL,'Delhi','Delhi','110001'),(8,6,'WORK','Whitefield','ITPL',NULL,'Bengaluru','Karnataka','560066'),(9,7,'WORK','Park Street','Central',NULL,'Kolkata','WB','700016'),(10,8,'WORK','Andheri','West',NULL,'Mumbai','Maharashtra','400053');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `analytics_consumer`
--

DROP TABLE IF EXISTS `analytics_consumer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analytics_consumer` (
  `analytics_id` int NOT NULL AUTO_INCREMENT,
  `consumer_id` int DEFAULT NULL,
  `order_history` text,
  `total_spend` decimal(10,2) DEFAULT NULL,
  `total_order` int DEFAULT NULL,
  PRIMARY KEY (`analytics_id`),
  KEY `consumer_id` (`consumer_id`),
  CONSTRAINT `analytics_consumer_ibfk_1` FOREIGN KEY (`consumer_id`) REFERENCES `consumer_profiles` (`consumer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analytics_consumer`
--

LOCK TABLES `analytics_consumer` WRITE;
/*!40000 ALTER TABLE `analytics_consumer` DISABLE KEYS */;
INSERT INTO `analytics_consumer` VALUES (1,5,NULL,12000.00,15),(2,6,NULL,15000.00,20),(3,7,NULL,8000.00,10),(4,8,NULL,20000.00,25),(5,9,NULL,9500.00,12),(6,10,NULL,17500.00,22),(7,11,NULL,6000.00,8),(8,12,NULL,9000.00,11),(9,13,NULL,11000.00,14),(10,14,NULL,13000.00,16);
/*!40000 ALTER TABLE `analytics_consumer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `analytics_farmer`
--

DROP TABLE IF EXISTS `analytics_farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analytics_farmer` (
  `analytics_id` int NOT NULL AUTO_INCREMENT,
  `farmer_id` int DEFAULT NULL,
  `product_history` text,
  `total_earn` decimal(10,2) DEFAULT NULL,
  `total_order` int DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`analytics_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `analytics_farmer_ibfk_1` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analytics_farmer`
--

LOCK TABLES `analytics_farmer` WRITE;
/*!40000 ALTER TABLE `analytics_farmer` DISABLE KEYS */;
INSERT INTO `analytics_farmer` VALUES (1,1,NULL,50000.00,120,'2026-02-04 17:47:11'),(2,2,NULL,45000.00,100,'2026-02-04 17:47:11'),(3,3,NULL,38000.00,95,'2026-02-04 17:47:11'),(4,4,NULL,60000.00,150,'2026-02-04 17:47:11'),(5,1,NULL,52000.00,125,'2026-02-04 17:47:11'),(6,2,NULL,47000.00,110,'2026-02-04 17:47:11'),(7,3,NULL,39000.00,98,'2026-02-04 17:47:11'),(8,4,NULL,61000.00,155,'2026-02-04 17:47:11'),(9,1,NULL,54000.00,130,'2026-02-04 17:47:11'),(10,2,NULL,49000.00,115,'2026-02-04 17:47:11');
/*!40000 ALTER TABLE `analytics_farmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `cart_item_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `variant_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price_snapshot` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (1,5,1,NULL,2,30.00),(2,6,2,NULL,1,80.00),(3,7,3,NULL,3,25.00),(4,8,4,NULL,2,40.00),(5,9,5,NULL,4,20.00),(6,10,6,NULL,2,18.00),(7,5,7,NULL,1,160.00),(8,6,8,NULL,2,120.00),(9,7,9,NULL,3,15.00),(10,8,10,NULL,2,22.00);
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumer_profiles`
--

DROP TABLE IF EXISTS `consumer_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumer_profiles` (
  `consumer_id` int NOT NULL,
  `timestamps` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`consumer_id`),
  CONSTRAINT `consumer_profiles_ibfk_1` FOREIGN KEY (`consumer_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumer_profiles`
--

LOCK TABLES `consumer_profiles` WRITE;
/*!40000 ALTER TABLE `consumer_profiles` DISABLE KEYS */;
INSERT INTO `consumer_profiles` VALUES (5,'2026-02-04 17:43:20'),(6,'2026-02-04 17:43:20'),(7,'2026-02-04 17:43:20'),(8,'2026-02-04 17:43:20'),(9,'2026-02-04 17:43:20'),(10,'2026-02-04 17:43:20'),(11,'2026-02-04 17:43:20'),(12,'2026-02-04 17:43:20'),(13,'2026-02-04 17:43:20'),(14,'2026-02-04 17:43:20');
/*!40000 ALTER TABLE `consumer_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversations`
--

DROP TABLE IF EXISTS `conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversations` (
  `conversation_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `consumer_id` int DEFAULT NULL,
  `farmer_id` int DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`conversation_id`),
  KEY `order_id` (`order_id`),
  KEY `consumer_id` (`consumer_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`consumer_id`) REFERENCES `consumer_profiles` (`consumer_id`),
  CONSTRAINT `conversations_ibfk_3` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversations`
--

LOCK TABLES `conversations` WRITE;
/*!40000 ALTER TABLE `conversations` DISABLE KEYS */;
INSERT INTO `conversations` VALUES (1,1,5,1,'OPEN'),(2,2,6,2,'OPEN'),(3,3,7,3,'OPEN'),(4,4,8,4,'OPEN'),(5,5,9,1,'OPEN'),(6,6,10,2,'OPEN'),(7,7,5,3,'OPEN'),(8,8,6,4,'OPEN'),(9,9,7,1,'OPEN'),(10,10,8,2,'OPEN');
/*!40000 ALTER TABLE `conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crop_advisories`
--

DROP TABLE IF EXISTS `crop_advisories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop_advisories` (
  `advisory_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `crop_tag` varchar(50) DEFAULT NULL,
  `season_tag` varchar(50) DEFAULT NULL,
  `region_tag` varchar(50) DEFAULT NULL,
  `content` text,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`advisory_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `crop_advisories_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_advisories`
--

LOCK TABLES `crop_advisories` WRITE;
/*!40000 ALTER TABLE `crop_advisories` DISABLE KEYS */;
INSERT INTO `crop_advisories` VALUES (1,'Wheat irrigation tips','WHEAT',NULL,'Punjab','Use timely irrigation',1,'2026-02-04 17:47:17'),(2,'Rice pest control','RICE',NULL,'WB','Use organic sprays',2,'2026-02-04 17:47:17'),(3,'Cotton care','COTTON',NULL,'Gujarat','Monitor pests',3,'2026-02-04 17:47:17'),(4,'Tomato farming','TOMATO',NULL,'Karnataka','Improve soil quality',4,'2026-02-04 17:47:17'),(5,'Onion storage','ONION',NULL,'Maharashtra','Use dry storage',1,'2026-02-04 17:47:17'),(6,'Sugarcane tips','SUGARCANE',NULL,'UP','Proper fertilization',2,'2026-02-04 17:47:17'),(7,'Potato yield','POTATO',NULL,'Bihar','Use quality seeds',3,'2026-02-04 17:47:17'),(8,'Maize crop care','MAIZE',NULL,'MP','Avoid water logging',4,'2026-02-04 17:47:17'),(9,'Chilli farming','CHILLI',NULL,'AP','Control insects',1,'2026-02-04 17:47:17'),(10,'Pulse crop care','PULSES',NULL,'Rajasthan','Balanced nutrients',2,'2026-02-04 17:47:17');
/*!40000 ALTER TABLE `crop_advisories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deliveries`
--

DROP TABLE IF EXISTS `deliveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL AUTO_INCREMENT,
  `order_farmer_id` int DEFAULT NULL,
  `scheduled_slot` timestamp NULL DEFAULT NULL,
  `partner_id` int DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `dispatched_at` timestamp NULL DEFAULT NULL,
  `delivered_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`delivery_id`),
  KEY `order_farmer_id` (`order_farmer_id`),
  KEY `partner_id` (`partner_id`),
  CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`order_farmer_id`) REFERENCES `order_farmers` (`order_farmer_id`),
  CONSTRAINT `deliveries_ibfk_2` FOREIGN KEY (`partner_id`) REFERENCES `delivery_partners` (`partner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliveries`
--

LOCK TABLES `deliveries` WRITE;
/*!40000 ALTER TABLE `deliveries` DISABLE KEYS */;
INSERT INTO `deliveries` VALUES (1,1,'2026-02-04 17:46:03',1,'OUT_FOR_DELIVERY',NULL,NULL),(2,2,'2026-02-04 17:46:03',2,'OUT_FOR_DELIVERY',NULL,NULL),(3,3,'2026-02-04 17:46:03',3,'DELIVERED',NULL,NULL),(4,4,'2026-02-04 17:46:03',1,'DELIVERED',NULL,NULL),(5,5,'2026-02-04 17:46:03',2,'OUT_FOR_DELIVERY',NULL,NULL),(6,6,'2026-02-04 17:46:03',3,'OUT_FOR_DELIVERY',NULL,NULL),(7,7,'2026-02-04 17:46:03',1,'SHIPPED',NULL,NULL),(8,8,'2026-02-04 17:46:03',2,'DELIVERED',NULL,NULL),(9,9,'2026-02-04 17:46:03',3,'SHIPPED',NULL,NULL),(10,10,'2026-02-04 17:46:03',1,'OUT_FOR_DELIVERY',NULL,NULL);
/*!40000 ALTER TABLE `deliveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_events`
--

DROP TABLE IF EXISTS `delivery_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `delivery_id` int DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `event_time` timestamp NULL DEFAULT NULL,
  `location_text` varchar(200) DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`event_id`),
  KEY `delivery_id` (`delivery_id`),
  CONSTRAINT `delivery_events_ibfk_1` FOREIGN KEY (`delivery_id`) REFERENCES `deliveries` (`delivery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_events`
--

LOCK TABLES `delivery_events` WRITE;
/*!40000 ALTER TABLE `delivery_events` DISABLE KEYS */;
INSERT INTO `delivery_events` VALUES (1,1,'Picked Up','2026-02-04 17:46:08','Jaipur',NULL),(2,2,'Picked Up','2026-02-04 17:46:08','Anand',NULL),(3,3,'Delivered','2026-02-04 17:46:08','Ludhiana',NULL),(4,4,'Delivered','2026-02-04 17:46:08','Hyderabad',NULL),(5,5,'Packed','2026-02-04 17:46:08','Jaipur',NULL),(6,6,'Packed','2026-02-04 17:46:08','Anand',NULL),(7,7,'In Transit','2026-02-04 17:46:08','Punjab',NULL),(8,8,'Delivered','2026-02-04 17:46:08','Hyderabad',NULL),(9,9,'In Transit','2026-02-04 17:46:08','Rajasthan',NULL),(10,10,'Picked Up','2026-02-04 17:46:08','Gujarat',NULL);
/*!40000 ALTER TABLE `delivery_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_partners`
--

DROP TABLE IF EXISTS `delivery_partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_partners` (
  `partner_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`partner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_partners`
--

LOCK TABLES `delivery_partners` WRITE;
/*!40000 ALTER TABLE `delivery_partners` DISABLE KEYS */;
INSERT INTO `delivery_partners` VALUES (1,'Delhivery','9000000001','support@delhivery.com','ACTIVE','2026-02-04 17:44:47'),(2,'BlueDart','9000000002','support@bluedart.com','ACTIVE','2026-02-04 17:44:47'),(3,'EcomExpress','9000000003','support@ecom.com','ACTIVE','2026-02-04 17:44:47'),(4,'Shadowfax','9000000004','support@shadowfax.com','ACTIVE','2026-02-04 17:44:47'),(5,'Dunzo','9000000005','support@dunzo.com','ACTIVE','2026-02-04 17:44:47'),(6,'IndiaPost','9000000006','support@indiapost.gov','ACTIVE','2026-02-04 17:44:47'),(7,'XpressBees','9000000007','support@xpress.com','ACTIVE','2026-02-04 17:44:47'),(8,'DTDC','9000000008','support@dtdc.com','ACTIVE','2026-02-04 17:44:47'),(9,'Amazon Logistics','9000000009','support@amazon.com','ACTIVE','2026-02-04 17:44:47'),(10,'Flipkart Logistics','9000000010','support@flipkart.com','ACTIVE','2026-02-04 17:44:47');
/*!40000 ALTER TABLE `delivery_partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dispute_tickets`
--

DROP TABLE IF EXISTS `dispute_tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispute_tickets` (
  `dispute_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `raised_by` int DEFAULT NULL,
  `reason` text,
  `status` varchar(20) NOT NULL,
  `admin_notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`dispute_id`),
  KEY `order_id` (`order_id`),
  KEY `raised_by` (`raised_by`),
  CONSTRAINT `dispute_tickets_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `dispute_tickets_ibfk_2` FOREIGN KEY (`raised_by`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispute_tickets`
--

LOCK TABLES `dispute_tickets` WRITE;
/*!40000 ALTER TABLE `dispute_tickets` DISABLE KEYS */;
INSERT INTO `dispute_tickets` VALUES (1,1,5,'Damaged product','OPEN',NULL,'2026-02-04 17:47:00'),(2,2,6,'Late delivery','OPEN',NULL,'2026-02-04 17:47:00'),(3,3,7,'Wrong item','RESOLVED',NULL,'2026-02-04 17:47:00'),(4,4,8,'Missing item','OPEN',NULL,'2026-02-04 17:47:00'),(5,5,9,'Poor quality','OPEN',NULL,'2026-02-04 17:47:00'),(6,6,10,'Refund delay','OPEN',NULL,'2026-02-04 17:47:00'),(7,7,5,'Quantity issue','RESOLVED',NULL,'2026-02-04 17:47:00'),(8,8,6,'Packaging issue','OPEN',NULL,'2026-02-04 17:47:00'),(9,9,7,'Delay','OPEN',NULL,'2026-02-04 17:47:00'),(10,10,8,'Expired product','OPEN',NULL,'2026-02-04 17:47:00');
/*!40000 ALTER TABLE `dispute_tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer_profiles`
--

DROP TABLE IF EXISTS `farmer_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer_profiles` (
  `farmer_id` int NOT NULL,
  `farmer_name` varchar(100) NOT NULL,
  `nearest_warehouse_location` varchar(200) DEFAULT NULL,
  `farm_size` decimal(10,2) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT NULL,
  `verification_status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`farmer_id`),
  CONSTRAINT `farmer_profiles_ibfk_1` FOREIGN KEY (`farmer_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer_profiles`
--

LOCK TABLES `farmer_profiles` WRITE;
/*!40000 ALTER TABLE `farmer_profiles` DISABLE KEYS */;
INSERT INTO `farmer_profiles` VALUES (1,'Ramesh Farms','Jaipur',5.50,1,'VERIFIED'),(2,'Patel Agro','Anand',8.20,1,'VERIFIED'),(3,'Singh Farms','Ludhiana',6.10,1,'VERIFIED'),(4,'Reddy Farms','Hyderabad',7.00,1,'VERIFIED'),(5,'Yadav Farms','Lucknow',4.80,1,'VERIFIED'),(6,'Gowda Agro','Mysuru',9.00,1,'VERIFIED'),(7,'Chauhan Fields','Indore',5.90,1,'VERIFIED'),(8,'Naik Farms','Goa',3.50,1,'VERIFIED'),(9,'Pawar Agro','Pune',6.80,1,'VERIFIED'),(10,'Patil Farms','Kolhapur',7.20,1,'VERIFIED');
/*!40000 ALTER TABLE `farmer_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_items`
--

DROP TABLE IF EXISTS `favorite_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_items` (
  `favorite_item_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `variant_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`favorite_item_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `favorite_items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `favorite_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_items`
--

LOCK TABLES `favorite_items` WRITE;
/*!40000 ALTER TABLE `favorite_items` DISABLE KEYS */;
INSERT INTO `favorite_items` VALUES (1,5,1,NULL,'2026-02-04 18:16:33'),(2,6,2,NULL,'2026-02-04 18:16:33'),(3,7,3,NULL,'2026-02-04 18:16:33'),(4,8,4,NULL,'2026-02-04 18:16:33'),(5,9,5,NULL,'2026-02-04 18:16:33'),(6,10,6,NULL,'2026-02-04 18:16:33'),(7,5,8,NULL,'2026-02-04 18:16:33'),(8,6,9,NULL,'2026-02-04 18:16:33'),(9,7,10,NULL,'2026-02-04 18:16:33'),(10,8,7,NULL,'2026-02-04 18:16:33');
/*!40000 ALTER TABLE `favorite_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `government_schemes`
--

DROP TABLE IF EXISTS `government_schemes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `government_schemes` (
  `scheme_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `eligibility` text,
  `benefits` text,
  `application_steps` text,
  `lastdate_apply` date DEFAULT NULL,
  PRIMARY KEY (`scheme_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `government_schemes`
--

LOCK TABLES `government_schemes` WRITE;
/*!40000 ALTER TABLE `government_schemes` DISABLE KEYS */;
INSERT INTO `government_schemes` VALUES (1,'PM-KISAN','All small farmers','6000/year','Online apply','2026-12-31'),(2,'Soil Health Card','Farmers','Soil testing','Visit office','2026-12-31'),(3,'Crop Insurance','Farmers','Loss coverage','Apply online','2026-12-31'),(4,'KCC Loan','Farmers','Low interest loan','Bank apply','2026-12-31'),(5,'Organic Farming','Organic farmers','Subsidy','Dept apply','2026-12-31'),(6,'Irrigation Scheme','Farmers','Water support','Online','2026-12-31'),(7,'Seed Subsidy','Farmers','Seed support','Local office','2026-12-31'),(8,'Storage Scheme','Farmers','Warehouse subsidy','Apply portal','2026-12-31'),(9,'Farm Mechanization','Farmers','Equipment subsidy','Apply online','2026-12-31'),(10,'Solar Pump Scheme','Farmers','Solar pump subsidy','Dept apply','2026-12-31');
/*!40000 ALTER TABLE `government_schemes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `message_id` int NOT NULL AUTO_INCREMENT,
  `conversation_id` int DEFAULT NULL,
  `sender_user_id` int DEFAULT NULL,
  `message_type` varchar(20) NOT NULL,
  `body` text,
  `media_url` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `read_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`message_id`),
  KEY `conversation_id` (`conversation_id`),
  KEY `sender_user_id` (`sender_user_id`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`conversation_id`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`sender_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,5,'TEXT','Order shipped?',NULL,'2026-02-04 18:16:49',NULL),(2,1,1,'TEXT','Yes, arriving soon',NULL,'2026-02-04 18:16:49',NULL),(3,2,6,'TEXT','Delivery update?',NULL,'2026-02-04 18:16:49',NULL),(4,2,2,'TEXT','Out for delivery',NULL,'2026-02-04 18:16:49',NULL),(5,3,7,'TEXT','Received thanks',NULL,'2026-02-04 18:16:49',NULL),(6,4,8,'TEXT','Quality good',NULL,'2026-02-04 18:16:49',NULL),(7,5,9,'TEXT','Invoice needed',NULL,'2026-02-04 18:16:49',NULL),(8,6,10,'TEXT','Payment done',NULL,'2026-02-04 18:16:49',NULL),(9,7,5,'TEXT','Satisfied',NULL,'2026-02-04 18:16:49',NULL),(10,8,6,'TEXT','Will order again',NULL,'2026-02-04 18:16:49',NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `type` varchar(20) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `read_flag` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`notification_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,5,'ORDER','Order Placed','Your order is confirmed','2026-02-04 17:46:50',0),(2,6,'PAYMENT','Payment Success','Payment received','2026-02-04 17:46:50',0),(3,7,'DELIVERY','Shipped','Order shipped','2026-02-04 17:46:50',0),(4,8,'DELIVERY','Delivered','Order delivered','2026-02-04 17:46:50',0),(5,9,'ORDER','Packed','Order packed','2026-02-04 17:46:50',0),(6,10,'ORDER','Processing','Order processing','2026-02-04 17:46:50',0),(7,5,'OFFER','Discount','New offer available','2026-02-04 17:46:50',0),(8,6,'ORDER','Update','Delivery update','2026-02-04 17:46:50',0),(9,7,'PAYMENT','Refund','Refund processed','2026-02-04 17:46:50',0),(10,8,'OFFER','Sale','Weekend sale live','2026-02-04 17:46:50',0);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_farmers`
--

DROP TABLE IF EXISTS `order_farmers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_farmers` (
  `order_farmer_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `farmer_id` int DEFAULT NULL,
  `sub_total` decimal(10,2) NOT NULL,
  `discount_total` decimal(10,2) DEFAULT NULL,
  `tax_total` decimal(10,2) DEFAULT NULL,
  `delivery_fee` decimal(10,2) DEFAULT NULL,
  `grand_total` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `timestamps` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_farmer_id`),
  KEY `order_id` (`order_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `order_farmers_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `order_farmers_ibfk_2` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_farmers`
--

LOCK TABLES `order_farmers` WRITE;
/*!40000 ALTER TABLE `order_farmers` DISABLE KEYS */;
INSERT INTO `order_farmers` VALUES (1,1,1,1200.00,50.00,60.00,40.00,1250.00,'CONFIRMED','2026-02-04 17:45:32'),(2,2,2,900.00,20.00,45.00,30.00,955.00,'CONFIRMED','2026-02-04 17:45:32'),(3,3,3,700.00,0.00,35.00,25.00,760.00,'SHIPPED','2026-02-04 17:45:32'),(4,4,4,1500.00,100.00,75.00,40.00,1515.00,'DELIVERED','2026-02-04 17:45:32'),(5,5,1,500.00,0.00,25.00,20.00,545.00,'CONFIRMED','2026-02-04 17:45:32'),(6,6,2,650.00,10.00,32.00,20.00,692.00,'CONFIRMED','2026-02-04 17:45:32'),(7,7,3,1100.00,50.00,55.00,35.00,1140.00,'SHIPPED','2026-02-04 17:45:32'),(8,8,4,800.00,20.00,40.00,25.00,845.00,'DELIVERED','2026-02-04 17:45:32'),(9,9,1,950.00,30.00,48.00,30.00,998.00,'CONFIRMED','2026-02-04 17:45:32'),(10,10,2,1200.00,60.00,60.00,40.00,1240.00,'CONFIRMED','2026-02-04 17:45:32');
/*!40000 ALTER TABLE `order_farmers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_farmer_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `variant_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price_at_purchase` decimal(10,2) DEFAULT NULL,
  `line_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_farmer_id` (`order_farmer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_farmer_id`) REFERENCES `order_farmers` (`order_farmer_id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,1,NULL,10,120.00,1200.00),(2,2,2,NULL,5,180.00,900.00),(3,3,3,NULL,7,100.00,700.00),(4,4,4,NULL,10,150.00,1500.00),(5,5,5,NULL,5,100.00,500.00),(6,6,6,NULL,5,130.00,650.00),(7,7,7,NULL,10,110.00,1100.00),(8,8,8,NULL,8,100.00,800.00),(9,9,9,NULL,5,190.00,950.00),(10,10,10,NULL,10,120.00,1200.00);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `consumer_id` int DEFAULT NULL,
  `order_total` decimal(10,2) NOT NULL,
  `discount_total` decimal(10,2) DEFAULT NULL,
  `tax_total` decimal(10,2) DEFAULT NULL,
  `delivery_fee_total` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `delivery_address_id` int DEFAULT NULL,
  `delivery_address_text` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `consumer_id` (`consumer_id`),
  KEY `delivery_address_id` (`delivery_address_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`consumer_id`) REFERENCES `consumer_profiles` (`consumer_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`delivery_address_id`) REFERENCES `addresses` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,5,500.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),(2,6,700.00,NULL,NULL,NULL,'PLACED','CARD','PAID',NULL,NULL,NULL),(3,7,450.00,NULL,NULL,NULL,'DELIVERED','COD','PAID',NULL,NULL,NULL),(4,8,600.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),(5,9,350.00,NULL,NULL,NULL,'DELIVERED','CARD','PAID',NULL,NULL,NULL),(6,10,900.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),(7,5,200.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),(8,6,300.00,NULL,NULL,NULL,'PLACED','CARD','PAID',NULL,NULL,NULL),(9,7,800.00,NULL,NULL,NULL,'PLACED','UPI','PAID',NULL,NULL,NULL),(10,8,250.00,NULL,NULL,NULL,'DELIVERED','COD','PAID',NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organic_certificates`
--

DROP TABLE IF EXISTS `organic_certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organic_certificates` (
  `cert_id` int NOT NULL AUTO_INCREMENT,
  `farmer_id` int DEFAULT NULL,
  `cert_number` varchar(50) DEFAULT NULL,
  `issuing_body` varchar(100) DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`cert_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `organic_certificates_ibfk_1` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organic_certificates`
--

LOCK TABLES `organic_certificates` WRITE;
/*!40000 ALTER TABLE `organic_certificates` DISABLE KEYS */;
INSERT INTO `organic_certificates` VALUES (1,1,'ORG1001','APEDA','2024-01-01','2027-01-01','VALID'),(2,2,'ORG1002','APEDA','2024-02-01','2027-02-01','VALID'),(3,3,'ORG1003','FSSAI','2024-03-01','2027-03-01','VALID'),(4,4,'ORG1004','FSSAI','2024-01-15','2027-01-15','VALID'),(5,1,'ORG1005','APEDA','2024-04-01','2027-04-01','VALID'),(6,2,'ORG1006','APEDA','2024-05-01','2027-05-01','VALID'),(7,3,'ORG1007','FSSAI','2024-06-01','2027-06-01','VALID'),(8,4,'ORG1008','FSSAI','2024-07-01','2027-07-01','VALID'),(9,1,'ORG1009','APEDA','2024-08-01','2027-08-01','VALID'),(10,2,'ORG1010','APEDA','2024-09-01','2027-09-01','VALID');
/*!40000 ALTER TABLE `organic_certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `method` varchar(50) DEFAULT NULL,
  `paid_at` timestamp NULL DEFAULT NULL,
  `timestamps` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,1,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42'),(2,2,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42'),(3,3,'SUCCESS','COD',NULL,'2026-02-04 17:44:42'),(4,4,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42'),(5,5,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42'),(6,6,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42'),(7,7,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42'),(8,8,'SUCCESS','CARD',NULL,'2026-02-04 17:44:42'),(9,9,'SUCCESS','UPI',NULL,'2026-02-04 17:44:42'),(10,10,'SUCCESS','COD',NULL,'2026-02-04 17:44:42');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `farmer_id` int DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `category` varchar(50) NOT NULL,
  `unit` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock_qty` int NOT NULL,
  `harvest_date` date DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `primary_image_url` varchar(200) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `timestamps` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Organic Wheat',NULL,'Grain','kg',30.00,500,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(2,2,'Basmati Rice',NULL,'Grain','kg',80.00,300,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(3,3,'Fresh Tomatoes',NULL,'Vegetable','kg',25.00,200,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(4,4,'Green Chillies',NULL,'Vegetable','kg',40.00,150,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(5,1,'Onions',NULL,'Vegetable','kg',20.00,500,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(6,2,'Potatoes',NULL,'Vegetable','kg',18.00,600,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(7,3,'Mustard Oil',NULL,'Oil','ltr',160.00,100,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(8,4,'Fresh Mangoes',NULL,'Fruit','kg',120.00,250,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(9,1,'Spinach',NULL,'Leafy','kg',15.00,120,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31'),(10,2,'Carrots',NULL,'Vegetable','kg',22.00,180,NULL,NULL,NULL,NULL,'AVAILABLE','2026-02-04 17:44:31');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `order_farmer_id` int DEFAULT NULL,
  `consumer_id` int DEFAULT NULL,
  `farmer_id` int DEFAULT NULL,
  `consumer_name` varchar(100) DEFAULT NULL,
  `consumer_avatar` varchar(200) DEFAULT NULL,
  `rating` decimal(3,2) NOT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `order_id` (`order_id`),
  KEY `order_farmer_id` (`order_farmer_id`),
  KEY `consumer_id` (`consumer_id`),
  KEY `farmer_id` (`farmer_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`order_farmer_id`) REFERENCES `order_farmers` (`order_farmer_id`),
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`consumer_id`) REFERENCES `consumer_profiles` (`consumer_id`),
  CONSTRAINT `reviews_ibfk_4` FOREIGN KEY (`farmer_id`) REFERENCES `farmer_profiles` (`farmer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,1,5,1,'Amit Sharma',NULL,4.50,'Fresh vegetables','2026-02-04 17:46:14'),(2,2,2,6,2,'Priya Verma',NULL,4.00,'Good quality','2026-02-04 17:46:14'),(3,3,3,7,3,'Rahul Das',NULL,5.00,'Excellent grains','2026-02-04 17:46:14'),(4,4,4,8,4,'Neha Gupta',NULL,4.50,'Timely delivery','2026-02-04 17:46:14'),(5,5,5,9,1,'Karan Mehta',NULL,4.00,'Nice packing','2026-02-04 17:46:14'),(6,6,6,10,2,'Sneha Iyer',NULL,5.00,'Loved quality','2026-02-04 17:46:14'),(7,7,7,5,3,'Amit Sharma',NULL,4.00,'Good service','2026-02-04 17:46:14'),(8,8,8,6,4,'Priya Verma',NULL,5.00,'Great taste','2026-02-04 17:46:14'),(9,9,9,7,1,'Rahul Das',NULL,4.20,'Satisfied','2026-02-04 17:46:14'),(10,10,10,8,2,'Neha Gupta',NULL,4.80,'Excellent','2026-02-04 17:46:14');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_private_bank_details`
--

DROP TABLE IF EXISTS `user_private_bank_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_private_bank_details` (
  `user_id` int NOT NULL,
  `account_holder_name` varchar(100) DEFAULT NULL,
  `account_number` varchar(20) DEFAULT NULL,
  `ifsc_code` varchar(20) DEFAULT NULL,
  `bank_name` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_private_bank_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_private_bank_details`
--

LOCK TABLES `user_private_bank_details` WRITE;
/*!40000 ALTER TABLE `user_private_bank_details` DISABLE KEYS */;
INSERT INTO `user_private_bank_details` VALUES (5,'Amit Sharma','12345678901','SBIN0000123','State Bank of India',NULL),(6,'Priya Verma','12345678902','HDFC0000456','HDFC Bank',NULL),(7,'Rahul Das','12345678903','ICIC0000789','ICICI Bank',NULL),(8,'Neha Gupta','12345678904','AXIS0000111','Axis Bank',NULL),(9,'Karan Mehta','12345678905','PUNB0000222','Punjab National Bank',NULL),(10,'Sneha Iyer','12345678906','SBIN0000333','State Bank of India',NULL),(11,'Anita Sharma','12345678907','HDFC0000444','HDFC Bank',NULL),(12,'Rohit Jain','12345678908','ICIC0000555','ICICI Bank',NULL),(13,'Meera Nair','12345678909','AXIS0000666','Axis Bank',NULL),(14,'Aditya Roy','12345678910','PUNB0000777','Punjab National Bank',NULL);
/*!40000 ALTER TABLE `user_private_bank_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `photo_url` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `users_chk_1` CHECK ((`role` in (_utf8mb4'ADMIN',_utf8mb4'FARMER',_utf8mb4'CONSUMER')))
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ramesh Kumar','9876543210','ramesh@gmail.com','hash1','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(2,'Suresh Patel','9876543211','suresh@gmail.com','hash2','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(3,'Baldev Singh','9876543212','baldev@gmail.com','hash3','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(4,'Arjun Reddy','9876543213','arjun@gmail.com','hash4','FARMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(5,'Amit Sharma','9876543214','amit@gmail.com','hash5','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(6,'Priya Verma','9876543215','priya@gmail.com','hash6','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(7,'Rahul Das','9876543216','rahul@gmail.com','hash7','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(8,'Neha Gupta','9876543217','neha@gmail.com','hash8','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(9,'Karan Mehta','9876543218','karan@gmail.com','hash9','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(10,'Sneha Iyer','9876543219','sneha@gmail.com','hash10','CONSUMER','ACTIVE',NULL,'2026-02-04 17:40:01'),(11,'Anita Sharma','9876543226','anita@gmail.com','hash17','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16'),(12,'Rohit Jain','9876543227','rohit@gmail.com','hash18','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16'),(13,'Meera Nair','9876543228','meera@gmail.com','hash19','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16'),(14,'Aditya Roy','9876543229','aditya@gmail.com','hash20','CONSUMER','ACTIVE',NULL,'2026-02-04 17:43:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-12 13:34:22

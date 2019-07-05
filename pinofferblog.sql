-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: pinofferblog
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(500) NOT NULL,
  `publish_date` date NOT NULL,
  `facebook_views` int(10) NOT NULL DEFAULT '0',
  `google_views` int(10) NOT NULL DEFAULT '0',
  `other_views` int(10) NOT NULL DEFAULT '0',
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (9,'sssssssssssssssss','a;;;;;;;;;;;;;;;\'','2019-07-04',0,0,20,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(10,'sssssssssssssssss','a;;;;;;;;;;;;;;;\'','2019-07-04',1,0,6,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(12,'aaaaaaaaaaaaaaaaaaaaa','fl;dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk','2019-07-03',0,0,0,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(14,'sssssssssssssssss','saaaaaaaaaaaaaaaaaaaaaaaa','2019-07-04',8,6,7,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(15,'sssssssssssssssss','saaaaaaaaaaaaaaaaaaaaaaaaa','2019-07-04',0,0,2,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(17,'fgggggggg','asssssssssssss','2019-07-03',0,0,0,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(19,' THE MORMON CHURCH VS. THE INTERNET','To be a Mormon among Mormons is to realize the American fantasy of good neighbors. They’re the kind of neighbors from whom you borrow a cup of sugar and whom you trust to pick up your children from school when you’re stuck in a meeting. They invite you over on summer evenings for lemonade at the table in the backyard next to the hydrangeas. You eat their Jell-O salad at picnics','2019-07-04',0,0,1,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd'),(22,'sssssssssssssssss','ssssssssssssss','2019-07-04',0,0,2,'Ricky L. Johnsoncccccccc'),(23,'fggggggggggggggggggggggggggggf','gfffffffffffffffffffffffff','2019-07-05',0,0,20,'MOffffffAThhhASEvvvMbbgg K BEKSAWYdd');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `name` varchar(50) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('MbbbOffffffAThhhfffASEvvvMbcccvvbgg K BEKSAWYdd','moabbbtasembekfffsawy@gmcvvcail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',1),('MbbbOffffffAThhhfffASEvvvMvvvcccvvbgg K BEKSAWYdd','moabbbtasembekfffsawy@gmcvvvvcail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',2),('MbbbOffffffAThhhASEvvvMbcccbgg K BEKSAWYdd','moabbbtasembeksawy@gmccail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',3),('MbbbOffffffAThhhASEvvvMbcccvvbgg K BEKSAWYdd','moabbbtasembeksawy@gmcvvcail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',4),('MOffffffAThhhASEvvvMbbgg K BEKSAWYdd','moatasembeksawy@gmail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',5),('MOffffffAThhhASEvvvMbcccbgg K BEKSAWYdd','moatasembeksawy@gmccail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',6),('sddddddddd','rickyjohnson@cyber-host.net','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',7),('MOATASEM K BEKSAWY','moatasembeksazzwy@gmail.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',8),('MOATASEM K BEKSAWYffffffffffffff','admin@123.com','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',9),('MOATASEM K BEKSAWYsaaaaaaaaa','moatasembeksawy@gmail.comasss','$2a$10$N9C.9qPjiei7K3gtxkZreujzQYJUeAV0tijUNfHhfGVVAg/3.oK8W',10),('Ricky L. Johnsoncccccccc','rickyjohnson@cybcccccer-host.net','$2a$10$kbLWthpE9V6q7YS4lqogqud40xGg5J8S0KJIcbUjUzLOIX8l8OggC',11);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-05 22:35:42

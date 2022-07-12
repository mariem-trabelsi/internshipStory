-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2022 at 03:01 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `storybd`
--

-- --------------------------------------------------------

--
-- Table structure for table `hrs`
--

CREATE TABLE `hrs` (
  `ID_HR` int(3) NOT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `PSW` varchar(30) DEFAULT NULL,
  `IMAGE_HR` text DEFAULT NULL,
  `campany_name` varchar(40) NOT NULL,
  `localisation` varchar(50) NOT NULL,
  `nom_hr` varchar(30) NOT NULL,
  `prenom_hr` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hrs`
--

INSERT INTO `hrs` (`ID_HR`, `EMAIL`, `PSW`, `IMAGE_HR`, `campany_name`, `localisation`, `nom_hr`, `prenom_hr`) VALUES
(1, 'contact.data@gmail.com', 'hr1,2022', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiaKS56a0Sg9yj3b2sNcXFq5oYaVahoh94vTfFmkvsm4uCeRd7xWGNqGQiQx2AVMs2rA&usqp=CAU', 'Linedata', 'Sfax', 'Mohamed', 'Kammoun'),
(2, 'studio.upergrade@gmail.com', 'hr2,2022', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiaKS56a0Sg9yj3b2sNcXFq5oYaVahoh94vTfFmkvsm4uCeRd7xWGNqGQiQx2AVMs2rA&usqp=CAU', 'Studio', 'Ariana', 'Sameh', 'Gheriani');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hrs`
--
ALTER TABLE `hrs`
  ADD PRIMARY KEY (`ID_HR`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hrs`
--
ALTER TABLE `hrs`
  MODIFY `ID_HR` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

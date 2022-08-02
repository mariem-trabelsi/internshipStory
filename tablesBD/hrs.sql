-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2022 at 11:08 PM
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
  `IMAGE_HR` text DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU',
  `campany_name` varchar(40) NOT NULL,
  `localisation` varchar(50) NOT NULL,
  `nom_hr` varchar(30) NOT NULL,
  `prenom_hr` varchar(30) NOT NULL,
  `role` varchar(5) NOT NULL DEFAULT 'HR'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hrs`
--

INSERT INTO `hrs` (`ID_HR`, `EMAIL`, `PSW`, `IMAGE_HR`, `campany_name`, `localisation`, `nom_hr`, `prenom_hr`, `role`) VALUES
(1, 'contact.data@gmail.com', 'mohamed2022', 'https://img.freepik.com/photos-gratuite/bel-homme-souriant-confiant-mains-croisees-poitrine_176420-18743.jpg?w=2000', 'Linedata', 'Sfax', 'Mohamed', 'Kammoun', 'HR'),
(2, 'studio.upergrade@gmail.com', 'sameh2022', 'https://www.michelrichardphotographe.fr/wp-content/uploads/2018/07/portrait-femme-pro-manager.jpg', 'Studio', 'Ariana', 'Sameh', 'Gheriani', 'HR'),
(3, 'admin', '123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU	', '----', '----', '----', '----', 'ADMIN'),
(4, 'moufidaBenslimene@gmail.com', 'moufida2022', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkC43iI1DLcV8j3H4g7nodkXwU7usXi8qVRA', 'Africano', 'Tunis', 'Ben Slimene', 'Moufida', 'HR');

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
  MODIFY `ID_HR` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 07:45 PM
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
-- Table structure for table `interns`
--

CREATE TABLE `interns` (
  `ID_INTERN` int(3) NOT NULL,
  `NOM_INTERN` varchar(30) DEFAULT NULL,
  `PRENOM_INTERN` varchar(30) NOT NULL,
  `REGION_INTERN` varchar(50) NOT NULL,
  `IMAGE_INTERN` text DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU',
  `INTERNMAIL` varchar(40) NOT NULL,
  `INTERNPSS` varchar(20) NOT NULL,
  `role` varchar(30) DEFAULT 'INTERN'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `interns`
--

INSERT INTO `interns` (`ID_INTERN`, `NOM_INTERN`, `PRENOM_INTERN`, `REGION_INTERN`, `IMAGE_INTERN`, `INTERNMAIL`, `INTERNPSS`, `role`) VALUES
(1, 'Sassi', 'Zeineb', 'Ariana', 'https://images.prismic.io/cadremploi-edito/2c42db4e-15ac-49a4-8d50-e4113a8adbb5_Bonne-photo-cv-femme1.JPG?auto=compress,format', 'zeineb.sassi@gmail.com', 'zeineb2022', 'INTERN'),
(2, 'Brinis', 'Ahmed', 'Sfax', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaEUA69pbBiO-U4U9VVrZxAuWjU7viJ5FCA&usqp=CAU', 'ahmed.brinis@gmail.com', 'ahmed2022', 'INTERN'),
(4, 'Tbourski', 'Asma', 'Djerba', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU', 'asma.tbourski@gmail.com', 'asma2022', 'INTERN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `interns`
--
ALTER TABLE `interns`
  ADD PRIMARY KEY (`ID_INTERN`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `interns`
--
ALTER TABLE `interns`
  MODIFY `ID_INTERN` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

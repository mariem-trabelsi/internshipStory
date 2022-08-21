-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 07:11 PM
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
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(3) NOT NULL,
  `content` text NOT NULL,
  `dateC` timestamp NOT NULL DEFAULT current_timestamp(),
  `nameC` varchar(60) NOT NULL,
  `imageC` text NOT NULL,
  `idHiring` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `content`, `dateC`, `nameC`, `imageC`, `idHiring`) VALUES
(1, 'interested', '2022-08-05 13:09:23', 'Zeineb Sassi', 'https://images.prismic.io/cadremploi-edito/2c42db4e-15ac-49a4-8d50-e4113a8adbb5_Bonne-photo-cv-femme1.JPG?auto=compress,format', 1),
(7, 'yess !', '2022-08-05 17:19:57', 'Ahmed Brinis', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaEUA69pbBiO-U4U9VVrZxAuWjU7viJ5FCA', 2),
(8, 'what time ?', '2022-08-06 10:08:51', 'Zeineb Sassi', 'https://images.prismic.io/cadremploi-edito/2c42db4e-15ac-49a4-8d50-e4113a8adbb5_Bonne-photo-cv-femme1.JPG?auto=compress,format', 2),
(20, 'Interested', '2022-08-19 12:56:40', 'Zeineb Sassi', 'https://images.prismic.io/cadremploi-edito/2c42db4e-15ac-49a4-8d50-e4113a8adbb5_Bonne-photo-cv-femme1.JPG?auto=compress,format', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

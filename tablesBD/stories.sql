-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 07:14 PM
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
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `dateStory` timestamp NOT NULL DEFAULT current_timestamp(),
  `CompName` varchar(50) NOT NULL,
  `nbreLike` int(3) NOT NULL,
  `nameS` varchar(60) NOT NULL,
  `imageS` text NOT NULL,
  `emailS` varchar(60) NOT NULL,
  `icon` varchar(20) NOT NULL DEFAULT 'far fa-heart'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `content`, `dateStory`, `CompName`, `nbreLike`, `nameS`, `imageS`, `emailS`, `icon`) VALUES
(1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem illum ratione iusto sapiente deserunt hic nemo ea aliquam nisi veritatis officiis saepe tempora quae quis sint fugit, sit nulla!', '2022-08-02 16:38:13', 'Follow me', 0, 'Zeineb Sassi', 'https://images.prismic.io/cadremploi-edito/2c42db4e-15ac-49a4-8d50-e4113a8adbb5_Bonne-photo-cv-femme1.JPG?auto=compress,format', 'zeineb.sassi@gmail.com', 'far fa-heart'),
(2, 'let say it was a sad story ... My InternshipStory was horrible when I did ..', '2022-08-02 16:56:26', 'Telecom', 1, 'Ahmed Brinis', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaEUA69pbBiO-U4U9VVrZxAuWjU7viJ5FCA', 'ahmed.brinis@gmail.com', 'fas fa-heart');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

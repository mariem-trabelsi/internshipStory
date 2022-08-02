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
-- Table structure for table `hiring`
--

CREATE TABLE `hiring` (
  `id` int(3) NOT NULL,
  `contenu` text NOT NULL,
  `local` varchar(60) NOT NULL,
  `compName` varchar(50) NOT NULL,
  `likes` int(3) NOT NULL,
  `imageH` text NOT NULL,
  `nameH` varchar(60) NOT NULL,
  `emailH` varchar(50) NOT NULL,
  `dateH` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiring`
--

INSERT INTO `hiring` (`id`, `contenu`, `local`, `compName`, `likes`, `imageH`, `nameH`, `emailH`, `dateH`) VALUES
(1, 'ça marche pour l\'instant !', 'Sfax', 'Linedata', 5, 'https://img.freepik.com/photos-gratuite/bel-homme-souriant-confiant-mains-croisees-poitrine_176420-18743.jpg?w=2000', 'Mohamed Kammoun', 'contact.data@gmail.com', '2022-08-02 20:27:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hiring`
--
ALTER TABLE `hiring`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hiring`
--
ALTER TABLE `hiring`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 07:19 PM
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
  `localH` varchar(60) NOT NULL,
  `compName` varchar(50) NOT NULL,
  `likes` int(3) NOT NULL,
  `imageH` text NOT NULL,
  `nameH` varchar(60) NOT NULL,
  `emailH` varchar(50) NOT NULL,
  `dateH` datetime NOT NULL DEFAULT current_timestamp(),
  `icon` varchar(20) NOT NULL DEFAULT 'far fa-thumbs-up'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiring`
--

INSERT INTO `hiring` (`id`, `contenu`, `localH`, `compName`, `likes`, `imageH`, `nameH`, `emailH`, `dateH`, `icon`) VALUES
(2, 'I\'m currently looking to recruit a fully remote Backend Developer with Node.js experience to work on several Greenfield projects to enhance an online sports platform. Their application is used globally with over 60,000 customers and growing! You will join a team of world-class and passionate engineers to provide the latest customer offerings, services and platform.', 'Tozeur', 'Follow me', 0, 'https://img.freepik.com/photos-gratuite/bel-homme-souriant-confiant-mains-croisees-poitrine_176420-18743.jpg?w=2000', 'Kammoun Mohamed', 'contact.data@gmail.com', '2022-08-04 11:29:31', 'far fa-thumbs-up'),
(3, 'We are FIS. Our technology powers the world’s economy and our teams bring innovation to life. We champion diversity to deliver the best products and solutions for our colleagues, clients and communities. If you’re ready to start learning, growing and making an impact with a career in fintech, we’d like to know~ Are you FIS?', 'Tunis', 'Fis', 1, 'https://www.michelrichardphotographe.fr/wp-content/uploads/2018/07/portrait-femme-pro-manager.jpg', 'Gheriani Sameh', 'studio.upergrade@gmail.com', '2022-08-07 11:50:08', 'fas fa-thumbs-up');

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
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

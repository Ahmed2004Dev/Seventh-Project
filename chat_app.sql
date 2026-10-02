-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2026 at 10:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat app`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `com_id` int(11) NOT NULL,
  `com_title` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `postID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`com_id`, `com_title`, `createdAt`, `updatedAt`, `postID`, `userID`) VALUES
(3, 'Good Post', '2026-09-16 19:36:53', '2026-09-16 19:36:53', 1, 4),
(4, 'Good Post', '2026-09-16 19:37:00', '2026-09-16 19:37:00', 2, 3),
(5, 'Good Post', '2026-09-16 19:37:06', '2026-09-16 19:37:06', 3, 2),
(6, 'Good Post', '2026-09-16 19:37:13', '2026-09-16 19:37:13', 4, 1),
(7, 'Good Post', '2026-09-16 19:37:20', '2026-09-16 19:37:20', 5, 5),
(8, 'Good alfتgfdfالalfalf MasdfabMabMabMabMabMab', '2026-09-16 19:37:42', '2026-09-16 19:37:42', 5, 5),
(9, 'Very Post', '2026-09-16 20:30:19', '2026-09-16 20:30:19', 5, 4),
(10, 'iam happy', '2026-09-16 20:30:33', '2026-09-16 20:30:33', 5, 3),
(11, 'this is awnser', '2026-09-16 20:30:54', '2026-09-16 20:30:54', 5, 2),
(12, 'sleeeeeping', '2026-09-16 20:31:09', '2026-09-16 20:31:09', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `p_id` int(11) NOT NULL,
  `p_title` varchar(3000) NOT NULL,
  `p_content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`p_id`, `p_title`, `p_content`, `createdAt`, `updatedAt`, `deletedAt`, `userID`) VALUES
(1, 'War', 'New war in new country and army fiitnig anouther countery army', '2026-09-16 19:35:21', '2026-09-16 19:35:21', NULL, 4),
(2, 'War', 'New war in new country and army fiitnig anouther countery army', '2026-09-16 19:35:27', '2026-09-16 19:35:27', NULL, 3),
(3, 'War', 'New war in new country and army fiitnig anouther countery army', '2026-09-16 19:35:31', '2026-09-16 19:35:31', NULL, 2),
(4, 'War', 'New war in new country and army fiitnig anouther countery army', '2026-09-16 19:35:39', '2026-09-16 19:35:39', NULL, 1),
(5, 'War', 'New war in new country and army fiitnig anouther countery army', '2026-09-16 19:35:43', '2026-09-16 19:35:43', NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `u_name` varchar(255) NOT NULL,
  `u_email` varchar(255) NOT NULL,
  `u_password` varchar(255) NOT NULL,
  `u_role` enum('admin','user') DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `u_name`, `u_email`, `u_password`, `u_role`, `createdAt`, `updatedAt`) VALUES
(1, 'Naser Mohamed Fahad', 'Naser@gmail.com', '1234567', 'user', '2026-09-16 19:34:10', '2026-09-16 19:34:10'),
(2, 'Faleh Mohamed Fahad', 'Faleh@gmail.com', '1234567', 'user', '2026-09-16 19:34:33', '2026-09-16 19:34:33'),
(3, 'soha Mohamed Fahad', 'soha@gmail.com', '1234567', 'user', '2026-09-16 19:34:43', '2026-09-16 19:34:43'),
(4, 'khan Mohamed Fahad', 'khan@gmail.com', '1234567', 'user', '2026-09-16 19:34:51', '2026-09-16 19:34:51'),
(5, 'Nof Mohamed Fahad', 'Nof@gmail.com', '1234567', 'user', '2026-09-16 19:35:01', '2026-09-16 19:35:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`com_id`),
  ADD KEY `postID` (`postID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`p_id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `u_email` (`u_email`),
  ADD UNIQUE KEY `u_email_2` (`u_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`postID`) REFERENCES `posts` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_4` FOREIGN KEY (`userID`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

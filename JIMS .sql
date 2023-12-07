-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 07, 2023 at 07:49 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JIMS`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `itemId` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`itemId`, `categoryName`, `itemName`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 'Drinks', 'Coke', 4, '2023-11-19 18:22:19', '2023-11-12 17:21:42'),
(3, 'asdf', 'sdf', 34, '2023-12-01 05:48:24', '2023-11-13 07:46:33'),
(5, 'asdf', 's23', 34, '2023-12-01 05:58:57', '2023-11-13 07:46:38'),
(6, 'asdf', 's23', 23, '2023-11-13 07:46:38', '2023-11-13 07:46:38'),
(7, 'asdf', 's23', 25, '2023-12-01 05:56:57', '2023-11-13 07:46:39'),
(8, 'asdf', 's23', 5, '2023-12-01 05:54:27', '2023-11-13 07:46:39'),
(9, 'asdf', 's23', 14, '2023-12-01 05:39:16', '2023-11-13 07:46:39'),
(10, 'asdf', 's23', 5, '2023-12-01 05:54:44', '2023-11-13 07:46:40'),
(11, 'asdf', 's23', 23, '2023-11-13 07:46:40', '2023-11-13 07:46:40'),
(12, 'asdf', 's23', 10, '2023-11-21 09:17:22', '2023-11-13 07:46:41'),
(13, 'asdf', 's23', 7, '2023-11-21 09:17:15', '2023-11-13 07:46:42'),
(14, 'asdf', 's23', 23, '2023-11-13 07:46:42', '2023-11-13 07:46:42'),
(15, 'asdf', 's23', 23, '2023-11-13 07:46:43', '2023-11-13 07:46:43'),
(16, 'asdf', 's23', 4, '2023-11-21 09:18:01', '2023-11-13 07:46:43'),
(17, 'asdf', 's23', 23, '2023-11-13 07:46:44', '2023-11-13 07:46:44'),
(18, 'asdf', 's23', 23, '2023-11-13 07:46:44', '2023-11-13 07:46:44'),
(19, 'asd', 'sadf', 12, '2023-11-13 08:44:21', '2023-11-13 08:44:21'),
(20, 'asd', 'sadf', 12, '2023-11-13 08:44:26', '2023-11-13 08:44:26'),
(21, 'ad', 'sdf', 32, '2023-11-13 09:35:35', '2023-11-13 09:35:35'),
(22, 'ad', 'sdf', 32, '2023-11-13 09:53:40', '2023-11-13 09:53:40'),
(23, 'Grinks', 'foot', 0, '2023-11-13 15:11:26', '2023-11-13 09:53:59'),
(24, 'sf', 'sdf', 213, '2023-11-13 13:26:45', '2023-11-13 13:26:45'),
(25, 'Soup', 'Geisha', 10, '2023-12-01 12:39:28', '2023-11-14 08:39:15'),
(26, 'dsfg', 'fdsg', 34, '2023-12-06 15:47:33', '2023-12-06 15:47:33');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `pdf_data` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `email`, `password`) VALUES
(1, 'Admin', 'Admin@gmail.com', 'Admin'),
(3, 'Admin', 'Admin@gmail.com', 'Admin'),
(4, 'Thomas', 'thomas@gmail.com', 'thomas'),
(6, 'tim', 'tim@gmail.com', 'tim'),
(7, 'Jeff', 'jeff@gmail.com', 'jeff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`itemId`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `itemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

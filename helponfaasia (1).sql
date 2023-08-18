-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2023 at 07:36 PM
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
-- Database: `helponfaasia`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phot_demo` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id`, `name`, `phot_demo`, `photo`, `logo`) VALUES
(1, 'ACB', 'demo_acb.webp', 'acb.webp', 'logo_acb.png'),
(2, 'Agribank', 'demo_agribank.webp', 'agribank.webp', 'logo_agribank.png'),
(3, 'BIDV', 'demo_bidv.webp', 'bidv.webp', 'logo_bidv.png'),
(4, 'MB Bank', 'demo_mbbank.webp', 'mbbank.webp', 'logo_mbbank.jpg'),
(5, 'Momo', 'demo_momo.webp', 'momo.webp', 'logo_momo.png'),
(6, 'Msb', 'demo_msb.webp', 'msb.webp', 'logo_msb.webp'),
(7, 'Sacombank', 'demo_sacombank.webp', 'sacombank.webp', 'logo_sacombank.jpg'),
(8, 'Techcombank', 'demo_techcombank.webp', 'techcombank.webp', 'logo_techcombank.png'),
(9, 'TpBank', 'demo_tpbank.webp', 'tpbank.webp', 'logo_tpbank.jpg'),
(10, 'Vietcombank', 'demo_vietcombank.webp', 'vietcombank.webp', 'logo_vietcombank.jpg'),
(11, 'Vietinbank', 'demo_vietinbank.webp', 'vietinbank.webp', 'logo_vietinbank.webp'),
(12, 'VpBank', 'demo_vpbank.webp', 'vpbank.webp', 'logo_vpbank.png');

-- --------------------------------------------------------

--
-- Table structure for table `bet`
--

CREATE TABLE `bet` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo_demo` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `photo_default` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bet`
--

INSERT INTO `bet` (`id`, `name`, `photo_demo`, `photo`, `photo_default`) VALUES
(1, 'Tạo đơn cược bóng', '[\"photo_demo_1\", \"photo_demo_2\", \"photo_demo_3\", \"photo_demo_4\", \"photo_demo_5\", \"photo_demo_6\"]', '[\"photo_1\", \"photo_2\", \"photo_3\", \"photo_4\", \"photo_5\", \"photo_6\"]', NULL),
(2, 'Tạo bill đơn cược Casino', 'demo-bet-3.png', 'bet-3.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bet_users`
--

CREATE TABLE `bet_users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo_demo` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `photo_black` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bet_users`
--

INSERT INTO `bet_users` (`id`, `name`, `photo_demo`, `photo`, `photo_black`) VALUES
(1, 'Tạo Bill rút tiền Bóng Vip', 'demo-bet-1.png', 'bet-1.png', NULL),
(2, 'Tạo bill cược Casino', 'demo-bet-3.png', 'bet-3.png', NULL),
(3, 'Tạo Bill rút tiền MG188', 'demo-mg188.png', 'mg188.png', 'mg188_black.png');

-- --------------------------------------------------------

--
-- Table structure for table `get_users`
--

CREATE TABLE `get_users` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `get_users`
--

INSERT INTO `get_users` (`id`, `name`, `created_at`, `updated_at`) VALUES
('123321', 'demo_name', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ip_users`
--

CREATE TABLE `ip_users` (
  `ip` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_users` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ip_users`
--

INSERT INTO `ip_users` (`ip`, `region`, `created_at`, `id_users`) VALUES
('36.37.179.246', 'Phnom Penh', '2023-07-15 17:54:51', 21),
('36.37.179.246', 'Phnom Penh', '2023-07-15 17:55:26', 21),
('103.120.133.249', 'Phnom Penh', '2023-07-16 07:54:40', 36),
('103.120.133.249', 'Phnom Penh', '2023-07-16 08:04:56', 17),
('36.37.179.246', 'Phnom Penh', '2023-07-16 08:24:28', 16),
('36.37.179.246', 'Phnom Penh', '2023-07-16 08:40:26', 35),
('36.37.179.246', 'Phnom Penh', '2023-07-16 09:04:04', 1),
('36.37.179.246', 'Phnom Penh', '2023-07-16 09:12:05', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-16 10:48:08', 26),
('36.37.179.246', 'Phnom Penh', '2023-07-16 10:56:26', 13),
('36.37.179.246', 'Phnom Penh', '2023-07-16 11:14:46', 20),
('36.37.179.246', 'Phnom Penh', '2023-07-16 13:12:45', 36),
('36.37.179.246', 'Phnom Penh', '2023-07-16 13:26:51', 36),
('36.37.179.246', 'Phnom Penh', '2023-07-16 15:14:20', 1),
('36.37.179.246', 'Phnom Penh', '2023-07-16 15:18:43', 13),
('103.120.133.249', 'Phnom Penh', '2023-07-16 17:05:45', 15),
('36.37.179.246', 'Phnom Penh', '2023-07-16 17:33:56', 35),
('36.37.179.246', 'Phnom Penh', '2023-07-16 17:45:51', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-16 17:50:11', 16),
('36.37.179.246', 'Phnom Penh', '2023-07-16 17:50:25', 14),
('36.37.179.246', 'Phnom Penh', '2023-07-16 17:57:03', 1),
('36.37.179.246', 'Phnom Penh', '2023-07-17 08:07:43', 26),
('36.37.179.246', 'Phnom Penh', '2023-07-17 08:26:05', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-17 08:26:06', 26),
('103.120.133.249', 'Phnom Penh', '2023-07-17 08:27:12', 26),
('36.37.179.246', 'Phnom Penh', '2023-07-17 08:38:27', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-17 08:43:10', 16),
('103.120.133.249', 'Phnom Penh', '2023-07-17 08:44:31', 36),
('36.37.179.246', 'Phnom Penh', '2023-07-17 09:15:15', 14),
('103.120.133.249', 'Phnom Penh', '2023-07-17 09:16:03', 35),
('36.37.179.246', 'Phnom Penh', '2023-07-17 09:53:14', 20),
('103.120.133.249', 'Phnom Penh', '2023-07-17 09:57:24', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-17 10:09:09', 19),
('173.239.196.58', 'Phnom Penh', '2023-07-17 10:29:52', 18),
('103.120.133.249', 'Phnom Penh', '2023-07-17 13:34:02', 35),
('36.37.179.246', 'Phnom Penh', '2023-07-17 14:27:57', 36),
('103.120.133.249', 'Phnom Penh', '2023-07-17 14:39:34', 16),
('103.120.133.249', 'Phnom Penh', '2023-07-17 15:03:29', 9),
('36.37.179.246', 'Phnom Penh', '2023-07-17 15:06:38', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-17 16:18:39', 15),
('103.120.133.249', 'Phnom Penh', '2023-07-17 17:49:14', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-18 08:07:29', 17),
('36.37.179.249', 'Phnom Penh', '2023-07-18 08:32:12', 20),
('36.37.179.249', 'Phnom Penh', '2023-07-18 08:32:22', 20),
('36.37.179.249', 'Phnom Penh', '2023-07-18 08:32:27', 20),
('36.37.179.249', 'Phnom Penh', '2023-07-18 08:55:59', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-18 08:56:08', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-18 09:46:12', 26),
('36.37.179.249', 'Phnom Penh', '2023-07-18 13:47:20', 14),
('36.37.179.249', 'Phnom Penh', '2023-07-18 13:52:56', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-18 14:40:20', 36),
('36.37.179.249', 'Phnom Penh', '2023-07-18 15:47:24', 16),
('36.37.179.249', 'Phnom Penh', '2023-07-19 07:54:40', 17),
('36.37.179.249', 'Phnom Penh', '2023-07-19 08:10:59', 20),
('103.120.133.249', 'Phnom Penh', '2023-07-19 08:17:09', 19),
('103.120.133.249', 'Phnom Penh', '2023-07-19 08:43:44', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-19 09:08:44', 8),
('36.37.179.249', 'Phnom Penh', '2023-07-19 09:09:04', 9),
('103.120.133.249', 'Phnom Penh', '2023-07-19 09:14:32', 8),
('36.37.179.249', 'Phnom Penh', '2023-07-19 09:33:12', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-19 12:35:35', 36),
('103.120.133.249', 'Phnom Penh', '2023-07-19 13:50:21', 15),
('103.120.133.249', 'Phnom Penh', '2023-07-19 14:14:49', 26),
('36.37.179.249', 'Phnom Penh', '2023-07-19 17:02:49', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-19 17:46:21', 14),
('36.37.179.249', 'Phnom Penh', '2023-07-20 08:16:25', 17),
('36.37.179.249', 'Phnom Penh', '2023-07-20 09:43:31', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-20 10:54:58', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-20 13:05:32', 13),
('36.37.179.249', 'Phnom Penh', '2023-07-20 13:26:37', 14),
('103.120.133.249', 'Phnom Penh', '2023-07-20 14:04:57', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-20 14:54:36', 35),
('36.37.179.249', 'Phnom Penh', '2023-07-20 15:15:22', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-20 15:39:58', 36),
('36.37.179.249', 'Phnom Penh', '2023-07-20 15:40:04', 16),
('103.120.133.249', 'Phnom Penh', '2023-07-21 07:55:44', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-21 08:00:13', 14),
('36.37.179.200', 'Phnom Penh', '2023-07-21 08:04:05', 19),
('36.37.179.200', 'Phnom Penh', '2023-07-21 09:01:02', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-21 10:06:12', 16),
('36.37.179.200', 'Phnom Penh', '2023-07-21 12:46:52', 15),
('103.120.133.249', 'Phnom Penh', '2023-07-21 13:53:16', 11),
('103.120.133.249', 'Phnom Penh', '2023-07-21 17:57:30', 20),
('103.120.133.249', 'Phnom Penh', '2023-07-21 17:57:36', 20),
('36.37.179.200', 'Phnom Penh', '2023-07-22 08:54:51', 16),
('36.37.179.200', 'Phnom Penh', '2023-07-22 09:45:45', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-22 10:53:10', 14),
('36.37.179.200', 'Phnom Penh', '2023-07-22 12:55:40', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-22 13:07:31', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-22 14:51:56', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-22 16:17:56', 15),
('103.120.133.249', 'Phnom Penh', '2023-07-23 07:58:42', 14),
('36.37.179.200', 'Phnom Penh', '2023-07-23 08:11:56', 19),
('103.120.133.249', 'Phnom Penh', '2023-07-23 08:28:31', 17),
('36.37.179.200', 'Phnom Penh', '2023-07-23 09:27:23', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-23 09:32:35', 16),
('36.37.179.200', 'Phnom Penh', '2023-07-23 12:22:11', 20),
('36.37.179.200', 'Phnom Penh', '2023-07-23 14:55:57', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-23 15:16:25', 36),
('36.37.179.200', 'Phnom Penh', '2023-07-24 08:00:10', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-24 08:26:55', 19),
('173.239.196.63', 'Phnom Penh', '2023-07-24 08:50:01', 18),
('36.37.179.200', 'Phnom Penh', '2023-07-24 09:05:07', 16),
('36.37.179.200', 'Phnom Penh', '2023-07-24 09:53:53', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-24 10:14:53', 20),
('36.37.179.200', 'Phnom Penh', '2023-07-24 12:21:59', 36),
('103.120.133.249', 'Phnom Penh', '2023-07-24 13:26:07', 17),
('36.37.179.200', 'Phnom Penh', '2023-07-24 13:31:59', 15),
('36.37.179.200', 'Phnom Penh', '2023-07-24 13:32:22', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-24 14:03:35', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-24 15:08:24', 16),
('36.37.179.200', 'Phnom Penh', '2023-07-24 15:38:46', 36),
('36.37.179.200', 'Phnom Penh', '2023-07-25 08:00:19', 14),
('103.120.133.249', 'Phnom Penh', '2023-07-25 08:32:30', 13),
('103.120.133.249', 'Phnom Penh', '2023-07-25 08:32:33', 13),
('103.120.133.249', 'Phnom Penh', '2023-07-25 08:54:56', 16),
('103.120.133.249', 'Phnom Penh', '2023-07-25 10:00:01', 19),
('36.37.179.200', 'Phnom Penh', '2023-07-25 10:41:52', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-25 12:28:32', 15),
('36.37.179.200', 'Phnom Penh', '2023-07-25 12:35:47', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-25 12:36:02', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-25 12:39:45', 20),
('103.120.133.249', 'Phnom Penh', '2023-07-25 15:19:14', 13),
('36.37.179.200', 'Phnom Penh', '2023-07-26 07:58:38', 17),
('36.37.179.200', 'Phnom Penh', '2023-07-26 08:19:13', 35),
('36.37.179.200', 'Phnom Penh', '2023-07-26 08:42:51', 16),
('103.120.133.249', 'Phnom Penh', '2023-07-26 08:45:39', 36),
('36.37.179.200', 'Phnom Penh', '2023-07-26 09:15:31', 19),
('103.120.133.249', 'Phnom Penh', '2023-07-26 09:53:13', 26),
('103.120.133.249', 'Phnom Penh', '2023-07-26 09:53:27', 26),
('36.37.179.200', 'Phnom Penh', '2023-07-26 10:20:39', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-26 11:06:28', 8),
('36.37.179.200', 'Phnom Penh', '2023-07-26 12:46:42', 36),
('36.37.179.200', 'Phnom Penh', '2023-07-26 13:43:04', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-26 16:46:01', 20),
('36.37.179.200', 'Phnom Penh', '2023-07-26 17:41:30', 14),
('36.37.179.200', 'Phnom Penh', '2023-07-27 07:59:27', 19),
('36.37.179.200', 'Phnom Penh', '2023-07-27 08:00:58', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-27 08:33:02', 36),
('36.37.179.200', 'Phnom Penh', '2023-07-27 11:00:45', 8),
('36.37.179.200', 'Phnom Penh', '2023-07-27 13:52:12', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-27 15:24:19', 35),
('2a09:bac1:3c80::12d:7', 'Phnom Penh', '2023-07-27 17:18:31', 14),
('36.37.179.253', 'Phnom Penh', '2023-07-27 17:37:48', 1),
('103.120.133.249', 'Phnom Penh', '2023-07-27 17:59:13', 20),
('103.120.133.249', 'Phnom Penh', '2023-07-27 17:59:32', 20),
('36.37.179.253', 'Phnom Penh', '2023-07-28 08:29:46', 19),
('36.37.179.253', 'Phnom Penh', '2023-07-28 08:32:48', 20),
('36.37.179.253', 'Phnom Penh', '2023-07-28 09:28:34', 17),
('103.120.133.249', 'Phnom Penh', '2023-07-28 09:31:14', 35),
('36.37.179.253', 'Phnom Penh', '2023-07-28 10:25:15', 16),
('36.37.179.253', 'Phnom Penh', '2023-07-28 10:36:55', 15),
('36.37.179.253', 'Phnom Penh', '2023-07-28 13:41:12', 26),
('103.120.133.249', 'Phnom Penh', '2023-07-28 13:41:58', 8),
('36.37.179.253', 'Phnom Penh', '2023-07-28 15:11:10', 35),
('2a09:bac1:3ce0::17:130', 'Phnom Penh', '2023-07-28 17:39:09', 14),
('103.120.133.249', 'Phnom Penh', '2023-07-29 08:02:20', 17),
('36.37.179.240', 'Phnom Penh', '2023-07-29 08:43:42', 16),
('36.37.179.240', 'Phnom Penh', '2023-07-29 08:48:27', 35),
('36.37.179.240', 'Phnom Penh', '2023-07-29 09:33:22', 8),
('103.120.133.249', 'Phnom Penh', '2023-07-29 09:58:07', 19),
('36.37.179.240', 'Phnom Penh', '2023-07-29 10:40:47', 22),
('103.120.133.249', 'Phnom Penh', '2023-07-29 13:57:16', 36),
('36.37.179.240', 'Phnom Penh', '2023-07-29 14:46:12', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-29 17:46:35', 20),
('36.37.179.240', 'Phnom Penh', '2023-07-29 17:49:40', 15),
('2a09:bac5:46f1:e6::17:175', 'Phnom Penh', '2023-07-29 17:58:55', 14),
('36.37.179.240', 'Phnom Penh', '2023-07-30 07:54:18', 17),
('36.37.179.240', 'Phnom Penh', '2023-07-30 08:17:24', 13),
('103.120.133.249', 'Phnom Penh', '2023-07-30 08:25:43', 8),
('103.120.133.249', 'Phnom Penh', '2023-07-30 08:35:04', 16),
('36.37.179.240', 'Phnom Penh', '2023-07-30 08:35:13', 20),
('2a09:bac1:3ca0::12d:5', 'Phnom Penh', '2023-07-30 08:38:47', 35),
('2a09:bac5:46f7:bcd::12d:5', 'Phnom Penh', '2023-07-30 09:20:40', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-30 09:57:51', 26),
('2a09:bac5:46f1:bcd::12d:5', 'Phnom Penh', '2023-07-30 10:23:33', 35),
('2a09:bac1:3c80::17:166', 'Phnom Penh', '2023-07-30 10:31:49', 19),
('103.120.133.249', 'Phnom Penh', '2023-07-30 12:18:57', 36),
('2a09:bac5:46f0:e6::17:323', 'Phnom Penh', '2023-07-30 16:35:20', 14),
('2a09:bac5:46f3:e6::17:1fd', 'Phnom Penh', '2023-07-31 08:06:15', 19),
('36.37.179.240', 'Phnom Penh', '2023-07-31 08:25:21', 16),
('2a09:bac1:3cc0::12d:2', 'Phnom Penh', '2023-07-31 08:34:24', 14),
('36.37.179.240', 'Phnom Penh', '2023-07-31 08:39:16', 20),
('2a09:bac5:46f1:e6::17:180', 'Phnom Penh', '2023-07-31 08:50:16', 35),
('2a09:bac5:46f2:bcd::12d:4', 'Phnom Penh', '2023-07-31 08:52:23', 17),
('36.37.179.240', 'Phnom Penh', '2023-07-31 09:22:58', 13),
('2a09:bac1:3c80::17:180', 'Phnom Penh', '2023-07-31 13:43:36', 35),
('103.120.133.249', 'Phnom Penh', '2023-07-31 14:12:54', 26),
('103.120.133.249', 'Phnom Penh', '2023-07-31 14:40:17', 36),
('36.37.179.240', 'Phnom Penh', '2023-07-31 14:47:39', 1),
('2a09:bac1:3c80::17:180', 'Phnom Penh', '2023-07-31 15:51:23', 35),
('2a09:bac5:46f7:bcd::12d:9', 'Phnom Penh', '2023-08-01 08:23:26', 14),
('36.37.179.240', 'Phnom Penh', '2023-08-01 08:27:29', 16),
('103.120.133.249', 'Phnom Penh', '2023-08-01 08:35:37', 8),
('2a09:bac5:46f4:e6::17:221', 'Phnom Penh', '2023-08-01 08:55:30', 17),
('2a09:bac1:3ca0::17:323', 'Phnom Penh', '2023-08-01 09:35:22', 35),
('2a09:bac5:46f0:bcd::12d:8', 'Phnom Penh', '2023-08-01 11:19:48', 15),
('36.37.179.240', 'Phnom Penh', '2023-08-01 11:56:09', 20),
('2a09:bac1:3cc0::17:323', 'Phnom Penh', '2023-08-01 15:16:35', 35),
('103.120.133.249', 'Phnom Penh', '2023-08-01 15:51:22', 36),
('2a09:bac1:3cc0::17:1fe', 'Phnom Penh', '2023-08-02 08:01:13', 17),
('2a09:bac1:3cc0::17:1fe', 'Phnom Penh', '2023-08-02 08:01:17', 17),
('103.120.133.249', 'Phnom Penh', '2023-08-02 08:21:50', 16),
('2a09:bac1:3cc0::12d:a', 'Phnom Penh', '2023-08-02 08:23:34', 14),
('36.37.179.240', 'Phnom Penh', '2023-08-02 09:45:02', 1),
('36.37.179.240', 'Phnom Penh', '2023-08-02 09:46:38', 1),
('36.37.179.240', 'Phnom Penh', '2023-08-02 09:50:17', 36),
('2a09:bac5:46f6:bcd::12d:5', 'Phnom Penh', '2023-08-02 11:06:07', 35),
('2a09:bac5:46f2:bcd::12d:2', 'Phnom Penh', '2023-08-02 12:47:47', 19),
('36.37.179.240', 'Phnom Penh', '2023-08-02 14:46:12', 1),
('2a09:bac5:46f6:bcd::12d:5', 'Phnom Penh', '2023-08-02 15:27:59', 35),
('103.120.133.249', 'Phnom Penh', '2023-08-03 08:04:27', 8),
('2a09:bac5:46f3:e6::17:175', 'Phnom Penh', '2023-08-03 08:35:21', 19),
('36.37.179.240', 'Phnom Penh', '2023-08-03 08:37:42', 36),
('2a09:bac1:3c80::17:12a', 'Phnom Penh', '2023-08-03 09:09:55', 14),
('2a09:bac5:46f3:e6::17:235', 'Phnom Penh', '2023-08-03 09:43:28', 35),
('36.37.179.240', 'Phnom Penh', '2023-08-03 09:45:17', 13),
('2a09:bac5:46f7:e6::17:235', 'Phnom Penh', '2023-08-03 10:53:43', 35),
('2a09:bac5:46f0:bcd::12d:8', 'Phnom Penh', '2023-08-04 07:59:49', 19),
('103.120.133.249', 'Phnom Penh', '2023-08-04 08:15:33', 36),
('36.37.179.240', 'Phnom Penh', '2023-08-04 08:22:16', 1),
('36.37.179.240', 'Phnom Penh', '2023-08-04 08:36:36', 16),
('2a09:bac1:3ca0::12d:5', 'Phnom Penh', '2023-08-04 09:04:45', 17),
('36.37.179.240', 'Phnom Penh', '2023-08-04 09:21:55', 11),
('103.120.133.249', 'Phnom Penh', '2023-08-04 09:24:13', 1),
('2a09:bac5:46f0:bcd::12d:a', 'Phnom Penh', '2023-08-04 12:39:19', 15),
('2a09:bac1:3cc0::17:229', 'Phnom Penh', '2023-08-04 15:17:50', 35),
('2a09:bac5:46f6:e6::17:229', 'Phnom Penh', '2023-08-04 17:11:06', 35),
('2a09:bac1:3ca0::17:202', 'Phnom Penh', '2023-08-04 17:24:02', 14),
('36.37.179.237', 'Phnom Penh', '2023-08-04 17:55:31', 20),
('36.37.179.237', 'Phnom Penh', '2023-08-04 17:55:37', 20),
('36.37.179.237', 'Phnom Penh', '2023-08-04 17:55:46', 20),
('36.37.179.237', 'Phnom Penh', '2023-08-04 17:59:49', 20),
('103.120.133.249', 'Phnom Penh', '2023-08-05 08:13:12', 16),
('2a09:bac5:46f0:bcd::12d:7', 'Phnom Penh', '2023-08-05 08:25:24', 17),
('2a09:bac5:46f3:e6::17:23d', 'Phnom Penh', '2023-08-05 08:25:43', 19),
('36.37.179.237', 'Phnom Penh', '2023-08-05 08:28:21', 22),
('103.120.133.249', 'Phnom Penh', '2023-08-05 09:11:34', 13),
('2a09:bac1:3cc0::17:24e', 'Phnom Penh', '2023-08-05 09:51:45', 35),
('36.37.179.242', 'Phnom Penh', '2023-08-05 13:38:43', 36),
('36.37.179.242', 'Phnom Penh', '2023-08-05 15:11:18', 35),
('36.37.179.238', 'Phnom Penh', '2023-08-05 17:37:08', 14),
('36.37.179.195', 'Phnom Penh', '2023-08-06 07:59:24', 36),
('103.120.133.249', 'Phnom Penh', '2023-08-06 08:10:26', 17),
('36.37.179.195', 'Phnom Penh', '2023-08-06 08:27:20', 19),
('36.37.179.195', 'Phnom Penh', '2023-08-06 08:28:22', 16),
('36.37.179.195', 'Phnom Penh', '2023-08-06 08:31:36', 35),
('36.37.179.235', 'Phnom Penh', '2023-08-06 13:35:44', 15),
('36.37.179.235', 'Phnom Penh', '2023-08-06 14:14:18', 36),
('103.120.133.249', 'Phnom Penh', '2023-08-06 14:46:47', 8),
('36.37.179.235', 'Phnom Penh', '2023-08-06 14:52:51', 35),
('36.37.179.235', 'Phnom Penh', '2023-08-06 16:08:44', 35),
('103.120.133.249', 'Phnom Penh', '2023-08-06 16:33:14', 1),
('103.120.133.249', 'Phnom Penh', '2023-08-06 16:41:14', 9),
('36.37.179.235', 'Phnom Penh', '2023-08-07 08:08:41', 14),
('36.37.179.235', 'Phnom Penh', '2023-08-07 08:18:33', 16),
('36.37.179.235', 'Phnom Penh', '2023-08-07 08:19:27', 19),
('36.37.179.235', 'Phnom Penh', '2023-08-07 08:24:19', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-07 08:43:16', 13),
('36.37.179.235', 'Phnom Penh', '2023-08-07 12:26:26', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-07 13:04:30', 35),
('36.37.179.240', 'Phnom Penh', '2023-08-07 15:03:13', 8),
('36.37.179.235', 'Phnom Penh', '2023-08-08 08:14:25', 14),
('36.37.179.235', 'Phnom Penh', '2023-08-08 08:37:11', 36),
('36.37.179.240', 'Phnom Penh', '2023-08-08 08:56:12', 8),
('36.37.179.235', 'Phnom Penh', '2023-08-08 09:07:05', 17),
('36.37.179.235', 'Phnom Penh', '2023-08-08 09:12:31', 13),
('36.37.179.235', 'Phnom Penh', '2023-08-08 10:04:30', 16),
('36.37.179.235', 'Phnom Penh', '2023-08-08 11:31:39', 19),
('36.37.179.235', 'Phnom Penh', '2023-08-08 14:04:01', 35),
('36.37.179.235', 'Phnom Penh', '2023-08-08 14:38:36', 35),
('36.37.179.235', 'Phnom Penh', '2023-08-08 17:37:26', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-08 17:37:37', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-09 07:55:23', 17),
('36.37.179.235', 'Phnom Penh', '2023-08-09 08:17:54', 19),
('36.37.179.235', 'Phnom Penh', '2023-08-09 08:41:25', 16),
('36.37.179.235', 'Phnom Penh', '2023-08-09 09:42:27', 19),
('36.37.179.235', 'Phnom Penh', '2023-08-09 10:17:28', 13),
('36.37.179.235', 'Phnom Penh', '2023-08-09 10:57:00', 15),
('36.37.179.235', 'Phnom Penh', '2023-08-09 11:46:12', 36),
('36.37.179.240', 'Phnom Penh', '2023-08-09 11:50:10', 21),
('103.120.133.249', 'Phnom Penh', '2023-08-09 12:55:18', 9),
('36.37.179.240', 'Phnom Penh', '2023-08-09 12:57:53', 1),
('36.37.179.235', 'Phnom Penh', '2023-08-09 17:18:00', 36),
('36.37.179.235', 'Phnom Penh', '2023-08-09 17:47:33', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-10 07:51:30', 22),
('36.37.179.235', 'Phnom Penh', '2023-08-10 08:25:47', 17),
('36.37.179.235', 'Phnom Penh', '2023-08-10 08:30:56', 20),
('36.37.179.235', 'Phnom Penh', '2023-08-10 08:32:41', 19),
('36.37.179.235', 'Phnom Penh', '2023-08-10 08:36:19', 14),
('36.37.179.235', 'Phnom Penh', '2023-08-10 11:26:36', 16),
('36.37.179.206', 'Phnom Penh', '2023-08-10 12:41:30', 29),
('36.37.179.206', 'Phnom Penh', '2023-08-10 12:42:23', 29),
('36.37.179.220', 'Phnom Penh', '2023-08-10 13:57:31', 35),
('2a09:bac5:46f1:bcd::12d:2', 'Phnom Penh', '2023-08-10 14:02:28', 35),
('36.37.179.220', 'Phnom Penh', '2023-08-10 14:23:42', 36),
('36.37.179.206', 'Phnom Penh', '2023-08-10 15:23:55', 1),
('36.37.179.220', 'Phnom Penh', '2023-08-10 18:01:17', 20),
('2a09:bac5:46f6:bcd::12d:7', 'Phnom Penh', '2023-08-11 08:14:08', 14),
('2a09:bac1:3ca0::12d:4', 'Phnom Penh', '2023-08-11 08:17:31', 29),
('2a09:bac5:46f0:bcd::12d:a', 'Phnom Penh', '2023-08-11 08:18:47', 17),
('36.37.179.220', 'Phnom Penh', '2023-08-11 09:23:44', 36),
('36.37.179.220', 'Phnom Penh', '2023-08-11 09:28:52', 16),
('36.37.179.206', 'Phnom Penh', '2023-08-11 11:33:41', 1),
('::1', '', '2023-08-11 13:40:48', 1),
('::1', '', '2023-08-12 12:47:53', 1),
('::1', '', '2023-08-13 12:19:07', 1),
('::1', '', '2023-08-13 13:46:52', 1),
('::1', '', '2023-08-14 08:34:30', 1),
('::1', '', '2023-08-14 12:39:04', 1),
('::1', '', '2023-08-14 12:39:07', 1),
('::1', '', '2023-08-15 12:20:17', 1),
('::1', '', '2023-08-16 13:31:25', 1),
('::1', '', '2023-08-17 12:23:26', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rotation`
--

CREATE TABLE `rotation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo_demo` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rotation`
--

INSERT INTO `rotation` (`id`, `name`, `photo_demo`, `photo`) VALUES
(1, 'Vòng Quay Bóng Vip', '[\"ip_dm_1\", \"ip_dm_2\", \"ip_dm_3\", \"ip_dm_4\", \"ip_dm_5\", \"adr_dm_1\", \"adr_dm_2\", \"adr_dm_3\", \"adr_dm_4\", \"adr_dm_5\"]', '[\"ip_1\", \"ip_2\", \"ip_3\", \"ip_4\", \"ip_5\", \"adr_1\", \"adr_2\", \"adr_3\", \"adr_4\", \"adr_5\"]'),
(2, 'Vòng Quay MG188', '[\"ip_dm_1\", \"ip_dm_2\", \"ip_dm_3\", \"ip_dm_4\", \"ip_dm_5\", \"adr_dm_1\", \"adr_dm_2\", \"adr_dm_3\", \"adr_dm_4\", \"adr_dm_5\"]', '[\"ip_1\", \"ip_2\", \"ip_3\", \"ip_4\", \"ip_5\", \"adr_1\", \"adr_2\", \"adr_3\", \"adr_4\", \"adr_5\"]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `level` tinyint(4) NOT NULL DEFAULT 2,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `token`, `level`, `created_at`) VALUES
(1, 'bill@onfa.asia', 'c81e728d9d4c2f636f067f89cc14862c', '73837', 1, '2023-08-17 12:23:27'),
(2, 'kane@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-05-09 10:39:53'),
(3, 'bond@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-05-06 12:52:52'),
(4, 'soda@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-05-06 12:52:52'),
(5, 'nobel@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-05-06 09:46:45'),
(6, 'ben@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '92197', 2, '2023-06-23 14:40:38'),
(7, 'eagle@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '54063', 2, '2023-07-09 11:43:15'),
(8, 'marco@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '52424', 2, '2023-08-08 08:56:12'),
(9, 'pull@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '51999', 2, '2023-08-09 12:55:18'),
(10, 'luna@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-05-06 09:47:28'),
(11, 'vision@onfa.asia', 'da4ef46c9b3918c29a56e001e1f2c8e6', '35518', 2, '2023-08-04 09:21:55'),
(12, 'bill2@onfa.asia', 'c4ca4238a0b923820dcc509a6f75849b', NULL, 2, '2023-05-06 12:52:52'),
(13, 'luffy@onfa.asia', '50c57cdfeda7c809a75bb3b1dc093639', '23885', 2, '2023-08-09 10:17:28'),
(14, 'eric@onfa.asia', 'd893377c9d852e09874125b10a0e4f66', '56776', 2, '2023-08-11 08:14:08'),
(15, 'justin@onfa.asia', '8e1eddb6e9e594527956762f17aa573b', '65606', 2, '2023-08-09 10:57:00'),
(16, 'bin@onfa.asia', '07fbcc1e149268b9824b1b13ff11fc87', '33596', 2, '2023-08-11 09:28:53'),
(17, 'luis@onfa.asia', '04da44b80102d3caeec73f36b13f518f', '30890', 2, '2023-08-11 08:18:48'),
(18, 'ruby@onfa.asia', '2c849edc58ae8804c0fb3fe431ed9175', '65170', 2, '2023-07-24 08:50:01'),
(19, 'peter@onfa.asia', 'fdb11f94cb32d8affbbb54f876b1c89f', '28865', 2, '2023-08-10 08:32:42'),
(20, 'robert@onfa.asia', 'a82762f30c1a27faa4f256b24fcaff24', '74873', 2, '2023-08-10 18:01:17'),
(21, 'wille@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '29024', 2, '2023-08-09 11:50:10'),
(22, 'ryan@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '38813', 2, '2023-08-10 07:51:30'),
(23, 'ship@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-06-23 14:42:44'),
(24, 'samson@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-06-23 14:42:53'),
(25, 'kevin@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '58225', 2, '2023-06-23 14:55:06'),
(26, 'john@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '10100', 2, '2023-07-31 14:12:54'),
(28, 'eddy@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '56166', 2, '2023-07-09 11:28:33'),
(29, 'coldy@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '23776', 2, '2023-08-11 08:17:32'),
(30, 'celine@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-06-23 14:44:04'),
(32, 'odd@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-06-23 14:48:06'),
(33, 'kun@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '72710', 2, '2023-06-23 14:57:03'),
(34, 'shyn@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-07-03 08:44:45'),
(35, 'lee@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '67315', 2, '2023-08-10 14:02:28'),
(36, 'leo@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', '59045', 2, '2023-08-11 09:23:44'),
(37, 'nami@onfa.asia', 'e813d110e1ce024d3fa2f43b214fa5c2', NULL, 2, '2023-07-19 09:14:26');

-- --------------------------------------------------------

--
-- Table structure for table `withdrawal`
--

CREATE TABLE `withdrawal` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `photo_demo` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `photo_black` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdrawal`
--

INSERT INTO `withdrawal` (`id`, `name`, `photo_demo`, `photo`, `photo_black`) VALUES
(1, 'Tạo Bill rút tiền Bóng Vip', 'demo-bet-1.png', 'bet-1.png', NULL),
(2, 'Tạo Bill rút tiền MG188', 'demo-mg188.png', 'mg188.png', 'mg188_black.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bet`
--
ALTER TABLE `bet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bet_users`
--
ALTER TABLE `bet_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ip_users`
--
ALTER TABLE `ip_users`
  ADD KEY `id_users` (`id_users`);

--
-- Indexes for table `rotation`
--
ALTER TABLE `rotation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `withdrawal`
--
ALTER TABLE `withdrawal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bet`
--
ALTER TABLE `bet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bet_users`
--
ALTER TABLE `bet_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rotation`
--
ALTER TABLE `rotation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `withdrawal`
--
ALTER TABLE `withdrawal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ip_users`
--
ALTER TABLE `ip_users`
  ADD CONSTRAINT `ip_users_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

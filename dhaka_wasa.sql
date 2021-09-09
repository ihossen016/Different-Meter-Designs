-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2021 at 01:33 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dhaka_wasa`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'test@test.com'),
(2, 'ismail', '1234', 'ismail@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `control`
--

CREATE TABLE `control` (
  `sl` int(11) NOT NULL,
  `ps` int(11) NOT NULL,
  `vfd` int(11) NOT NULL,
  `mc` int(11) NOT NULL,
  `vfd_vol` int(11) NOT NULL,
  `vfd_po` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `control`
--

INSERT INTO `control` (`sl`, `ps`, `vfd`, `mc`, `vfd_vol`, `vfd_po`) VALUES
(1, 15, 14, 44, 56, 77);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard`
--

CREATE TABLE `dashboard` (
  `sl` int(11) NOT NULL,
  `wfr` int(11) NOT NULL,
  `pwc` int(11) NOT NULL,
  `pre` int(11) NOT NULL,
  `vfd` int(11) NOT NULL,
  `ps` int(11) NOT NULL,
  `pc` int(11) NOT NULL,
  `loh` int(11) NOT NULL,
  `ph` int(11) NOT NULL,
  `pp` int(11) NOT NULL,
  `pro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashboard`
--

INSERT INTO `dashboard` (`sl`, `wfr`, `pwc`, `pre`, `vfd`, `ps`, `pc`, `loh`, `ph`, `pp`, `pro`) VALUES
(1, 10, 12, 13, 14, 15, 16, 17, 18, 19, 11);

-- --------------------------------------------------------

--
-- Table structure for table `hydrodata`
--

CREATE TABLE `hydrodata` (
  `Id` int(40) NOT NULL,
  `Date` date NOT NULL,
  `LenghtofHousing` int(40) NOT NULL,
  `StaticWaterLevel` int(40) NOT NULL,
  `PumpingWaterLevel` int(40) NOT NULL,
  `PumpPosition` int(40) NOT NULL,
  `PresentWaterColumn` int(40) NOT NULL,
  `PumpCapacity` int(40) NOT NULL,
  `PumpHead` int(40) NOT NULL,
  `MotorCapacity` int(40) NOT NULL,
  `ColumnPipeDia` int(40) NOT NULL,
  `TotalFixtureLength` int(40) NOT NULL,
  `StrainerLength` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hydrodata`
--

INSERT INTO `hydrodata` (`Id`, `Date`, `LenghtofHousing`, `StaticWaterLevel`, `PumpingWaterLevel`, `PumpPosition`, `PresentWaterColumn`, `PumpCapacity`, `PumpHead`, `MotorCapacity`, `ColumnPipeDia`, `TotalFixtureLength`, `StrainerLength`) VALUES
(1, '2021-08-25', 22, 33, 44, 5, 66, 77, 88, 9, 111, 22, 333),
(2, '2021-08-26', 22, 45, 4, 55, 6, 7, 8, 99, 11, 222, 33),
(3, '2021-09-01', 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(4, '2021-09-01', 22, 75, 77, 50, 60, 100, 5, 100, 24, 46, 85),
(5, '2021-09-01', 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(6, '2021-09-01', 33, 100, 99, 90, 80, 76, 9, 90, 35, 45, 65);

-- --------------------------------------------------------

--
-- Table structure for table `loginform`
--

CREATE TABLE `loginform` (
  `id` int(40) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loginform`
--

INSERT INTO `loginform` (`id`, `username`, `password`) VALUES
(1, 'zahid', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `pumpdata`
--

CREATE TABLE `pumpdata` (
  `PumpHouseName` varchar(40) NOT NULL,
  `Id` int(40) NOT NULL,
  `Address` int(40) NOT NULL,
  `PumpBrand` int(40) NOT NULL,
  `SerialNo` int(40) NOT NULL,
  `VFDBrand` int(40) NOT NULL,
  `TransformerBand` int(40) NOT NULL,
  `NumberofWell` int(40) NOT NULL,
  `Typeofwell` int(40) NOT NULL,
  `TypeofFeeder` int(40) NOT NULL,
  `ConstructionDate` int(40) NOT NULL,
  `CommissioningDate` int(40) NOT NULL,
  `VFDCapacity` int(40) NOT NULL,
  `PumpCapacity` int(40) NOT NULL,
  `CableSize` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `Sl` int(40) NOT NULL,
  `Date` date NOT NULL,
  `Flow` int(40) NOT NULL,
  `Level` int(40) NOT NULL,
  `Runtime` int(40) NOT NULL,
  `Stoptime` int(40) NOT NULL,
  `KWH` int(40) NOT NULL,
  `Production` int(40) NOT NULL,
  `Production Cum` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`Sl`, `Date`, `Flow`, `Level`, `Runtime`, `Stoptime`, `KWH`, `Production`, `Production Cum`) VALUES
(1, '2021-08-29', 43, 23, 10, 33, 44, 55, 55),
(2, '2021-08-30', 43, 55, 12, 55, 44, 66, 67),
(3, '2021-08-27', 43, 23, 5, 33, 44, 55, 55),
(4, '2021-08-18', 43, 23, 8, 33, 44, 66, 55);

-- --------------------------------------------------------

--
-- Table structure for table `report2`
--

CREATE TABLE `report2` (
  `Sl` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Flow` int(11) NOT NULL,
  `Level` int(11) NOT NULL,
  `Runtime` int(11) NOT NULL,
  `KWH` int(11) NOT NULL,
  `Production` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `report2`
--

INSERT INTO `report2` (`Sl`, `Date`, `Flow`, `Level`, `Runtime`, `KWH`, `Production`) VALUES
(1, '2021-08-30', 43, 23, 5, 44, 55),
(2, '2021-08-31', 43, 23, 22, 44, 55),
(3, '2021-08-27', 45, 65, 7, 33, 66);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hydrodata`
--
ALTER TABLE `hydrodata`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `loginform`
--
ALTER TABLE `loginform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pumpdata`
--
ALTER TABLE `pumpdata`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`Sl`);

--
-- Indexes for table `report2`
--
ALTER TABLE `report2`
  ADD PRIMARY KEY (`Sl`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hydrodata`
--
ALTER TABLE `hydrodata`
  MODIFY `Id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `loginform`
--
ALTER TABLE `loginform`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `Sl` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `report2`
--
ALTER TABLE `report2`
  MODIFY `Sl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

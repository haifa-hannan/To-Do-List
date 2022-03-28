-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Mar 2022 pada 02.23
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_praktikum3`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `praktikum3`
--

CREATE TABLE `praktikum3` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `status` enum('com','uncom') NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `praktikum3`
--

INSERT INTO `praktikum3` (`id`, `title`, `status`, `createdAt`, `updatedAt`) VALUES
(9, 'plan 1', 'com', '2022-03-20', '2022-03-28'),
(62, 'plan 2', 'com', '2022-03-23', '2022-03-23'),
(74, 'plan 3', 'com', '2022-03-23', '2022-03-23'),
(88, 'plan 4', 'com', '2022-03-26', '2022-03-26');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `praktikum3`
--
ALTER TABLE `praktikum3`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `praktikum3`
--
ALTER TABLE `praktikum3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

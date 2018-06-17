-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 11, 2018 lúc 06:14 AM
-- Phiên bản máy phục vụ: 10.1.32-MariaDB
-- Phiên bản PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cardb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `CatID` int(11) UNSIGNED NOT NULL,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`CatID`, `CatName`) VALUES
(1, 'Ferrari'),
(2, 'Bugatti'),
(3, 'Pagani'),
(4, 'Lamborghini'),
(5, 'Porsche');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `ProID` int(11) UNSIGNED NOT NULL,
  `ProName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TinyDes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `FullDes` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `CatID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Origin` varchar(255) NOT NULL,
  `Seen` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`ProID`, `ProName`, `TinyDes`, `FullDes`, `Price`, `CatID`, `Quantity`, `Origin`, `Seen`) VALUES
(1, 'Ferrari LaFerrari\r\n', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari F12berlinetta được bán dưới dạng một chiếc coupe hoặc convertible, tính năng quan trọng nhất là chiếc V-8 6.2 lít tăng áp làm cho 650 mã lực và 650 lb-ft', 700000, 1, 50, 'Ferrari', 0),
(2, 'Ferrari FF\r\n', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari FF là vua của những chiếc xe cơ bắp. Cả hai chiếc coupe và nhà chuyển đổi một hung dữ 650 mã lực tăng áp 6.2 lít V-8 tặng bởi Corvette Z06', 50000, 1, 40, 'Ferrari', 0),
(3, 'Ferrari Ferrari 488 GTB\r\n', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari Ferrari 488 GTB là siêu xe cực kỳ mạnh mẽ. Một người bạn V-10 5.2 lít kỳ lạ với một ly hợp kép tự động bảy tốc độ . Mã lực dao động từ 572', 203295, 1, 120, 'Ferrari', 0),
(4, 'Ferrari 488 Spider\r\nFerrari 458 Speciale', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari 488 Spider với siêu xe nhẹ, khí động học, dữ dội và 720S là bằng chứng. Một đôi-turbo 2.0 lít V-8 twin-turbo ổ đĩa bánh sau thông qua một bảy tốc độ tự động', 288845, 1, 90, 'Ferrari', 0),
(5, 'Ferrari 458 Speciale', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari 458 Speciale với một cặp turbo tăng cường mô-men xoắn (cơ sở là 2.0 lít 300 mã lực)và giai điệu của S 2,5 lít phẳng bốn đến 365 mã lực', 58450, 1, 45, 'Ferrari', 0),
(6, 'Ferrari Ferrari California T', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Ferrari Ferrari California T vẫn được thiết lập cùng với roadster đối tác của nó-có 4,0 lít twin-turbo V-8 kết nối với một bảy hộp số tự động Ferrari California T', 113395, 1, 60, 'Ferrari', 0),
(7, 'Ferrari F12tdf\r\n', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Với một động cơ V-8 twin-turbo 2.2-lít gắn trên giữa, F12tdf tăng tốc tất cả các cách để 8000 rpm, nơi nó làm cho 661h', 256550, 1, 10, 'Ferrari', 0),
(8, 'Ferrari LaFerrari\r\n', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Cặp đôi turbo của LaFerrari (cơ sở có công suất 300 mã lực 2.0 lít; S có công suất 350 mã lực 2,5 lít) nhưng chúng bị hỏng và nhanh', 56350, 1, 20, 'Ferrari', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CatID`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `CatID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `ProID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

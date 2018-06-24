/*
 Navicat Premium Data Transfer

 Source Server         : Project
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : cardb

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 24/06/2018 17:34:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `CatID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`CatID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Sport');
INSERT INTO `categories` VALUES (2, 'Convertible');
INSERT INTO `categories` VALUES (3, 'Crossover');
INSERT INTO `categories` VALUES (4, 'Sedan');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `ProID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TinyDes` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `FullDes` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `CatID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Manufacturer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Seen` int(50) NOT NULL,
  `Origin` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `DateAdded` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'BMW M4', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'BMW M4 được bán dưới dạng một chiếc coupe hoặc convertible, tính năng quan trọng nhất là chiếc V-8 6.2 lít tăng áp làm cho 650 mã lực và 650 lb-ft', 700000, 1, 50, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (2, 'BMW M6 Gran', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'BMW M6 Gran là vua của những chiếc xe cơ bắp. Cả hai chiếc coupe và nhà chuyển đổi một hung dữ 650 mã lực tăng áp 6.2 lít V-8 tặng bởi Corvette Z06', 50000, 1, 40, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (3, 'BMW I8', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'BWm I8 coupe là siêu xe cực kỳ mạnh mẽ. Một người bạn V-10 5.2 lít kỳ lạ với một ly hợp kép tự động bảy tốc độ . Mã lực dao động từ 572', 203295, 1, 120, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (4, 'Lexus RC', 'Siêu xe chuyên dụng để chạy Grab, có động cơ 1000 mã lực', 'Lexus RC với siêu xe nhẹ, khí động học, dữ dội và 720S là bằng chứng. Một đôi-turbo 2.0 lít V-8 twin-turbo ổ đĩa bánh sau thông qua một bảy tốc độ tự động', 288845, 1, 90, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (5, 'Mercedes-Benz S65 AMG', 'Mercedes-Benz cùng sử dụng chung động cơ V8, tăng áp kép', 'Mercedes-Benz S65 AMG trang bị động cơ V12, tăng áp kép, dung tích 6 lít  cho công suất cực đại 621 mã lực, mô-men xoắn cực đại 1.000 Nm', 58450, 1, 45, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (6, 'Lexus LC Hybrid', 'Xe có khả năng tăng tốc từ 0 lên 100 km/h trong 3,7 giây', 'Lexus LC Hybrid trang bị động cơ V8 tăng áp 4.0 lít cho công suất cực đại 560 mã lực và mô-men xoắn cực đại 700 Nm', 113395, 1, 60, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (7, 'Porsche Panamera Turbo S', 'Xe chỉ mất 3,6 giây để tăng tốc từ 0 lên 100 km/h, tốc độ tối đa trên 310 km/h.', 'Porsche Panamera trang bị động cơ V8, tăng áp kép, dung tích 4,8 lít cho công suất cực đại 570 mã lực và mô-men xoắn cực đại 750 Nm', 256550, 1, 10, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (8, 'Porsche 911 GT2 RS', 'Porsche 911 GT2 RS tăng tốc từ 0-100 km/h mất 4,7 giây rất ấn tượng', 'Porsche 911 GT2 RS được sản xuất số lượng giới hạn trang bị động cơ V12, turbin kép, dung tích 6,6 lít cho công suất cực đại 593 mã lực, mô-men xoắn 780 Nm', 56350, 1, 20, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (9, 'Mercedes-Benz S65 AMG', ' S-Class mất 4,2 giây để  tăng tốc từ 0 tới 100 km/h và đạt tốc độ tối đa 250 km/h', 'Mercedes-Benz S65 AMG trang bị động cơ V12, tăng áp kép, dung tích 6 lít  cho công suất cực đại 621 mã lực, mô-men xoắn cực đại 1.000 Nm', 311000, 1, 70, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (10, 'BMW X6', 'Cross hạng sang nhà BMW mang phong cách thể thao, rộng và phẳng ', 'BMW X6 2017 được thiết kế lại hoàn toàn, có thể nói đây là lần cách tân kiểu dáng rõ rệt nhất trên X6 kể từ khi chiếc Crossover này ra đời năm 2007', 548000, 3, 30, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (11, 'Porsche Macan 2018', 'Porsche Macan 2017 n với động cơ tăng áp 4 xi-lanh và một bản GTS thể thao', 'Porsche Macan 2017 nhận được bổ sung 2 cấp độ cơ sở mới: phiên bản cơ sở mới với động cơ tăng áp 4 xi-lanh và một bản GTS thể thao. ', 800000, 3, 75, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (12, 'Mercedes-Benz GLS', 'Mercedes-Benz GLS 2017 chính là mẫu xe thể thao vừa sang trọng', 'Mercedes-Benz GLS 2017, đặc biệt với phiên bản GLS 500 4MATIC V8 4,7 lít cho 455 mã lực mà mô-men xoắn 700Nm đã hoàn thành xuất sắc vòng lái trên dãy Alps', 500000, 3, 75, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (13, 'BMW X6 M', 'Mẫu xe offroad chuyên nghiệp BMW X6 M phiên bản Unlimited Rubicon 4x4', 'Động cơ BMW X6 M Unlimited Rubicon 4x4 2017 là loại V6 3.6L VVT phun nhiên liệu trực tiếp sản sinh công suất tối đa 285 mã lực tại vòng tua máy 6.400 v/p', 200000, 3, 65, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (14, 'Lexus RX Hybrid', 'Mẫu compact SUV duy nhất có động cơ diesel, Hybrid có lợi thế của riêng mình', 'Mẫu compact SUV duy nhất cạnh tranh được với nó là Toyota RAV4 Hybrid AWD với mức tiêu thụ nhiên liệu trung bình cũng là 7,4 l/100km. RAV4 và Hybrid giá tương đương', 300000, 3, 85, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (15, 'Lexus RX350L', 'Crossover hạng sang 7 chỗ ngồi Lexus RX350L mang đến sự lựa chọn cho giới nhà giàu ', 'Lexus RX350L 2018 trang bị động cơ V6, dung tích 3.5 lít, sản sinh công suất tối đa 390 mã lực tại vòng tua máy 6.300 vòng/phút và mô-men xoắn cực đại 363 Nm', 600000, 3, 51, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (16, 'BMW X5 ', 'BMW X5 là dòng SUV hạng sang được thiết kế trên nền tảng khung gầm dòng 5 series', 'BMW X5 2017 xDrive35i dẫn động 4 bánh sở hữu khối động cơ tăng áp I6, dung tích 3.0L với công suất 306 mã lực và momen xoắn 400 Nm, tăng tốc lên từ 0-100km/h mất 6.5 s', 450000, 3, 14, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (17, 'Porsche Cayenne', 'Porsche Cayenne 2017 là bước đột phá đầu tiên của hãng xe Ý trong thế giới', 'Porsche Cayenne 2017 đều được trang bị hệ dẫn động 4 bánh toàn thời gian cùng một hộp số 8 cấp tự động. Động cơ tăng áp V6 3.0 lít có hai mức hiệu suất khác nhau', 380000, 3, 43, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (18, 'Mercedes-Benz GLE 35', 'Mercedes-Benz GLE  là mẫu SUV Mang trong mình ngoại hình thể thao mạnh mẽ', 'Mercedes-Benz GLE 2017 tiêu chuẩn đi kèm với hệ dẫn động 4 bánh, hộp số tự động 8 cấp, lẫy chuyển số, hỗ trợ leo đồi và hệ thống stop-start tự động công suất 340 mã lực ', 320000, 3, 25, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (19, 'Mercedes-Benz GLA', 'Mercedes-Benz GLA ghi dấu ấn bằng cụm đèn hậu thiết kế độc đáo chạy dọc đuôi xe', 'Động cơ 4 xy-lanh, dung tích 2.0L của Mercedes-Benz GLA có công suất tối đa 320 mã lực, lực mô-men xoắn cực đại 400 Nm được trang bị cả hệ thống tăng áp và siêu nạp', 475000, 3, 88, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (20, 'Lexus LS Hybrid', 'Lexus LS Hybrid 2018 là thế hệ thứ 8 của dòng Lexu trứ danh về sự sang trọng', 'Xe được trang bị động cơ Biturbo V12 6,6 lít cho ra công suất 563 mã lực và 820Nm mô-men xoắn cực đại xe dễ dàng tăng tốc từ 0 – 96 km/h chỉ với 4,9 giây', 700000, 4, 35, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (21, 'Lexus GS F', 'Lexus GS F 2018 là phiên bản trục dài của chiếc sedan hạng sang thể thao', 'Lexus GS F trang bị tất cả các tùy chọn động cơ , từ động cơ 3.0L đến động cơ V8 twin turbo 4.0L  trên Panamera Turbo Executive, động cơ 4.0L mạnh mẽ', 439000, 4, 67, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (22, 'Lexus ES Hybrid', 'Lexus Hybrid là một trong những mẫu xe sang trọng nhất, phiên bản tối tượng là Lexus', 'Lexus ES Hybrid được trang bị động cơ Biturbo V12 5.0 lít sản sinh công suất 622 mã lực và 1.000Nm mô-men xoắn cực đại. Tăng tốc từ 0 - 100 km/h trong vòng 7 giây', 846000, 4, 48, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (23, 'Porsche 718 Cayman', 'Siêu Porsche 718 Cayman là chiếc xe mạnh nhất và nhanh nhất tphân khúc', 'Porsche 718 Cayman vẫn được mệnh danh là “chiếc Sedan nhanh nhất thế giới” nhờ khối động cơ tăng áp kép W12 6.0L 12 xy-lanh, sản sinh sức mạnh tới 600 mã lực', 746000, 4, 66, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (24, 'Porsche Panamera 4', 'Xe Porsche Panamera 4 ghi điểm khi sở hữu thiết kế ngoại thất với những đường nét ', 'Khoang nội thất của Porsche Panamera 4là nơi tôi chỉ muốn vào mà không muốn ra. Từng chi tiết đều toát lên vẻ sang trọng tột độ từ cần số bọc da, khía rãnh kim cương', 554000, 4, 57, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (25, 'BMW I3', 'Nếu BMW I3 2018 không phải là chiếc sedan cỡ lớn hấp dẫn nhất trên thị trường hiện nay', 'BMW I3 2018 nổi bật trang trí với đèn OLED nằm ôm trọn chiều ngang xe. Audi cũng mang đến nhiều sự lựa chọn kích thước bánh xe cho BMW I3 2018 từ 17 inch đến 21 inch', 200000, 4, 41, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (26, 'BMW M5', '\r\nXe sedan BMW M5 được xem là đỉnh cao của các dòng sedan mà ai cũng đều muốn có', 'Xe được trang bị khối động cơ 550 mã lực 5.0 lít siêu tăng áp V-8 lấy từ chiếc xe hiệu suất cao BMW M5 sedan, rất mạnh mẽ, đi kèm với đó là hộp số tự động 8 cấp ấn tượng', 365000, 4, 78, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (27, 'BMW M3', 'Xe BMW M3 ra đời từ năm 1967 và thiết lập lên một tiêu chuẩn xe sang tại US', 'Xe sở hữu động cơ cỡ lớn 12 xy-lanh – cũng là dòng động cơ độc quyền không xuất hiện trên bất cứ mẫu xe BMW nào khác, động cơ 12 xy-lanh hay thế bởi hybrid V8', 415400, 4, 23, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (28, 'Mercedes-Benz E350', 'Mercedes E350 2018 là dòng xe sedan đầu bảng của thương hiệu xe hạng sanh Anh Quốc', 'Xe này mạnh mẽ tới 567 mã lực và 700Nm mô-men xoắn cực đại nhờ động cơ tăng áp V8 5.0 lít của Mercedes-Benz E350, tăng 24,6 mã lực so với thế hệ trước', 360000, 4, 19, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (29, 'Mercedes-Benz S65', 'Mercedes-Benz S65 được biết tới với khả năng, đốn gục mọi ánh nhìn của người đối diện', 'Mercedes-Benz S65 động cơ được sử dụng là 4.6L với công suất lên đến 382 mã lực với hộp số tự động 8 cấp. S 65 có khả năng đạt 100 km/h chỉ trong vòng 5.9 giây', 223000, 4, 46, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (30, 'Porsche 718 Boxster', 'Porsche 718 Boxster đã luôn tuân thủ theo \"Jinba-ittai\" - triết lý người và xe là một của Porsche', 'Porsche 718 Boxster được đánh giá cao với khoang cabin yên tĩnh, đặc biệt nổi trội hơn phiên bản roadster nhờ vật liệu cách âm dày hơn tiêu âm trong hệ truyền động', 54300, 2, 31, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (31, 'Porsche 718 Boxster S', 'Porsche 718 Boxster S được giới thiệu ra thị trường toàn cầu lần đầu tiên vào tháng 1/2017', 'Porsche 718 Boxster S đầu tiên về Việt Nam đều thuộc phiên bản động cơ 2.3L Ecoboost, đầu xe thiết kế lại, nội thất bên trong không nhiều thay đổi động cơ Coyote V8 5 lít', 60210, 2, 33, 'Porsche', 0, 'Germany', '18/06/2018');
INSERT INTO `products` VALUES (32, 'BMW M4', 'BMW M4 2018 là gương mặt sáng giá trong phân khúc xe thể thao hai cửa với kiểu dáng trẻ', 'BMW M4 2018 được trang bị nhiều tính năng an toàn trên xe bao gồm: Túi khí đầu gối, trên đầu và túi khí bên, hệ thống phanh ABS, chìa khóa thông minh, đèn pha', 48200, 2, 25, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (33, 'BMW Z4', 'BMW Z4 2018 có thiết kế cơ cấu mui xếp tiên tiến hàng đầu trong phân hạng Convertible', 'Động cơ xe 2.0L Turbo có công suất 275 mã lực tại 5.600v/ph và mô-men xoắn cực đại tới 400Nm tại 3.500-4.000v/ph, hộp số tự động 8 cấp và dẫn động cầu sau', 52300, 2, 91, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (34, 'BMW 4', 'BMW 4 Spider hấp dẫn đối với những người thích thương hiệu này từ cái nhìn đầu tiên', 'BMW 4 Convertible vẫn được trang bị động cơ I4 1.7L phun nhiên liệu trực tiếp có hỗ trợ tăng áp (tương tự phiên bản coupé), đi kèm với hộp số tự động 6 cấp ly hợp kép', 65900, 2, 88, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (35, 'Lexus LF-C2', 'Lexus LF-C2 2016 có những ưu điểm đặc biệt khiến chúng ta không thể xem thường nó', 'Công suất 160 mã lực và 230Nm mô men xoắn cực đại cho khối động cơ turbo 1,4l là một con số khá ấn tượng. Xe có khả năng luồn lách qua mật độ giao thông đông đúc', 23500, 2, 19, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (36, 'Lexus IS 350C', 'Lexus IS 350C không mui được mong đợi rằng sẽ sở hữu màu sơn cam rực rỡ', 'Khối động cơ này cho ra 755 mã lực tương tự như bản Coupe, điều này sẽ giúp chiếc xe thể thao mui trần mới của hãng xe Mỹ dễ dàng lướt nhanh một vòng Nurburgring', 59495, 2, 27, 'Lexus', 0, 'Japan', '22/06/2018');
INSERT INTO `products` VALUES (37, 'Mercedes-AMG GT', 'Mercedes-AMG GT Roadster đều có khả năng tăng tốc từ 0 - 96 km/h chỉ trong 3,9 giây', 'Khối động cơ tăng áp 2,5 lít 4 xi-lanh của cặp đôi Mercedes-AMG  mới có thể tạo ra công suất tối đa 365 mã lực và 430Nm mô-men xoắn cực đại,  hộp số ly hợp kép ', 68900, 2, 13, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (38, 'BMW 230i Convertible ', 'BMW 230i được biết tới với khả năng, đốn gục mọi ánh nhìn của người đối diện', 'BMW 230i được trang bị động cơ tăng áp 2 lít bốn xi-lanh sản sinh công suất 248 mã lực và mô-men xoắn 350Nm tăng tốc 0-100km/h trong 4,2 giây một cách thật ấn tượng', 57812, 2, 44, 'BMW', 0, 'Germany', '20/06/2018');
INSERT INTO `products` VALUES (39, 'Mercedes-Maybach 6 ', 'Mercedes-Maybach 6 cho biết F-Type hội tụ đầy đủ mọi yếu tố mà người dùng mong đợi', 'Xe với mẫu V8 dung tích 5.0 lít, sản sinh lên đến 548-570 mã lực, với khả năng tăng tốc ấn tượng từ 0-100km/h chỉ trong 3.7s. Góp phần không nhỏ cho sự linh hoạt', 78910, 2, 37, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');
INSERT INTO `products` VALUES (40, 'Mercedes S500L', 'được chú trọng trang bị các đặc tính, công nghệ hàng đầu nhất, đảm bảo hỗ trợ con xe vận hành xuất s', 'Tính năng kiểm soát lối đi bằng khối hệ thống Distronic tiện lợi là điểm cộng lớn giúp người lái xe cảm nhận thấy dễ chịu và thoải mái hơn nhiều, đặc biệt là khi lái xe đường dài. Sở hữu khối hệ thống này có thể giúp người điều khiển lái hàng trăm km không cần đạp ga. chiếc xe còn có khả năng đánh giá, nhận ra và phản xạ với các phương tiện, chướng ngại xung quanh và xử lý các phương án kịp thời nếu như có nguy cơ xẩy ra va chạm', 319000, 1, 10, 'Mercedes-Benz', 0, 'Germany', '16/06/2018');

SET FOREIGN_KEY_CHECKS = 1;

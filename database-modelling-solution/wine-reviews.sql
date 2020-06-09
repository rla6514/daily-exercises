CREATE TABLE `wines` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `variety_id` bigint unsigned,
  `winery_id` bigint unsigned,
  `title` varchar(127),
  `designation` varchar(127),
  `price_per_bottle` double(13,2)
);

CREATE TABLE `varieties` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(127)
);

CREATE TABLE `reviews` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `wine_id` bigint unsigned,
  `taster_id` bigint unsigned,
  `text` text,
  `rating` int
);

CREATE TABLE `tasters` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(127),
  `twitter` varchar(127) UNIQUE
);

CREATE TABLE `wineries` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `province_id` bigint unsigned,
  `region` varchar(127),
  `region_2` varchar(127),
  `name` varchar(127)
);

CREATE TABLE `countries` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(127)
);

CREATE TABLE `provinces` (
  `id` bigint unsigned PRIMARY KEY AUTO_INCREMENT,
  `country_id` bigint unsigned,
  `name` varchar(127)
);

ALTER TABLE `wines` ADD FOREIGN KEY (`variety_id`) REFERENCES `varieties` (`id`);

ALTER TABLE `wines` ADD FOREIGN KEY (`winery_id`) REFERENCES `wineries` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`wine_id`) REFERENCES `wines` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`taster_id`) REFERENCES `tasters` (`id`);

ALTER TABLE `wineries` ADD FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`);

ALTER TABLE `provinces` ADD FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

CREATE TABLE `cenicienta`.`color` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `description` VARCHAR(100),
  `date` DATE,
  `startTime` TIME,
  `endTime` TIME,
  PRIMARY KEY (`id`)
);

CREATE TABLE `cenicienta`.`perfect` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(12) NOT NULL,
  `value` VARCHAR(35) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

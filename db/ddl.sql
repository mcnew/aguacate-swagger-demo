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
  `code` VARCHAR(6) NOT NULL,
  `value` VARCHAR(20) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

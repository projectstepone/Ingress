-- CREATE DB
  -- CREATE SCHEMA `ingress` ;

-- Create users table;
CREATE TABLE `ingress`.`users` (
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` TINYINT NOT NULL DEFAULT 0,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

ALTER TABLE `ingress`.`users` 
ADD COLUMN `isAdmin` TINYINT NOT NULL DEFAULT 0 AFTER `isActive`;
ALTER TABLE `ingress`.`users` 
CHANGE COLUMN `isActive` `isActive` TINYINT NOT NULL DEFAULT 1 

-- Create Form Schema table;

-- CREATE TABLE `ingress`.`formConfiguration` (

CREATE TABLE `ingress`.`formConfiguration` (
  `form_config_id` VARCHAR(36) NOT NULL,
  `schema` JSON NULL,
  `created_by` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`form_config_id`),
  UNIQUE INDEX `form_config_id_UNIQUE` (`form_config_id` ASC) VISIBLE,
  INDEX `created_by_idx` (`created_by` ASC) VISIBLE,
  CONSTRAINT `created_by`
    FOREIGN KEY (`created_by`)
    REFERENCES `ingress`.`users` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);




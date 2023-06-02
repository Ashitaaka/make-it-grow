-- -------------------------------------------------
-- Schema u206369201_mig_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `u206369201_mig_db` ;
USE `u206369201_mig_db` ;

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`roles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(155) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`logins` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`places` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `place_name` VARCHAR(155) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(150) NOT NULL,
    `lastname` VARCHAR(150) NOT NULL,
    `service` VARCHAR(150) NOT NULL,
    `id_role` INT NOT NULL,
    `id_login` INT NOT NULL,
    `id_place` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_role`)
    REFERENCES `u206369201_mig_db`.`roles` (`id`),
    FOREIGN KEY (`id_login`)
    REFERENCES `u206369201_mig_db`.`logins` (`id`),
    FOREIGN KEY (`id_place`)
    REFERENCES `u206369201_mig_db`.`places` (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(155) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `id_comments` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`id_comments`)
    REFERENCES `u206369201_mig_db`.`comments` (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`risks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`risks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `rate` INT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`beneficies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`advantages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `rate` INT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`deadline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`deadline` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`impacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`impacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`ideas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`ideas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `id_status` INT NOT NULL,
  `id_comment` INT NOT NULL,
  `id_detail` INT NOT NULL,
  `id_risk` INT NOT NULL,
  `id_advantage` INT NOT NULL,
  `id_deadline` INT NOT NULL,
  `id_impact` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`id_status`)
    REFERENCES `u206369201_mig_db`.`status` (`id`),
    FOREIGN KEY (`id_comment`)
    REFERENCES `u206369201_mig_db`.`comments` (`id`),
    FOREIGN KEY (`id_detail`)
    REFERENCES `u206369201_mig_db`.`details` (`id`),
    FOREIGN KEY (`id_risk`)
    REFERENCES `u206369201_mig_db`.`risks` (`id`),
    FOREIGN KEY (`id_advantage`)
    REFERENCES `u206369201_mig_db`.`advantages` (`id`),
    FOREIGN KEY (`id_deadline`)
    REFERENCES `u206369201_mig_db`.`deadline` (`id`),
    FOREIGN KEY (`id_impact`)
    REFERENCES `u206369201_mig_db`.`impacts` (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`ideas_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`ideas_has_categories` (
    `id_idea` INT NOT NULL,
    `id_category` INT NOT NULL,
    PRIMARY KEY (`id_idea`, `id_category`),
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`),
        FOREIGN KEY (`id_category`)
        REFERENCES `u206369201_mig_db`.`categories` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`user_has_categories` (
    `id_user` INT NOT NULL,
    `id_category` INT NOT NULL,
    PRIMARY KEY (`id_user`, `id_category`),
        FOREIGN KEY (`id_user`)
        REFERENCES `u206369201_mig_db`.`users` (`id`),
        FOREIGN KEY (`id_category`)
        REFERENCES `u206369201_mig_db`.`categories` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`ideas_has_places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`ideas_has_places` (
    `id_idea` INT NOT NULL,
    `id_place` INT NOT NULL,
    PRIMARY KEY (`id_idea`, `id_place`),
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`),
        FOREIGN KEY (`id_place`)
        REFERENCES `u206369201_mig_db`.`places` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users_has_ideas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`users_has_idea` (
    `id_user` INT NOT NULL,
    `id_idea` INT NOT NULL,
    `is_owner` TINYINT NOT NULL,
    `has_voted` TINYINT NOT NULL,
    `vote_value` TINYINT NULL,
    PRIMARY KEY (`id_user`, `id_idea`),
        FOREIGN KEY (`id_user`)
        REFERENCES `u206369201_mig_db`.`users` (`id`),
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`));
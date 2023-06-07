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
    `label` VARCHAR(155) NOT NULL,
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
-- Table `u206369201_mig_db`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`locations` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `town` VARCHAR(155) NOT NULL,
    `region` VARCHAR(155) NOT NULL,
    `country` VARCHAR(155) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(150) NOT NULL,
    `lastname` VARCHAR(150) NOT NULL,
    `occupation` VARCHAR(150) NOT NULL,
    `service` VARCHAR(150) NOT NULL,
    `picture` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(40) NULL,
    `id_role` INT NOT NULL,
    `id_login` INT NOT NULL,
    `id_location` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_user_role`
        FOREIGN KEY (`id_role`)
        REFERENCES `u206369201_mig_db`.`roles` (`id`),
    CONSTRAINT `fk_user_login`
        FOREIGN KEY (`id_login`)
        REFERENCES `u206369201_mig_db`.`logins` (`id`),
    CONSTRAINT `fk_user_location`
    FOREIGN KEY (`id_location`)
    REFERENCES `u206369201_mig_db`.`locations` (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(155) NOT NULL,
    PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  `delay` INT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `id_comments` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_comment_response`
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
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`beneficies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `rate` INT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`deadline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`deadlines` (
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
    `title` VARCHAR(255) NOT NULL,
    `id_status` INT NOT NULL,
    `id_comment` INT NOT NULL,
    `id_detail` INT NOT NULL,
    `id_risk` INT NOT NULL,
    `id_benefice` INT NOT NULL,
    `id_deadline` INT NOT NULL,
    `id_impact` INT NOT NULL,
    `is_closed` TINYINT NOT NULL,
    `is_rejected` TINYINT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_idea_status`
        FOREIGN KEY (`id_status`)
        REFERENCES `u206369201_mig_db`.`status` (`id`),
    CONSTRAINT `fk_idea_comment`
        FOREIGN KEY (`id_comment`)
        REFERENCES `u206369201_mig_db`.`comments` (`id`),
    CONSTRAINT `fk_idea_detail`
        FOREIGN KEY (`id_detail`)
        REFERENCES `u206369201_mig_db`.`details` (`id`),
    CONSTRAINT `fk_idea_risk`
        FOREIGN KEY (`id_risk`)
        REFERENCES `u206369201_mig_db`.`risks` (`id`),
    CONSTRAINT `fk_idea_benefice`
        FOREIGN KEY (`id_benefice`)
        REFERENCES `u206369201_mig_db`.`beneficies` (`id`),
    CONSTRAINT `fk_idea_deadline`
        FOREIGN KEY (`id_deadline`)
        REFERENCES `u206369201_mig_db`.`deadlines` (`id`),
    CONSTRAINT `fk_idea_impact`
        FOREIGN KEY (`id_impact`)
        REFERENCES `u206369201_mig_db`.`impacts` (`id`));

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`ideas_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`ideas_has_categories` (
    `id_idea` INT NOT NULL,
    `id_category` INT NOT NULL,
    PRIMARY KEY (`id_idea`, `id_category`),
    CONSTRAINT `fk_ideas_has_categories_idea`
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`),
    CONSTRAINT `fk_ideas_has_category`
        FOREIGN KEY (`id_category`)
        REFERENCES `u206369201_mig_db`.`categories` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`users_has_categories` (
    `id_user` INT NOT NULL,
    `id_category` INT NOT NULL,
    PRIMARY KEY (`id_user`, `id_category`),
    CONSTRAINT `fk_users_has_categories_user`
        FOREIGN KEY (`id_user`)
        REFERENCES `u206369201_mig_db`.`users` (`id`),
    CONSTRAINT `fk_users_has_categories_category`
        FOREIGN KEY (`id_category`)
        REFERENCES `u206369201_mig_db`.`categories` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`ideas_has_locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`ideas_has_locations` (
    `id_idea` INT NOT NULL,
    `id_location` INT NOT NULL,
    PRIMARY KEY (`id_idea`, `id_location`),
    CONSTRAINT `fk_ideas_has_locations_idea`
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`),
    CONSTRAINT `fk_ideas_has_locations_location`
        FOREIGN KEY (`id_location`)
        REFERENCES `u206369201_mig_db`.`locations` (`id`));


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`users_has_ideas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`users_has_ideas` (
    `id_user` INT NOT NULL,
    `id_idea` INT NOT NULL,
    `is_owner` TINYINT NOT NULL,
    `has_voted` TINYINT NOT NULL,
    `vote_value` TINYINT NULL,
    PRIMARY KEY (`id_user`, `id_idea`),
    CONSTRAINT `fk_users_has_ideas_user`
        FOREIGN KEY (`id_user`)
        REFERENCES `u206369201_mig_db`.`users` (`id`),
    CONSTRAINT `fk_users_has_ideas_idea`
        FOREIGN KEY (`id_idea`)
        REFERENCES `u206369201_mig_db`.`ideas` (`id`));
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema u206369201_mig_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema u206369201_mig_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `u206369201_mig_db` ;
USE `u206369201_mig_db` ;

-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`role` (
  `idrole` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idrole`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`login` (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(250) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idlogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`place` (
  `idplace` INT NOT NULL AUTO_INCREMENT,
  `place_name` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idplace`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(150) NOT NULL,
  `lastname` VARCHAR(150) NOT NULL,
  `service` VARCHAR(150) NOT NULL,
  `role_idrole` INT NOT NULL,
  `login_idlogin` INT NOT NULL,
  `places_idplace` INT NOT NULL,
  PRIMARY KEY (`iduser`),
  INDEX `fk_user_role1_idx` (`role_idrole` ASC) VISIBLE,
  INDEX `fk_user_login1_idx` (`login_idlogin` ASC) VISIBLE,
  INDEX `fk_user_places1_idx` (`places_idplace` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_idrole`)
    REFERENCES `u206369201_mig_db`.`role` (`idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_login1`
    FOREIGN KEY (`login_idlogin`)
    REFERENCES `u206369201_mig_db`.`login` (`idlogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_places1`
    FOREIGN KEY (`places_idplace`)
    REFERENCES `u206369201_mig_db`.`place` (`idplace`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`category` (
  `idcategory` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`status` (
  `idstatus` INT NOT NULL AUTO_INCREMENT,
  `status_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idstatus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`comments` (
  `idcomments` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `comments_idcomments` INT NOT NULL,
  PRIMARY KEY (`idcomments`, `comments_idcomments`),
  INDEX `fk_comments_comments1_idx` (`comments_idcomments` ASC) VISIBLE,
  CONSTRAINT `fk_comments_comments1`
    FOREIGN KEY (`comments_idcomments`)
    REFERENCES `u206369201_mig_db`.`comments` (`idcomments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`details` (
  `iddetails` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`iddetails`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`risks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`risks` (
  `idrisks` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `rate` INT NULL,
  PRIMARY KEY (`idrisks`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`beneficies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`beneficies` (
  `idbeneficies` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  `rate` INT NULL,
  PRIMARY KEY (`idbeneficies`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`deadline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`deadline` (
  `iddeadline` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  PRIMARY KEY (`iddeadline`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`impacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`impacts` (
  `idimpact` INT NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`idimpact`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`idea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`idea` (
  `ididea` INT NOT NULL AUTO_INCREMENT,
  `idea_name` VARCHAR(255) NOT NULL,
  `status_idstatus` INT NOT NULL,
  `comments_idcomments` INT NOT NULL,
  `details_iddetails` INT NOT NULL,
  `risks_idrisks` INT NOT NULL,
  `beneficies_idbeneficies` INT NOT NULL,
  `deadline_iddeadline` INT NOT NULL,
  `impacts_idimpact` INT NOT NULL,
  PRIMARY KEY (`ididea`),
  INDEX `fk_idea_status1_idx` (`status_idstatus` ASC) VISIBLE,
  INDEX `fk_idea_comments1_idx` (`comments_idcomments` ASC) VISIBLE,
  INDEX `fk_idea_details1_idx` (`details_iddetails` ASC) VISIBLE,
  INDEX `fk_idea_risks1_idx` (`risks_idrisks` ASC) VISIBLE,
  INDEX `fk_idea_beneficies1_idx` (`beneficies_idbeneficies` ASC) VISIBLE,
  INDEX `fk_idea_deadline1_idx` (`deadline_iddeadline` ASC) VISIBLE,
  INDEX `fk_idea_impacts1_idx` (`impacts_idimpact` ASC) VISIBLE,
  CONSTRAINT `fk_idea_status1`
    FOREIGN KEY (`status_idstatus`)
    REFERENCES `u206369201_mig_db`.`status` (`idstatus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_comments1`
    FOREIGN KEY (`comments_idcomments`)
    REFERENCES `u206369201_mig_db`.`comments` (`idcomments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_details1`
    FOREIGN KEY (`details_iddetails`)
    REFERENCES `u206369201_mig_db`.`details` (`iddetails`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_risks1`
    FOREIGN KEY (`risks_idrisks`)
    REFERENCES `u206369201_mig_db`.`risks` (`idrisks`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_beneficies1`
    FOREIGN KEY (`beneficies_idbeneficies`)
    REFERENCES `u206369201_mig_db`.`beneficies` (`idbeneficies`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_deadline1`
    FOREIGN KEY (`deadline_iddeadline`)
    REFERENCES `u206369201_mig_db`.`deadline` (`iddeadline`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_impacts1`
    FOREIGN KEY (`impacts_idimpact`)
    REFERENCES `u206369201_mig_db`.`impacts` (`idimpact`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`idea_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`idea_has_category` (
  `idea_ididea` INT NOT NULL,
  `category_idcategory` INT NOT NULL,
  PRIMARY KEY (`idea_ididea`, `category_idcategory`),
  INDEX `fk_idea_has_category_category1_idx` (`category_idcategory` ASC) VISIBLE,
  INDEX `fk_idea_has_category_idea1_idx` (`idea_ididea` ASC) VISIBLE,
  CONSTRAINT `fk_idea_has_category_idea1`
    FOREIGN KEY (`idea_ididea`)
    REFERENCES `u206369201_mig_db`.`idea` (`ididea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_has_category_category1`
    FOREIGN KEY (`category_idcategory`)
    REFERENCES `u206369201_mig_db`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`user_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`user_has_category` (
  `user_iduser` INT NOT NULL,
  `category_idcategory` INT NOT NULL,
  PRIMARY KEY (`user_iduser`, `category_idcategory`),
  INDEX `fk_user_has_category_category1_idx` (`category_idcategory` ASC) VISIBLE,
  INDEX `fk_user_has_category_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_category_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `u206369201_mig_db`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_category_category1`
    FOREIGN KEY (`category_idcategory`)
    REFERENCES `u206369201_mig_db`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`idea_has_place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`idea_has_place` (
  `idea_ididea` INT NOT NULL,
  `place_idplace` INT NOT NULL,
  PRIMARY KEY (`idea_ididea`, `place_idplace`),
  INDEX `fk_idea_has_place_place1_idx` (`place_idplace` ASC) VISIBLE,
  INDEX `fk_idea_has_place_idea1_idx` (`idea_ididea` ASC) VISIBLE,
  CONSTRAINT `fk_idea_has_place_idea1`
    FOREIGN KEY (`idea_ididea`)
    REFERENCES `u206369201_mig_db`.`idea` (`ididea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idea_has_place_place1`
    FOREIGN KEY (`place_idplace`)
    REFERENCES `u206369201_mig_db`.`place` (`idplace`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `u206369201_mig_db`.`user_has_idea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `u206369201_mig_db`.`user_has_idea` (
  `user_iduser` INT NOT NULL,
  `idea_ididea` INT NOT NULL,
  `is_owner` TINYINT NOT NULL,
  `has_voted` TINYINT NOT NULL,
  `vote_value` TINYINT NULL,
  PRIMARY KEY (`user_iduser`, `idea_ididea`),
  INDEX `fk_user_has_idea_idea1_idx` (`idea_ididea` ASC) VISIBLE,
  INDEX `fk_user_has_idea_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_idea_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `u206369201_mig_db`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_idea_idea1`
    FOREIGN KEY (`idea_ididea`)
    REFERENCES `u206369201_mig_db`.`idea` (`ididea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

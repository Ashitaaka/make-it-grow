-- -----------------------------------------------------
-- ROLES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`role`
(idrole, role_name)
VALUES
(1, 'Utilisateur'),
(2, 'Expert'),
(3, 'Décisionnaire'),
(4, 'Administrateur');

-- -----------------------------------------------------
-- USERS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`user`
(iduser, firstname, lastname, role_idrole)
VALUES
(1, 'Martin', 'NOËL', 4),
(2, 'Guillaume', 'LECLOUT', 4),
(3, 'Eric', 'GODEFROY', 4),
(4, 'Olivier', 'GOMEZ', 4),
(5, 'Axel', 'CASTRO', 4),
(6, 'Marie-Hélène', 'PASQUIER', 1),
(7, 'Tristan', 'BOUTET', 2),
(8, 'Ludovic', 'BERTILLON', 3);

-- -----------------------------------------------------
-- CATEGORY
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`category`
(idcategory, category_name)
VALUES
(1, 'Alimentation'),
(2, 'Bien-être'),
(3, 'Sortie'),
(4, 'Organisation'),
(5, 'Divers');

-- -----------------------------------------------------
-- STATUS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`status`
(idstatus, status_name)
VALUES
(1, 'Ouvert'),
(2, 'Débat'),
(3, 'Vote'),
(4, 'Conflit'),
(5, 'Terminé');
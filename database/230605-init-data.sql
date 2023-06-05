-- -----------------------------------------------------
-- ROLES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`roles`
(id, label)
VALUES
(1, 'Utilisateur'),
(2, 'Expert'),
(3, 'Administrateur');

-- -----------------------------------------------------
-- LOGINS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`logins`
(id, email, password)
VALUES
(1, 'martin.noel@makesense.com', 'martin'),
(2, 'guillaume.leclout@makesense.com', 'guillaume'),
(3, 'eric.godefroy@makesense.com', 'eric'),
(4, 'olivier.gomez@makesense.com', 'olivier'),
(5, 'axel.castro@makesense.com', 'axel'),
(6, 'marie.pasquier@makesense.com', 'marie'),
(7, 'tristan.boutet@makesense.com', 'tristan'),
(8, 'ludovic.bertillon@makesense.com', 'ludovic');

-- -----------------------------------------------------
-- LOCATIONS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`locations`
(id, town, region, country)
VALUES
(1, 'Mexico', '', 'Mexique'),
(2, 'Lima', '', 'Pérou'),
(3, 'Paris', '', 'France'),
(4, 'Dakar', '', 'Sénégal'),
(5, 'Abidjan', '', 'Côte d’ivoire'),
(6, 'Beirut', '', 'Liban'),
(7, 'Manilla', '', 'Philippines');

-- -----------------------------------------------------
-- CATEGORIES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`categories`
(id, label)
VALUES
(1, 'Bien-être'),
(2, 'Evènement'),
(3, 'Organisation'),
(4, 'Déplacement'),
(5, 'Ethique'),
(6, 'Développement');

-- -----------------------------------------------------
-- STATUS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`status`
(id, label, delay)
VALUES
(1, 'modération', 5),
(2, 'débat', 10),
(3, 'synthèse', NULL),
(4, 'expertise', 5),
(5, 'vote', 5 ),
(6, 'accepté', NULL ),
(7, 'refusé', NULL) ;

-- ------- --------------------------------------------
-- USERS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users`
(id, firstname, lastname, id_role, id_login, id_location)
VALUES
(1, 'Martin', 'NOËL', 3, 1, 3 ),
(2, 'Guillaume', 'LECLOUT', 3, 2, 3 ),
(3, 'Eric', 'GODEFROY', 3, 3, 3 ),
(4, 'Olivier', 'GOMEZ', 3, 4, 3 ),
(5, 'Axel', 'CASTRO', 3, 5, 3 ),
(6, 'Marie', 'PASQUIER', 1, 6, 3 ),
(7, 'Tristan', 'BOUTET', 2, 7, 3 ),
(8, 'Ludovic', 'BERTILLON', 2, 8, 3 );
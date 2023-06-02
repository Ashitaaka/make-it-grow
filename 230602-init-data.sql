-- -----------------------------------------------------
-- ROLES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`roles`
(id, role_name)
VALUES
(1, 'Utilisateur'),
(2, 'Expert'),
(3, 'Décisionnaire'),
(4, 'Administrateur');

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
-- PLACES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`places`
(id, place_name)
VALUES
(1, 'Mexico'),
(2, 'Lima'),
(3, 'Paris'),
(4, 'Dakar'),
(5, 'Abidjan'),
(6, 'Beirut'),
(7, 'Manilla');

-- -----------------------------------------------------
-- CATEGORIES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`categories`
(id, category_name)
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
(id, status_name)
VALUES
(1, 'Ouvert'),
(2, 'Débat'),
(3, 'Vote'),
(4, 'Conflit'),
(5, 'Terminé');

-- -----------------------------------------------------
-- USERS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users`
(id, firstname, lastname, service , id_role, id_login, id_place)
VALUES
(1, 'Martin', 'NOËL', 'NA', 4, 1, 3 ),
(2, 'Guillaume', 'LECLOUT', 'NA', 4, 2, 3 ),
(3, 'Eric', 'GODEFROY', 'NA', 4, 3, 3 ),
(4, 'Olivier', 'GOMEZ', 'NA', 4, 4, 3 ),
(5, 'Axel', 'CASTRO', 'NA', 4, 5, 3 ),
(6, 'Marie', 'PASQUIER', 'NA', 1, 6, 3 ),
(7, 'Tristan', 'BOUTET', 'NA', 2, 7, 3 ),
(8, 'Ludovic', 'BERTILLON', 'NA', 3, 8, 3 );
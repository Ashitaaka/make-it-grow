-- -----------------------------------------------------
-- ROLES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`roles`
(id, label)
VALUES
(1, "Utilisateur"),
(2, "Administrateur");

-- -----------------------------------------------------
-- LOCATIONS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`locations`
(id, city, region, country)
VALUES
(1, "Mexico", "", "Mexique"),
(2, "Lima", "", "Pérou"),
(3, "Paris", "", "France"),
(4, "Dakar", "", "Sénégal"),
(5, "Abidjan", "", "Côte d'ivoire"),
(6, "Beirut", "", "Liban"),
(7, "Manilla", "", "Philippines");

-- -----------------------------------------------------
-- CATEGORIES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`categories`
(id, label, color)
VALUES
(1, "Bien-être","--cerise-dark-color"),
(2, "Evènement","--brick-red-color"),
(3, "Organisation","--calypso-color"),
(4, "Déplacement","--parsley-color"),
(5, "Ethique","--zeus-color "),
(6, "Développement","--silver-tree-color");

-- -----------------------------------------------------
-- STATUS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`status`
(id, label, delay)
VALUES
(1, "modération", 5),
(2, "débat", 10),
(3, "synthèse", NULL),
(4, "expertise", 5),
(5, "vote", 5 ),
(6, "accepté", NULL ),
(7, "refusé", NULL);

-- ------- --------------------------------------------
-- IDEAS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`ideas`
(id, title, id_status, deadline, detail, risk, benefit, impact, is_closed, is_rejected)
VALUES
(1, "Espace bien-être", 1, "2023-08-30", "Créer un espace dédié au bien-être au sein de l'entreprise, tel qu'une salle de détente ou une salle de méditation. Cet espace serait conçu pour offrir aux employés un endroit calme et relaxant où ils pourraient se ressourcer, se reposer, pratiquer des exercices de relaxation ou de méditation. L' entreprise pourrait également organiser des sessions de bien-être régulières, telles que des séances de yoga ou des cours de fitness, pour encourager les employés à prendre soin de leur santé physique et mentale.", "Espace utilisé de manière récréative, perte de productivité des employées", "Employés calmes, reposés et concentrés.", "Augmentation de la productivité", FALSE, FALSE),
(2, "Journée des salariés", 1, "2023-10-15", "Organiser une journée de célébration des employés, où l'entreprise reconnaît et célèbre les réalisations et contributions de chaque membre de l'équipe. Cela pourrait inclure des discours, des remises de prix, des activités ludiques et des moments de convivialité.", "Mis en avant de certains employés au détriement des autres, compétition exacerbée", "Emulation des idées et des projet.", "Favorisation de l'innovation", FALSE, FALSE),
(3, "Programme de covoiturage", 1, "2023-12-10", "Mettre en place un programme de covoiturage ou de transport en commun pour les employés qui se rendent au travail. Cela permettrait de réduire la congestion routière, les émissions de carbone et les frais de transport individuels, tout en favorisant la convivialité et la réduction des déplacements en voiture.", "Multiplication des retards ou des absences", "Aspect écologique et meilleure gestion des places de parking", "Flexibilités et synchronisation des horaires nécessaire", FALSE, FALSE);


-- ------- --------------------------------------------
-- USERS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users`
(id, firstname, lastname, service, occupation, picture, email, password, id_role, id_location)
VALUES
(1, "Martin", "NOËL", "Comptabilité", "Comptable","/images/profile-pictures/martin.jpg", "martin.noel@makesense.com", "martin", 2, 3 ),
(2, "Guillaume", "LECLOUT", "Comptabilité", "Comptable","/images/profile-pictures/guillaume.jpg", "guillaume.leclout@makesense.com", "guillaume", 2, 3 ),
(3, "Eric", "GODEFROY","Environnement", "Sylvophile","/images/profile-pictures/eric.jpg", "eric.godefroy@makesense.com", "eric", 2, 3 ),
(4, "Olivier", "GOMEZ", "Qualité", "Technicien qualité","/images/profile-pictures/olive.jpg", "olivier.gomez@makesense.com", "olivier", 2, 3 ),
(5, "Axel", "CASTRO","Qualité","Responsable qualité","/images/profile-pictures/axel.jpg", "axel.castro@makesense.com", "axel", 2, 3 ),
(6, "Marie", "PASQUIER","Qualité", "Directrice qualité","/images/profile-pictures/mpasquier.jpg", "marie.pasquier@makesense.com", "marie", 1, 3 ),
(7, "Tristan", "BOUTET", "Ressources humaines", "Chargé de recrutement","/images/profile-pictures/tboutet.jpg", "tristan.boutet@makesense.com", "tristan", 1, 3 ),
(8, "Ludovic", "BERTILLON","Ressources humaines" , "Directeur RH","/images/profile-pictures/lbertillon.jpg", "ludovic.bertillon@makesense.com", "ludovic", 1, 3 );

-- ------- --------------------------------------------
-- IDEAS HAS CATEGORIES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`ideas_has_categories`
(id_idea, id_category)
VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 4);

-- ------- --------------------------------------------
-- USERS HAS CATEGORIES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users_has_categories`
(id_user, id_category)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 1),
(8, 2),
(8, 3);

-- ------- --------------------------------------------
-- IDEAS HAS LOCATIONS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`ideas_has_locations`
(id_idea, id_location)
VALUES
(1, 1),
(2, 2),
(3, 4),
(3, 5);

-- ------- --------------------------------------------
-- USERS HAS IDEAS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users_has_ideas`
(id_user, id_idea, is_owner, has_voted)
VALUES
(1, 1, TRUE, FALSE),
(1, 2, FALSE, FALSE),
(2, 2, TRUE, FALSE),
(3, 3, TRUE, FALSE),
(3, 2, FALSE, FALSE),
(4, 1, FALSE, FALSE),
(5, 2, FALSE, FALSE),
(6, 3, FALSE, FALSE);
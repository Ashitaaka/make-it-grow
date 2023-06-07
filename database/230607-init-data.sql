-- -----------------------------------------------------
-- ROLES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`roles`
(id, label)
VALUES
(1, "Utilisateur"),
(2, "Expert"),
(3, "Administrateur");

-- -----------------------------------------------------
-- LOGINS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`logins`
(id, email, password)
VALUES
(1, "martin.noel@makesense.com", "martin"),
(2, "guillaume.leclout@makesense.com", "guillaume"),
(3, "eric.godefroy@makesense.com", "eric"),
(4, "olivier.gomez@makesense.com", "olivier"),
(5, "axel.castro@makesense.com", "axel"),
(6, "marie.pasquier@makesense.com", "marie"),
(7, "tristan.boutet@makesense.com", "tristan"),
(8, "ludovic.bertillon@makesense.com", "ludovic");

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
(id, label)
VALUES
(1, "Bien-être"),
(2, "Evènement"),
(3, "Organisation"),
(4, "Déplacement"),
(5, "Ethique"),
(6, "Développement");

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
(7, "refusé", NULL) ;

-- -----------------------------------------------------
-- DETAILS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`details`
(id, content)
VALUES
(1, "Créer un espace dédié au bien-être au sein de l'entreprise, tel qu'une salle de détente ou une salle de méditation. Cet espace serait conçu pour offrir aux employés un endroit calme et relaxant où ils pourraient se ressourcer, se reposer, pratiquer des exercices de relaxation ou de méditation. L' entreprise pourrait également organiser des sessions de bien-être régulières, telles que des séances de yoga ou des cours de fitness, pour encourager les employés à prendre soin de leur santé physique et mentale."),
(2, "Organiser une journée de célébration des employés, où l'entreprise reconnaît et célèbre les réalisations et contributions de chaque membre de l'équipe. Cela pourrait inclure des discours, des remises de prix, des activités ludiques et des moments de convivialité."),
(3, "Mettre en place un programme de covoiturage ou de transport en commun pour les employés qui se rendent au travail. Cela permettrait de réduire la congestion routière, les émissions de carbone et les frais de transport individuels, tout en favorisant la convivialité et la réduction des déplacements en voiture.");

-- -----------------------------------------------------
-- RISKS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`risks`
(id, content)
VALUES
(1, "Espace utilisé de manière récréative, perte de productivité des employées"),
(2, "Mis en avant de certains employés au détriement des autres, compétition exacerbée"),
(3, "Multiplication des retards ou des absences");

-- -----------------------------------------------------
-- benefits
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`benefits`
(id, content)
VALUE
(1, "Employés calmes, reposés et concentrés."),
(2, "Emulation des idées et des projet."),
(3, "Aspect écologique et meilleure gestion des places de parking");

-- -----------------------------------------------------
-- IMPACTS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`impacts`
(id, content)
VALUES
(1, "Augmentation de la productivité"),
(2, "Favorisation de l'innovation"),
(3, "Flexibilités et synchronisation des horaires nécessaire");

-- -----------------------------------------------------
-- DEADLINES
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`deadlines`
(id, date)
VALUES
(1, "2023-08-30"),
(2, "2023-10-15"),
(3, "2023-12-10");

-- ------- --------------------------------------------
-- IDEAS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`ideas`
(id, title, id_status, id_detail, id_risk, id_benefit, id_deadline, id_impact, is_closed, is_rejected)
VALUES
(1, "Espace bien-être", 1, 1, 1, 1, 1, 1, FALSE, FALSE),
(2, "Journée des salariés", 1, 2, 2, 2, 2, 2, FALSE, FALSE),
(3, "Programme de covoiturage", 1, 3, 3, 3, 3, 3, FALSE, FALSE);

-- ------- --------------------------------------------
-- USERS
-- -----------------------------------------------------

INSERT INTO `u206369201_mig_db`.`users`
(id, firstname, lastname, service, occupation, picture, id_role, id_login, id_location)
VALUES
(1, "Martin", "NOËL", "Comptabilité", "Comptable","./images/profile-pictures/martin.jpg" , 3, 1, 3 ),
(2, "Guillaume", "LECLOUT", "Comptabilité", "Comptable","./images/profile-pictures/guillaume.jpg" , 3, 2, 3 ),
(3, "Eric", "GODEFROY","Comptabilité", "Expert Comptable","./images/profile-pictures/eric.jpg" , 3, 3, 3 ),
(4, "Olivier", "GOMEZ", "Qualité", "Technicien qualité","./images/profile-pictures/olive.jpg" , 3, 4, 3 ),
(5, "Axel", "CASTRO","Qualité","Responsable qualité","./images/profile-pictures/axel.jpg" , 3, 5, 3 ),
(6, "Marie", "PASQUIER","Qualité", "Directrice qualité","./images/profile-pictures/mpasquier.jpg" , 1, 6, 3 ),
(7, "Tristan", "BOUTET", "Ressources humaines", "Chargé de recrutement","./images/profile-pictures/tboutet.jpg" , 2, 7, 3 ),
(8, "Ludovic", "BERTILLON","Ressources humaines" , "Directeur RH","./images/profile-pictures/lbertillon.jpg" , 2, 8, 3 );

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
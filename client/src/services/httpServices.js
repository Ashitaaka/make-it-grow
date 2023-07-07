import axios from "axios";
axios.defaults.baseURL = "http://localhost:5080/api";

//To get Idea by ID
const fakeid ={
  "categories": [
      "Bien-être"
  ],
  "city": "Paris",
  "color": "--cerise-dark-color",
  "delay": 10,
  "id": 3,
  "status": "débat",
  "title": "Promouvoir un environnement de travail innovant et favorable grâce à la présence des chiens",
  "detail": "Chers collègues,\r\n\r\nAujourd'hui, je souhaiterais vous parler d'une idée qui, je l'espère, vous enthousiasmera autant qu'elle m'enthousiasme moi-même. Imaginez-vous travailler dans un environnement où les wagons de bonheur déferlent tous les jours, où le stress est réduit et où la collaboration est stimulée. Comment cela est-il possible, me demanderez-vous ? Eh bien, la réponse est simple : en permettant à nos fidèles amis à quatre pattes de nous rejoindre au travail.",
  "impact": "Adaptation des politiques et des protocoles : L'organisation devra élaborer des politiques et des protocoles clairs pour réglementer la présence des chiens au travail. Cela inclut des règles concernant le comportement des animaux, les zones autorisées, les responsabilités des propriétaires et les mesures d'hygiène. Il peut être nécessaire de former les employés sur ces politiques et de mettre en place des processus de suivi pour assurer la conformité.\r\n\r\nAménagement de l'espace de travail : Des ajustements physiques peuvent être nécessaires pour accueillir les chiens. Cela peut impliquer la création de zones désignées pour les animaux, l'installation de barrières ou de portes pour séparer les espaces, et la mise en place de zones de repos ou de jeux pour les chiens. L'organisation devra évaluer les coûts et la faisabilité de ces aménagements.\r\n\r\nSensibilisation et communication : Il sera important de communiquer clairement aux employés les raisons de l'introduction des chiens au travail, ainsi que les avantages et les attentes associés. Il peut être nécessaire de sensibiliser les employés à l'importance du respect des règles et des politiques liées aux chiens, et de mettre en place des canaux de communication pour répondre aux préoccupations ou aux questions.\r\n\r\nGestion des réactions et des préférences des employés : Certains employés peuvent accueillir favorablement la présence des chiens, tandis que d'autres peuvent exprimer des préférences différentes ou avoir des réactions négatives. L'organisation devra être sensible à ces différences et trouver un équilibre qui respecte les besoins et les préférences de tous les employés.\r\n\r\nImage de l'entreprise : L'introduction des chiens au travail peut influencer l'image de l'entreprise, tant en interne qu'en externe. Si elle est bien gérée et perçue positivement par les employés, cela peut renforcer l'image d'une entreprise moderne, innovante et axée sur le bien-être. Cependant, une mauvaise gestion ou des problèmes récurrents liés aux chiens pourraient avoir un impact négatif sur la réputation de l'organisation.",
  "risk": "Allergies et problèmes de santé : Certains employés peuvent être allergiques aux poils de chien, à la salive ou aux squames. La présence de chiens au travail pourrait déclencher des réactions allergiques graves chez certaines personnes, compromettant ainsi leur santé et leur bien-être.\r\n\r\nPeur ou anxiété des chiens : Tout le monde n'est pas à l'aise en présence de chiens, que ce soit en raison de phobies, de mauvaises expériences passées ou d'autres raisons personnelles. La présence de chiens au travail pourrait causer de l'anxiété ou du stress chez certains employés, ce qui pourrait affecter leur productivité et leur bien-être.\r\n\r\nDistractions et perturbations : Les chiens sont naturellement joueurs et énergiques. Leur présence au bureau pourrait entraîner des distractions constantes, des aboiements fréquents ou des interactions bruyantes entre les animaux et les employés. Cela pourrait nuire à la concentration, à la productivité et à la qualité du travail.\r\n\r\nProblèmes d'hygiène : Les chiens peuvent être porteurs de bactéries, de parasites ou de maladies. Il est essentiel de maintenir des normes d'hygiène strictes pour éviter la propagation de germes et de maladies entre les animaux et les employés. Des mesures appropriées, telles que le nettoyage régulier et la vaccination des chiens, devraient être mises en place.\r\n\r\nResponsabilité juridique : En permettant aux chiens d'être présents sur le lieu de travail, l'entreprise assume une responsabilité accrue en cas de dommages ou d'incidents. Des politiques et des protocoles doivent être établis pour gérer les situations où un chien pourrait causer des blessures ou des dommages matériels.",
  "benefit": "Diminution du stress : Les études ont démontré que la simple présence d'un chien peut réduire le stress et favoriser une ambiance de travail plus détendue. Les moments de pause seront plus agréables grâce aux câlins, aux jeux et aux sourires que nos compagnons poilus nous offriront.\r\n\r\nCréativité et productivité accrues : Avoir des chiens au bureau encourage la créativité et la productivité. Les animaux de compagnie peuvent servir de source d'inspiration, suscitant des idées innovantes et stimulant notre réflexion. Ils sont également des catalyseurs sociaux, favorisant des interactions plus informelles entre les employés et renforçant ainsi l'esprit d'équipe.\r\n\r\nAttraction et rétention des talents : L'introduction d'une politique d'accueil des chiens au travail est un excellent moyen d'attirer et de retenir les talents. De nombreuses personnes, en particulier les amoureux des animaux, accordent une grande importance à la conciliation entre leur vie professionnelle et leur vie personnelle. En offrant cette possibilité, nous pourrions nous démarquer en tant qu'employeur de choix.\r\n\r\nAmélioration de l'ambiance générale : La présence des chiens apportera une touche de convivialité à notre espace de travail. Les moments de jeu, les balades en groupe et les pauses-café accompagnées de nos amis à quatre pattes renforceront les liens entre collègues, favorisant ainsi une ambiance positive et une meilleure cohésion d'équipe.",
  "comment": [
  {
    id:1,
    user_id:11,
    content:"blabla"
  },
  {
    id:2,
    user_id:1,
    content:"blabla"
  },
  {
    id:13,
    user_id:1,
    content:"blabla"
  },
  {
    id:15,
    user_id:1,
    content:"blabla"
  }

  ],
  "id_user": [
      2,
      3,
      4,
      6,
      9,
      18,
      11
  ],
  "users": [
      {
          "user_id": 1,
          "firstname": "Martin",
          "lastname": "NOËL",
          "picture": "/images/profile-pictures/martin.jpg",
          "is_owner": 1,
          "role": "Administrateur"
      },
      {
          "user_id": 2,
          "firstname": "Guillaume",
          "lastname": "LECLOUT",
          "picture": "/images/profile-pictures/guillaume.jpg",
          "is_owner": 0,
          "role": "Administrateur"
      },
      {
          "user_id": 3,
          "firstname": "Eric",
          "lastname": "GODEFROY",
          "picture": "/images/profile-pictures/eric.jpg",
          "is_owner": 0,
          "role": "Administrateur"
      },
      {
          "user_id": 4,
          "firstname": "Olivier",
          "lastname": "GOMEZ",
          "picture": "/images/profile-pictures/olive.jpg",
          "is_owner": 0,
          "role": "Administrateur"
      },
      {
          "user_id": 6,
          "firstname": "Marie",
          "lastname": "PASQUIER",
          "picture": "/images/profile-pictures/mpasquier.jpg",
          "is_owner": 0,
          "role": "Utilisateur"
      },
      {
          "user_id": 9,
          "firstname": "Romain",
          "lastname": "PIVETEAU",
          "picture": "",
          "is_owner": 0,
          "role": "Utilisateur"
      }
  ]
}
export const getIdeaById = (id) => {
  return axios
    .get(
      `/ideas/${id}/?fields=id,title,locations,status,categories,users,detail,risk,impact,benefit,comments`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
//To get all locations
export const getAllLocations = () => {
  return axios
    .get("/locations")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To Login
export const loginUser = (userDatas) => {
  return axios
    .post("/users/login", userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To register
export const registerUser = (userDatas) => {
  return axios
    .post("/users/register", userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

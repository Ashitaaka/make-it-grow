const { db } = require("../config");

const cron = () => {
  let votes = [];

  setInterval(() => {
    db.query(
      "UPDATE ideas SET id_status = 3 WHERE id_status = 2 AND delay_date < CURRENT_TIMESTAMP()"
    );
    db.query(
      `SELECT COUNT(vote_value) AS total_votants, SUM(vote_value) AS result, ideas.id 
            FROM users_has_ideas 
            LEFT JOIN ideas 
            ON ideas.id = users_has_ideas.id_idea 
            WHERE ideas.id_status = 5 
            AND ideas.delay_date < CURRENT_TIMESTAMP()  
            GROUP BY ideas.id;`
    )
      .then((res) => res[0])
      .then((data) => (votes = data));

    votes.map((vote) => {
      if (vote.result > Math.floor(vote.total_votants / 2)) {
        db.query(`UPDATE ideas SET id_status = 6 WHERE id = ?`, [vote.id]);
      } else {
        db.query(`UPDATE ideas SET id_status = 7 WHERE id = ?`, [vote.id]);
      }
    });
  }, 60000);
};

module.exports = cron;

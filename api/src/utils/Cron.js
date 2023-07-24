const { db } = require('../config')

const cron = () =>{
    setInterval(()=>{
        db.query('UPDATE ideas SET id_status = 3 WHERE id_status = 2 AND delay_date < CURRENT_TIMESTAMP()')
    },300000);
}

module.exports = cron;
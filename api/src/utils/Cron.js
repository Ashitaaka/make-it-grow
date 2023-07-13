const { db } = require('../config')

const cron = () =>{
    setInterval(()=>{
        db.query('UPDATE ideas SET id_status = 3 WHERE id_status = 2 AND delay_date < CURRENT_TIMESTAMP()')
        db.query('UPDATE ideas SET id_status = 6 WHERE id_status = 5 AND delay_date < CURRENT_TIMESTAMP()')
    },10000);
}

module.exports = cron;
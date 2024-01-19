// import database
const db = require("../config/database");

// make media model
class media{
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM medias";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data media yang baru diinsert.
  */

    // promise 1
    static async create(media) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO medias SET ?";
            db.query(sql, media, (err, results) => {
                resolve(results.insertId);
            });
        });


        // promise 2
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM medias WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM medias WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE medias SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const media = await this.find(id);
        return media;
    }

    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM medias WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

}


// export model
module.exports = media;
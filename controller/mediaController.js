// import model media
const media = require("../models/media")

class mediaController {
    async index(req, res) {
        // TODO 4: Tampilkan data medias
        const medias = await media.all();

        const data = {
            message: "Menampilkan data media",
            data: medias
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */
        const { nama, nim, email, jurusan } = req.body
        // jika data tidak vald maka kirim erorr
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message : "semua data harus dikirim",
            };
            
            return res.status(422).json(data);
        }

        const medias = await media.create(req.body);
        const data = {
            message: "Menambahkan data media",
            data: medias,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id medias
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const medias = await media.find(id);

        if (medias) {
            // update data
            const mediaUpdated = await media.update(id, req.body);
            const data = {
                message: "Mengupdate data media",
                data: mediaUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const medai = await media.find(id);

        if (media) {
            // hapus data
            await medai.delete(id);
            const data = {
                message: "Menghapus data media",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const medai = await media.find(id);

        if (medai) {
            const data = {
                message: "Menampilkan detail data media",
                data: medai,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }
}

// make an object media Controller
const object = new mediaController();

// export object
module.exports = object;
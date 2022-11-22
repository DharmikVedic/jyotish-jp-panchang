export default async function Hello(req,res ) {
    const knex = require("knex")({
        client: "mysql",
        connection: {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "festival_planning",
        },
    });

    //const data = await  knex('festivals').where({year:2022}).whereNotNull('festival_key');

    const data =  await knex('festivals')
        .where((builder) =>
            builder
                .whereIn('year', [2022])
                .whereNot('festival_key','')
        )





    return res.json(data);
}
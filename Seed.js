const seeder = require('mongoose-seed');
const data = require('./data');
seeder.connect('mongodb://localhost:27017/seed_db', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    seeder.loadModels(['./Person.js']);
    seeder.clearModels(['Person'], () => {
        seeder.populateModels(data, () => seeder.disconnect())
    });
});

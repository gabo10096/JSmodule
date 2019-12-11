const Sequelize = require('sequelize');

module.exports.createStore = () => {

    const connection = new Sequelize( {
        dialect: 'sqlite',
        storage: './db/courses.sqlite',
        define:{
          timestamps:false
        },
        
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      });

    const Courses = connection.define('courses', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        category: Sequelize.STRING,
        start_date: Sequelize.STRING
    });

    return {Courses}
    
}


/*
sequelize.sync()
  .then(() => Courses.create({
    name: 'JS AND HTML5',
    image: 'js-and-html5.js',
    category: 'JS',
    start_date: '2019-01-25T01:16:07.931Z'
  }))
  .then(course => {
    console.log(course.toJSON());
  });
  */
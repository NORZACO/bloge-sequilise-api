var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");

var TutorialService = require("../services/TutorialService")
var db = require("../models");
var tutorialService = new TutorialService(db);






// /* GET tutorials listing. */
// router.get('/', async function(req, res, next) {
//   const tutorials = await tutorialService.getAll();
//   res.render('tutorials', {tutorials: tutorials});
// });


router.get('/x', async function (req, res, next) {
  const { title, description, published } = req.query;

  // Create conditions for 'title', 'description', and 'published' properties
  const titleCondition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const descCondition = description ? { description: { [Op.like]: `%${description}%` } } : null;
  const publishedCondition = published ? { published: { [Op.like]: `%${published}%` } } : null;

  // Combine conditions using Sequelize's logical operator Op.and
  const condition = { [Op.and]: [titleCondition, descCondition, publishedCondition] };

  // Call getAll() method of TutorialService with condition object
  const tutorials = await tutorialService.getAll(condition);

  // Render resulting data using res.render()
  res.render('tutorials', { tutorials });
});






router.get('/x', async function (req, res, next) {
  const { title, description, published } = req.query;

  // Create conditions for 'title', 'description', and 'published' properties
  let titleCondition = null;
  if (title) {
    titleCondition = { title: { [Op.like]: `%${title}%` } };
  }

  let descCondition = null;
  if (description) {
    descCondition = { description: { [Op.like]: `%${description}%` } };
  }

  let publishedCondition = null;
  if (published) {
    publishedCondition = { published: { [Op.like]: `%${published}%` } };
  }

  // Combine conditions using Sequelize's logical operator Op.and
  const conditions = [titleCondition, descCondition, publishedCondition].filter(function (condition) {
    return condition !== null;
  });
  const condition = { [Op.and]: conditions };

  // Call getAll() method of TutorialService with condition object
  const tutorials = await tutorialService.getAll(condition);

  // Render resulting data using res.render()
  res.render('tutorials', { tutorials });
});



router.get('/', async function(req, res, next) {
  const { title, description, published } = req.query;

  // Create conditions for 'title', 'description', and 'published' properties
  const condition = {
    [Op.and]: [
      // Check if 'title' query parameter is provided, and create condition if it is
      title && { title: { [Op.like]: `%${title}%` } },
      // Check if 'description' query parameter is provided, and create condition if it is
      description && { description: { [Op.like]: `%${description}%` } },
      // Check if 'published' query parameter is provided, and create condition if it is
      published && { published: { [Op.like]: `%${published}%` } }
    ]
    // Remove any falsey conditions from the array using .filter(Boolean)
    .filter(Boolean)
  };

  // Call getAll() method of TutorialService with condition object
  const tutorials = await tutorialService.getAll(condition);

  // Render resulting data using res.render()
  res.render('tutorials', { tutorials });
});



module.exports = router;
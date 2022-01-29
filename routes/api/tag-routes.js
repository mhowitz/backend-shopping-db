const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name'],
      through: ProductTag,
      as: 'tag_products'
    }
  }).then(tData => res.json(tData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name'],
      through: ProductTag,
      as: 'tag_products'
    }
  }).then(tData => res.json(tData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          tag_id: tag.id,
          product_id
        };
      });
      return ProductTag.bulkCreate(productTagIdArr);
    }
    // if no product tags, just respond
    res.status(200).json(tag);
  }).then(tData => {
    console.log(`new tag created!: ${tData}`);
    res.json(tData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
  // create a new tag

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(tgData=> {
    if(!tgData[0]) {
      res.status(404).json({ message: 'No tags found with this id' });
      return;
    }
    res.json(tgData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tData => {
    res.json(tData);
    console.log("Tag Deleted")
  }).catch(err => {
    res.status(400).json(err)
  })
});

module.exports = router;

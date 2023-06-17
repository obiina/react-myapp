const router = require('express').Router();

const listItemsModel = require('../models/listItems');

router.post('/api/list', async (req, res) =>{
    try{
        const newItem = new listItemsModel({
            item: req.body.item,
            description: req.body.description,
            features: req.body.features,
            featuresDeeds: req.body.featuresDeeds
        })

        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
 
    }catch(err){
        res.json(err);
    } 
})

router.get('/api/lists', async (req, res) => {
        try{
            const allListedItems = await listItemsModel.find({});
            res.status(200).json(allListedItems);
        }catch(err){
            res.json(err)
        }
})

router.put('/api/list/:id', async (req,res) => {
try{

    const listItem = await listItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json('Item Updated Successfully');
}catch(err){
    res.json(err)
}
})



router.delete('/api/list/:id', async (req,res) => {
    try{
        const deleteItem = await listItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item deleted Successfully');
    }catch(err){
        res.json(err)
    }
})


 
// Export Router
module.exports = router;





const express=require('express')
const router=express.Router()

const {
    getAlljobs,
    getJob,
    createJob,
    updateJob,
    deleteJobs
}=require('../controllers/jobs')

router.route('/').post(createJob).get(getAlljobs)
router.route('/:id').get(getJob).delete(deleteJobs).patch(updateJob)

module.exports=router
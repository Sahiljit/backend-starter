import express from 'express'
import {createTour, getTours} from '../controllers/tourController.js'

const router = express.Router()

router
    .route('/')
    .get(getTours)
    .post(createTour)



export default router
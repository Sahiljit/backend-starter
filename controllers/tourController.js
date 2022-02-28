import {Tour} from '../models/tourModel.js'

export const getTours = async(req, res) => {
    
    // remember error handling is not done here
    const tours = await Tour.find()

    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })

}


export const createTour = async(req, res) =>{

     // remember error handling is not done here
    const newTour = await Tour.create(req.body)

    res.status(201).json({
        status : 'success',
        data:{
            tour: newTour
        }
    })
    

}

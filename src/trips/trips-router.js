const path = require('path');
const express = require('express');
const xss = require('xss');
const TripsService = require('./trips-service');

const tripsRouter = express.Router();
const jsonParser = express.json();

const serializeTrip = trip => ({
  id: trip.id,
  trip_title: xss(trip.trip_title)
});

tripsRouter
  .route('/')
  .get((req, res, next) => {
    const db = req.app.get('db')
    TripsService.getAllTrips(db)
      .then(trips => res.status(200).json(trips.map(serializeTrip)))
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const { trip_title } = req.body
    const newTrip = { trip_title }
    const db = req.app.get('db')

    if(!trip_title) {
      return res.status(400).json({error: {message: 'Trip title is required'}})
    }
    TripsService.insertTrip(db, newTrip)
      .then(trip => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${trip.id}`))
          .json(serializeTrip(trip))
      })
      .catch(next)
  });

  tripsRouter
  .route('/:tripId')
  .all((req, res, next) => {
    const db = req.app.get('db')
    const id = req.params.tripId;
    TripsService.getTripById(db, id)
      .then(trip => {
        if(!trip) {
          return res.status(404).json({error: {message: 'Trip does not exist'}})
        }
        res.trip = trip
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.status(200).json(res.trip)
  })
  .delete((req, res, next) =>{
    const db = req.app.get('db')
    const id = req.params.tripId

    TripsService.deleteTrip(db, id)
      .then(() => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const {trip_title} = req.body
    const tripToUpdate = {trip_title}
    const db = req.app.get('db')
    const id = req.params.tripId

    const numberOfValues = Object.values(TripToUpdate).filter(Boolean).length
    if(numberOfValues === 0) {
      return res.status(400).json({error: {message: 'Request body must include Trip title'}})
    }
    TripsService.updateTrip(db, id, tripToUpdate)
      .then(() => {
        res.status(204).end()
      })
      .catch(next)
  });

  module.exports = tripsRouter;
const TripsService = {
  getAllTrips(db) {
    return db
      .select('*')
      .from('trips');
  },

  getTripById(db, id) {
    return db
      .select('*')
      .from('trips')
      .where({id})
      .first();
  },

  insertTrip(db, newTrip) {
    return db
      .insert(newTrip)
      .into('trips')
      .returning('*')
      .then(rows => rows[0]);
  },

  deleteTrip(db, id) {
    return db
      .from('trips')
      .where({id})
      .delete();
  },

  updateTrip(db, id, newTripFields) {
    return db
      .from('trips')
      .update(newTripFields)
      .where({id});
  }
};

module.exports = TripsService;
const React = require('react');
const Def = require('../default');
function index(data){
  let placesFormatted = data.places.map((place) =>{
    return(
      <div className="col-sm-6">
        <h2><a href={`/places/${place}`}>{place.name}</a></h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src = {place.pic} alt = {place.name}></img>
        <p>
          located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return(
    <Def>
      <main>
        <h1>Places to rant or rave about</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Def>
  )
}

module.exports = index
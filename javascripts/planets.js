var SolarSystem = (function(oldSolarSystem){
  
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var numPlanetsPeopleLanedOn = 0;

  	oldSolarSystem.getPlanets = function(){
	  return planets;
	}; 

	oldSolarSystem.getPlanetsLanedPeopleOn = function(){
      return numPlanetsPeopleLanedOn;
    }; 

    oldSolarSystem.setPlanetsLandedPeopleOn = function(){
      numPlanetsPeopleLanedOn++;	
	};

	return oldSolarSystem;
	
})(SolarSystem || {});
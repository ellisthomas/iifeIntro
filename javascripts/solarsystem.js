var SolarSystem = (function() {
	
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var dwaftPlanets = ["pluto"];
  var numPlanetsPeopleLanedOn = 0;
  
  

  return {
	getPlanets : function(){
	  return planets;
	}, 
	getPlanetsLanedPeopleOn: function(){
      return numPlanetsPeopleLanedOn;
    },  
    setPlanetsLandedPeopleOn: function(){
      numPlanetsPeopleLanedOn++;	
	},
	getDwarftPlanets : function(){
	  return "the are rejects";
	},
	setDwarftPlanets : function(){
	  dwaftPlanets.push(lumpOfRock);
	},
	
	
	
  }
})();

// console.log("Planets", SolarSystem.getPlanets());

// console.log("Planets with people: ", SolarSystem.getPlanetsLanedPeopleOn());

// SolarSystem.setSpaceships("Voyager 1");
// SolarSystem.setSpaceships("Voyager 2");
// SolarSystem.setSpaceships("Gemini");
// SolarSystem.setSpaceships("Apollo");
// console.log("Spaceships: ", SolarSystem.getSpaceships());




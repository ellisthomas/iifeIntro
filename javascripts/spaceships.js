var SolarSystem = (function(oldSolarSystem){

  	var spaceships = [];
	
	oldSolarSystem.getSpaceships = function(){
	  return spaceships;
	};

	oldSolarSystem.setSpaceships = function(newSpaceship){
	  spaceships.push(newSpaceship);
	};

	oldSolarSystem.wreckSpaceships = function(){
	  wreckSpaceships.pop();
	};

	return oldSolarSystem;
})(SolarSystem || {});

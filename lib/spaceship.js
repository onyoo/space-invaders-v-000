function Spaceship(name,crew,phasers,shields) {
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.crew = crew;
  if (crew.length === 0){
    this.docked = true;
  } else {
    this.docked = false;
  }
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged'
  this.rideHookUp();
}

Spaceship.prototype.rideHookUp = function() {
  var that = this;
  this.crew.forEach(function(member){
    member.currentShip = that;
  });
}
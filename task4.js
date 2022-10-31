function ElectricalAppliance (name, manufacturer, power, turn ){
    this.name= name,
    this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
    this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
    this.manufacturer = function(){
      
      console.log(`The ${name} is manufacturied by ${manufacturer}.`)
    }
  }
  
  const iron = new ElectricalAppliance('iron', 'Tefal');
  const power1  = new ElectricalAppliance('iron', '', 650);
  const turn = new ElectricalAppliance('iron', '', '', 'on');
  iron.manufacturer();
  power1.power1();
  turn.turn();
  
  
  function lighting (name, manufacturer, power, led){
    this.name= name,
    this.led = function(){console.log(`The ${this.name} is ${led}.`)}
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
    this.power1 = function(){console.log(`Electricity consumption of the ${this.name} is ${power1} W.`)}
  }
  
  const lamp = new lighting('lamp', 'IKEA');
  const power2  = new lighting('lamp','', 50);
  const led = new lighting('lamp','', '', 'LED');
  power2.power2();
  lamp.manufacturer();
  led.led();
  
  
  function pc (name, manufacturer, display, power){
    this.name= name,
    this.display = display,
    this.power2 = power2,
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
    Display is ${this.display}'. Power is ${this.power2} W.`)}
  }
  
  const comp = new pc('computer', 'IBM', 17, 220);
  
  comp.manufacturer();
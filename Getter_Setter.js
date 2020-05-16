

class Thermostat{
  constructor(temperature){
    //Creates Private(_) Temperature Input (Control)
    this._temperature = temperature;
  }

    //Gets Temperature and returns Celsius (Independent)
    get temperature(){
      return 5/9 * (this._temperature - 32);
    }

    //Sets Temperature to Fahrenheit (Dependent on "Getter")
    set temperature(tempCelsius){
      this._temperature = tempCelsius * 9.0/5 + 32;
    }


}



const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

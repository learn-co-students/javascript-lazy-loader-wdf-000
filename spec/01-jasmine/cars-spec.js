'use-strict';

describe('Cars', function() {
  
  beforeEach(function(){
    setFixtures('<body><div class="jumbotron"><div class="container"><h1>Car Model Lazy Load</h1></div></div><div class="container"><div id="cars"><div class="row"><div class="col-md-4 car"><h2>Chevrolet</h2><p><strong>Model:</strong> Tahoe</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4 car"><h2>Toyota</h2><p><strong>Model:</strong> Camry</p><p><strong>Year:</strong> 2002</p></div><div class="col-md-4 car"><h2>Mercedes-Benz</h2><p><strong>Model:</strong> E-Class</p><p><strong>Year:</strong> 1998</p></div></div><div class="row"><div class="col-md-4 car"><h2>GMC</h2><p><strong>Model:</strong> Acadia</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4 car"><h2>Ford</h2><p><strong>Model:</strong> Fusion</p><p><strong>Year:</strong> 2011</p></div><div class="col-md-4 car"><h2>Chrysler</h2><p><strong>Model:</strong> 300</p><p><strong>Year:</strong> 2005</p></div></div></div><br><div class="row"><div class="col-md-4 col-md-offset-4 center"><button class="btn btn-success" id="load-cars">Load more cars</button></div></div></div></body>');
  });

  describe("formatCars", function() {
    it('turns car JSON into Bootstrapped HTML', function() {
      var carsOneJSON = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];
      var htmlOne = '<div class="row"><div class="col-md-4 car"><h2>Dodge</h2><p><strong>Model:</strong> Avenger</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4 car"><h2>Nissan</h2><p><strong>Model:</strong> Maxima</p><p><strong>Year:</strong> 2009</p></div><div class="col-md-4 car"><h2>Subaru</h2><p><strong>Model:</strong> Impreza WRX</p><p><strong>Year:</strong> 2013</p></div></div>';
      var resultOne = formatCars(carsOneJSON);
      expect(resultOne).toEqual(htmlOne);
      
      var carsTwoJSON = [{"Make":"Acura","Model":"TL","Year":"2012"},{"Make":"Mercury","Model":"Sable","Year":"2008"},{"Make":"Lexus","Model":"ES 250","Year":"2012"}];
      var htmlTwo = '<div class="row"><div class="col-md-4 car"><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4 car"><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class="col-md-4 car"><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>';
      var resultTwo = formatCars(carsTwoJSON);
      expect(resultTwo).toEqual(htmlTwo);
    });
  });

  describe("addCarsToDOM", function() {
    it('accepts JSON, sends it to formatCars(), and adds return HTML to page', function() {
      var rowCount = $('#cars').children().length;

      var carsOneJSON = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];
      addCarsToDOM(carsOneJSON);
      expect($('#cars').children().length).toEqual(rowCount + 1);
      expect($('#cars').children().last().children().length).toEqual(3);
     
      var firstLastCar = $('#cars').children().last().children().last();
      expect(getBrand(firstLastCar)).toEqual("Subaru");
      expect(getModel(firstLastCar)).toEqual("Model: Impreza WRX");
      expect(getYearDate(firstLastCar)).toEqual("Year: 2013");
      
      var carsTwoJSON = [{"Make":"Acura","Model":"TL","Year":"2012"},{"Make":"Mercury","Model":"Sable","Year":"2008"},{"Make":"Lexus","Model":"ES 250","Year":"2012"}];
      addCarsToDOM(carsTwoJSON);
      expect($('#cars').children().length).toEqual(rowCount + 2);
      expect($('#cars').children().last().children().length).toEqual(3);

      var lastLastCar = $('#cars').children().last().children().last();
      expect(getBrand(lastLastCar)).toEqual("Lexus");
      expect(getModel(lastLastCar)).toEqual("Model: ES 250");
      expect(getYearDate(lastLastCar)).toEqual("Year: 2012");
    });
  });

  describe("fetchJSON", function() {
    it('queries API for the correct listing and passes returned data to addCarsToDOM()', function(done) {
      var lastCar = $('#cars').children().last().children().last();
      fetchJSON();
      setTimeout(function() {
        var lastCarAferAJAX = $('#cars').children().last().children().last();
        expect(getBrand(lastCarAferAJAX)).not.toEqual(getBrand(lastCar));
        expect(getBrand(lastCarAferAJAX)).toEqual("Mercedes-Benz");
        expect(getModel(lastCarAferAJAX)).toEqual("Model: C-Class");
        expect(getYearDate(lastCarAferAJAX)).toEqual("Year: 2014");
        done();
      }, 2000);
    });
  });
});
'use-strict';
describe('Cars', function() {
  
  beforeEach(function(){
    setFixtures('<body><div class="jumbotron"><div class="container"><h1>Car Model Lazy Load</h1></div></div><div class="container"><div id="cars"><div class="row"><div class="col-md-4"><h2>Chevrolet</h2><p><strong>Model:</strong> Tahoe</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4"><h2>Toyota</h2><p><strong>Model:</strong> Camry</p><p><strong>Year:</strong> 2002</p></div><div class="col-md-4"><h2>Mercedes-Benz</h2><p><strong>Model:</strong> E-Class</p><p><strong>Year:</strong> 1998</p></div></div><div class="row"><div class="col-md-4"><h2>GMC</h2><p><strong>Model:</strong> Acadia</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4"><h2>Ford</h2><p><strong>Model:</strong> Fusion</p><p><strong>Year:</strong> 2011</p></div><div class="col-md-4"><h2>Chrysler</h2><p><strong>Model:</strong> 300</p><p><strong>Year:</strong> 2005</p></div></div></div><br><div class="row"><div class="col-md-4 col-md-offset-4 center"><button class="btn btn-success" id="load-cars">Load more cars</button></div></div></div></body>');
  });

  describe(formatCars, function() {
    it('takes car JSON and makes it into Bootstrapped HTML', function() {
      var carsOneJSON = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];
      var htmlOne = '<div class="row"><div class="col-md-4"><h2>Dodge</h2><p><strong>Model:</strong> Avenger</p><p><strong>Year:</strong> 2013</p></div><div class="col-md-4"><h2>Nissan</h2><p><strong>Model:</strong> Maxima</p><p><strong>Year:</strong> 2009</p></div><div class="col-md-4"><h2>Subaru</h2><p><strong>Model:</strong> Impreza WRX</p><p><strong>Year:</strong> 2013</p></div></div>';
      expect(formatCars(carsOneJSON)).toEqual(htmlOne);
      
      var carsTwoJSON = [{"Make":"Acura","Model":"TL","Year":"2012"},{"Make":"Mercury","Model":"Sable","Year":"2008"},{"Make":"Lexus","Model":"ES 250","Year":"2012"}];
      var htmlTwo = '<div class="row"><div class="col-md-4"><h2>Acura</h2><p><strong>Model:</strong> TL</p><p><strong>Year:</strong> 2012</p></div><div class="col-md-4"><h2>Mercury</h2><p><strong>Model:</strong> Sable</p><p><strong>Year:</strong> 2008</p></div><div class="col-md-4"><h2>Lexus</h2><p><strong>Model:</strong> ES 250</p><p><strong>Year:</strong> 2012</p></div></div>';
      expect(formatCars(carsOneJSON)).toEqual(htmlTwo);
    });
  });

  describe(addCarsToDOM, function() {
    it('accepts car JSON, sends it to formatCars, and adds return HTML to page', function() {
      var originalNumOfCars = $('#cars').children().length);
      var carsOneJSON = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];
      addCarsToDOM(carsOneJSON);
      expect($('#cars').children().length).toEqual(originalNumOfCars + 3);
      
      var newNumOfCars = originalNumOfCars + 3;
      var carsTwoJSON = [{"Make":"Acura","Model":"TL","Year":"2012"},{"Make":"Mercury","Model":"Sable","Year":"2008"},{"Make":"Lexus","Model":"ES 250","Year":"2012"}];
      addCarsToDOM(carsTwoJSON);
      expect($('#cars').children().length).toEqual(newNumOfCars + 6);
    });
  });


});
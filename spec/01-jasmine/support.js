function getBrand(carDiv) {
  return carDiv.find("h2").text();
}

function getModel(carDiv) {
  return carDiv.find("p").first().text();
}

function getYearDate(carDiv) {
  return carDiv.find("p").last().text();
}
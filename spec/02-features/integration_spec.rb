feature "Integration Test", js: :true  do
  before(:each) do
    visit "/"
  end

  it "displays the cars index page with a button to load more cars" do
    expect(page).to have_content("Car Model Lazy Load")
    expect(page).to have_selector('#cars', count: 1)
    expect(page).to have_selector('.car', count: 6)
    expect(page).to have_button("Load more cars")
    expect(last_car_brand).to eq("Chrysler")
    expect(last_car_model).to eq("Model: 300")
    expect(last_car_year).to eq("Year: 2005")
  end

  it "adds three more cars on `Load more cars` being clicked" do
    click_for_cars
    expect(page).to have_selector('.car', count: 9)

    expect(third_to_last_car_brand).to eq("Honda")
    expect(third_to_last_car_model).to eq("Model: Accord")
    expect(third_to_last_car_year).to eq("Year: 1998")

    expect(second_to_last_car_brand).to eq("Audi")
    expect(second_to_last_car_model).to eq("Model: A4")
    expect(second_to_last_car_year).to eq("Year: 2012")

    
    expect(last_car_brand).to eq("Mercedes-Benz")
    expect(last_car_model).to eq("Model: C-Class")
    expect(last_car_year).to eq("Year: 2014")
  end

  it "adds three cars on first click, three new cars on next click" do
    click_for_cars
    expect(page).to have_selector('.car', count: 9)
    
    click_for_cars
    expect(page).to have_selector('.car', count: 12)

    expect(third_to_last_car_brand).to eq("Toyota")
    expect(third_to_last_car_model).to eq("Model: Yaris")
    expect(third_to_last_car_year).to eq("Year: 2007")

    expect(second_to_last_car_brand).to eq("Cadillac")
    expect(second_to_last_car_model).to eq("Model: DTS")
    expect(second_to_last_car_year).to eq("Year: 2007")

    expect(last_car_brand).to eq("Honda")
    expect(last_car_model).to eq("Model: Civic")
    expect(last_car_year).to eq("Year: 2012")
  end

  it "adds three cars on first click, three more on second, three more on third" do
    click_for_cars
    expect(page).to have_selector('.car', count: 9)
    
    click_for_cars
    expect(page).to have_selector('.car', count: 12)
    
    click_for_cars
    expect(page).to have_selector('.car', count: 15)

    expect(third_to_last_car_brand).to eq("Dodge")
    expect(third_to_last_car_model).to eq("Model: Avenger")
    expect(third_to_last_car_year).to eq("Year: 2013")

    expect(second_to_last_car_brand).to eq("Nissan")
    expect(second_to_last_car_model).to eq("Model: Maxima")
    expect(second_to_last_car_year).to eq("Year: 2009")

    expect(last_car_brand).to eq("Subaru")
    expect(last_car_model).to eq("Model: Impreza WRX")
    expect(last_car_year).to eq("Year: 2013")
  end
end

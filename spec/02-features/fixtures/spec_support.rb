module SpecSupport
  module Cars
    def fetch_car_brand(index)
      all('.car')[-index].find("h2").text
    end

    def last_car_brand
      fetch_car_brand(1)
    end

    def second_to_last_car_brand
      fetch_car_brand(2)
    end

    def third_to_last_car_brand
      fetch_car_brand(3)
    end

    def fetch_car_model(index)
      all('.car')[-index].first("p").text
    end

    def last_car_model
      fetch_car_model(1)
    end

    def second_to_last_car_model
      fetch_car_model(2)
    end

    def third_to_last_car_model
      fetch_car_model(3)
    end

    def fetch_car_year(index)
      all('.car')[-index].find("p:last-child").text
    end

    def last_car_year
      fetch_car_year(1)
    end

    def second_to_last_car_year
      fetch_car_year(2)
    end

    def third_to_last_car_year
      fetch_car_year(3)
    end
  end

  module ClickCars
    def count_cars
      all('.car').count
    end

    def click_for_cars
      car_count = count_cars
      click_button("Load more cars")
      start_time = Time.now
      end_time = Time.now
      until end_time - start_time > 10
        return true if count_cars >= car_count + 3
        sleep(0.001)
        end_time = Time.now
      end
      false
    end
  end
end

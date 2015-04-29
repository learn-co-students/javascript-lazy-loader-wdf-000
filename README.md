---
language: JavaScript, js
tags: selectors, jquery, ajax, json, api
type: lab
resources: 5
---

# Lazy Loader

![lounging dog](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/lounging-dog.jpg)

## Contents

* Note
* Background
* Objective
* jQuery's ajax function
* Car API
* Instructions
* Testing
* Resources

## Note

This lab uses both Capybara and Jasmine tests. To run the Jasmine tests, type `ironboard` or `ironboard -b`. To run the Capybara tests, type `rspec`. Get all the Jasmine tests to pass before running the Capybara suite.

## Background

[Lazy Loading](http://en.wikipedia.org/wiki/Lazy_loading) is a way that web pages increase the speed at which their pages load by only loading some of the content that they want. They then add more content as the client scrolls down.

To see this in action, take a look at [Boxed.com](https://www.boxed.com/products/category/6/household).Scroll to the bottom of the page and notice that the site adds four items to the DOM each time you scroll down.

Lazy loading is a smart way to increase load times of pages. Let's say you work for a funny t-shirt company that has two-thousand designs that clients can choose from. If a client visits your site and clicks  "View All Designs", their browser takes a *while* to render the page because the browser has to render two-thousand images to their page, one for each design. This is not so good.

You could fix this by loading only the first thirty designs when the user clicks "View All". Then, as they scroll towards the bottom of the page, you could add thirty new shirts to the page. You would then have the JavaScript repeat this process until all the designs have been loaded.

## Objective

You'll be using JavaScript to make a lazy loader. However, instead of the JavaScript adding elements to the page as the client scrolls down, it will add when the client clicks "View more".

Right click on the link below and select "Save link as..." to see a video of how your `index.erb` should behave.

[lazy load vid](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/cars.mov)

## jQuery's `ajax` function

jQuery's [ajax](http://api.jquery.com/jquery.ajax/) funtion makes an asynchronous HTTP request. For this lab, you'll be making requests to [http://mimeocarlisting.azurewebsites.net/api/cars/](http://mimeocarlisting.azurewebsites.net/api/cars/). 

## Car API

This is an API that displays cars. It accepts two ending routes, the first of which is the page you're on (), the second is the number of cars you'd like to see. 

For instance, two view the first six cars, the url would be [http://mimeocarlisting.azurewebsites.net/api/cars/1/6](http://mimeocarlisting.azurewebsites.net/api/cars/1/6). To fetch the next six cars, the url would change to [http://mimeocarlisting.azurewebsites.net/api/cars/2/6](http://mimeocarlisting.azurewebsites.net/api/cars/2/6).

Let's take another example. Say you wanted to see two cars at a time. The first two cars live at [http://mimeocarlisting.azurewebsites.net/api/cars/1/2](http://mimeocarlisting.azurewebsites.net/api/cars/1/2), the next two at [http://mimeocarlisting.azurewebsites.net/api/cars/2/2](http://mimeocarlisting.azurewebsites.net/api/cars/2/2), the next two at [http://mimeocarlisting.azurewebsites.net/api/cars/3/2](http://mimeocarlisting.azurewebsites.net/api/cars/3/2), etc.

The first six cars, found [here](http://mimeocarlisting.azurewebsites.net/api/cars/1/6), have already been added to the dom. Your task is to load the next three cars, then the next three, then the next three, etc.

## Instructions

You'll be modifying only two files:

1. `public/js/cars.js`
2. `public/js/on-click.js`

You'll put all the functions you write in `cars.js` and all the code that must happen within a jQuery [.ready()](https://api.jquery.com/ready/) function inside `on-click.js` (hint: it might be an `.on("click", ...)` event handler).

To see where your code's at, you can always run `> bundle install` followed by `> rackup` and visit [http://localhost:9292/](http://localhost:9292/) or followed by `> shotgun` and visit [http://localhost:9393/](http://localhost:9393/).

## Testing

As noted at the top, this lab uses both Capybara and Jasmine to test the JavaScript. Start by passing all the Jasmine tests (run your testing suite using `ironboard`, whichever gem you use). Then run `rspec` to run the Capybara tests. Get all Jasmine tests passing before you run the Capybara tests.

## Resources

* [jQuery API - ajax](http://api.jquery.com/jquery.ajax/)
* [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
* [jQuery API - Events - Click](http://api.jquery.com/click/)

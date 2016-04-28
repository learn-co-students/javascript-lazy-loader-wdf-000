# Lazy Loader

![lounging dog](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/lounging-dog.jpg)

## Objectives

- Use JavaScript to make a lazy loader/infinite scroller for a car dealership
- Use Ajax to add the new content to the page without refreshing the page

Right click on the link below and select "Save link as..." to see a video of how your `index.erb` should behave.
[lazy load vid](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/cars.mov)


## Background

[Lazy Loading](http://en.wikipedia.org/wiki/Lazy_loading) is a way that web pages increase the speed at which their pages load by only loading some of the content that they want. They then add more content as the client scrolls down.

To see this in action, take a look at [Boxed.com](https://www.boxed.com/products/category/6/household). Scroll to the bottom of the page and notice that the site adds four items to the DOM each time you scroll down.

Lazy loading is a smart way to increase load times of pages. Let's say you work for a funny t-shirt company that has two-thousand designs that clients can choose from. If a client visits your site and clicks  "View All Designs", their browser takes a *while* to render the page because the browser has to render two-thousand images to their page, one for each design. This is not so good.

You could fix this by loading only the first thirty designs when the user clicks "View All". Then, as they scroll towards the bottom of the page, you could add thirty new shirts to the page. You would then have the JavaScript repeat this process until all the designs have been loaded.


## jQuery's `ajax` function

jQuery's [ajax](http://api.jquery.com/jquery.ajax/) function makes an asynchronous HTTP request. 

For instance, if I wanted to see the Netflix's share price, I could use the MarkIt API. The url for fetching a stock quote via MarkIt is `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=< stock symbol here>`. Netflix has a symbol of `NFLX`. Therefore, to get its quote info, you would visit [http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=NFLX](http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=NFLX). 

Here's an example AJAX request that adds Netflix's last stock price to the div `#netflix-price`.

```html
<html>
  <head>
    <title>Netflix</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  </head>
  <body>
    <h1>Netflix Stock Price</h1>
    <div id="netflix-price"><i class="fa fa-spinner fa-spin"></i> Fetching Data...</div>
    <script>
    
      var url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=NFLX";

      $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          var price = data["LastPrice"];
          $("#netflix-price").html("$" + price);
        }
      });

    </script>
  </body>
</html>
```

To see the above code in action, run `rackup` and visit [http://localhost:9292/example](http://localhost:9292/example).

## JSONP

This lab uses `JSONP`. If you don't know what `JSONP` is, please read [Wikipedia - JSONP](https://en.wikipedia.org/wiki/JSONP) and [JSON versus JSONP Tutorial](http://json-jsonp-tutorial.craic.com/index.html).

**NOTE** `JSONP` requires a `callback` as part of the `URL`, this lab **does not**.

## Car API

For this lab, you'll be making requests to [http://mimeocarlisting.azurewebsites.net/api/cars/](http://mimeocarlisting.azurewebsites.net/api/cars/). This is an API that displays cars. It accepts two ending routes, the first of which is the page you're on while the second is the number of cars you'd like to see. 

For instance, to view the first six cars, the url would be [http://mimeocarlisting.azurewebsites.net/api/cars/1/6](http://mimeocarlisting.azurewebsites.net/api/cars/1/6). To fetch the next six cars, the url would change to [http://mimeocarlisting.azurewebsites.net/api/cars/2/6](http://mimeocarlisting.azurewebsites.net/api/cars/2/6).

Let's take another example. Say you wanted to see two cars at a time. The first two cars live at [http://mimeocarlisting.azurewebsites.net/api/cars/1/2](http://mimeocarlisting.azurewebsites.net/api/cars/1/2), the next two at [http://mimeocarlisting.azurewebsites.net/api/cars/2/2](http://mimeocarlisting.azurewebsites.net/api/cars/2/2), the next two at [http://mimeocarlisting.azurewebsites.net/api/cars/3/2](http://mimeocarlisting.azurewebsites.net/api/cars/3/2), etc.

The first six cars, found [here](http://mimeocarlisting.azurewebsites.net/api/cars/1/6), have already been added to the dom. Your task is to load the next three cars, then the next three, then the next three, etc.


## Instructions

You'll be modifying only two files:

1. `public/js/cars.js`
2. `public/js/on-click.js`

You'll put all the functions you write in `cars.js` and all the code that must happen within a jQuery [.ready()](https://api.jquery.com/ready/) function inside `on-click.js` (hint: it might be an `.on("click", ...)` event handler).

To see where your code's at, you can always run `> bundle install` followed by `> rackup` and visit [http://localhost:9292/](http://localhost:9292/) or followed by `> shotgun` and visit [http://localhost:9393/](http://localhost:9393/).


## Testing

This lab uses both Capybara and Jasmine tests. To run the Jasmine tests, type `learn` or `learn -b`. To run the Capybara tests, type `rspec`. Get all the Jasmine tests to pass before running the Capybara suite.


## Resources

* [jQuery API - ajax](http://api.jquery.com/jquery.ajax/)
* [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
* [jQuery API - Events - Click](http://api.jquery.com/click/)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/lazy-loader.js' title='Lazy Loader'>Lazy Loader</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/lazy-loader.js'>Lazy Loader Lab </a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/lazy-loader.js'>Lazy Loader Lab </a> on Learn.co and start learning to code for free.</p>

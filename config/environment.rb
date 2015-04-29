require 'bundler'
Bundler.require(:default)

require 'json'
require 'open-uri'
require 'capybara'
require_all 'app'

RAKE_APP ||= Rake.application
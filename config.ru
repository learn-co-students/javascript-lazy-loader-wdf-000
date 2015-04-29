$LOAD_PATH << '.'
require './config/environment'

use Rack::Static, :urls => ['/css', '/js'], :root => 'public'
use Rack::MethodOverride

run ApplicationController
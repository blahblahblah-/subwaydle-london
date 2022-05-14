require "csv"
require "json"

routes = [
  "AEL", "DRL", "EAL1", "EAL2", "ISL", "KTL", "SIL", "TCL", "TKL1", "TKL2", "TML", "TWL"
]

data = {}

routes.each do |r|
  route_shape_data = []
  route_shape_json = File.read("data/shapes/#{r}.json")
  data[r] = JSON.parse(route_shape_json)
end

puts "Writing to JSON file"

file = File.open("../src/data/shapes.json", "w")
file.puts JSON.pretty_generate(data)
file.close
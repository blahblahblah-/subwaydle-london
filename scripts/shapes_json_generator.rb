require "csv"
require "json"

routes = [
  "Bakerloo",
  "Central-1",
  "Central-2",
  "Central-3",
  "Circle",
  "District-1",
  "District-2",
  "District-3",
  "District-4",
  "DLR-1",
  "DLR-2",
  "DLR-3",
  "DLR-4",
  "DLR-5",
  "Elizabeth-1",
  "Elizabeth-2",
  "Elizabeth-3",
  "Elizabeth-4",
  "Elizabeth-5",
  "Hammersmith",
  "Jubilee",
  "Metropolitan-1",
  "Metropolitan-2",
  "Metropolitan-3",
  "Metropolitan-4",
  "Northern-1",
  "Northern-2",
  "Northern-3",
  "Northern-4",
  "Northern-5",
  "Northern-6",
  "Overground-1",
  "Overground-2",
  "Overground-3",
  "Overground-4",
  "Overground-5",
  "Overground-6",
  "Overground-7",
  "Overground-8",
  "Overground-9",
  "Overground-10",
  "Overground-11",
  "Piccadilly-1",
  "Piccadilly-2",
  "Piccadilly-3",
  "Victoria",
  "Waterloo",
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
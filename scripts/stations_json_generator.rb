require "csv"
require "json"
require "rgeo"

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

stations = {}
stationPoints = {}
factory = RGeo::Geos.factory(:native_interface => :ffi)

stations_csv = File.read('data/stations.csv')
csv = CSV.parse(stations_csv, headers: true)
csv.each do |row|
  stations[row['ID']] = {
    id: row['ID'],
    name: row['Station'].gsub(' and ', ' & ').gsub(/\([^)]*\)/, '').strip,
    latitude: row['Latitude'].to_f,
    longitude: row['Longitude'].to_f,
    stops: {},
  }
  stationPoints[row['ID']] = factory.point(row['Latitude'].to_f,row['Longitude'].to_f).fg_geom
end

routes.each do |r|
  shape_json = File.read("data/shapes/#{r}.json")
  shape = JSON.parse(shape_json)
  polyline = factory.line_string(shape.map { |coords|
    factory.point(coords[1], coords[0])
  })
  low_level_polyline = polyline.fg_geom

  route_csv = File.read("data/stops/#{r}.csv")
  csv = CSV.parse(route_csv)
  csv.each do |row|
    station_code = row[0]
    point = stationPoints[station_code]
    dist = low_level_polyline.project(point)
    low_level_closest_point = low_level_polyline.interpolate(dist)
    closest_point = factory.wrap_fg_geom(low_level_closest_point)
    closest_coord = shape.sort_by { |coords| (coords[1] - closest_point.x).abs + (coords[0] - closest_point.y).abs }.first
    stations[station_code][:stops][r] = {
      latitude: closest_coord[1],
      longitude: closest_coord[0]
    }
  end
end

puts "Writing to JSON file"

file = File.open("../src/data/stations.json", "w")
file.puts JSON.pretty_generate(stations)
file.close
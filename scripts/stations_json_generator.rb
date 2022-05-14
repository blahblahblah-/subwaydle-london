require "csv"
require "json"
require "rgeo"

routes = [
  "AEL", "DRL", "EAL1", "EAL2", "ISL", "KTL", "SIL", "TCL", "TKL1", "TKL2", "TML", "TWL"
]

stations = {}
stationPoints = {}
factory = RGeo::Geos.factory(:native_interface => :ffi)

stations_csv = File.read('data/stations.csv')
csv = CSV.parse(stations_csv, headers: true)
csv.each do |row|
  stations[row['Station Code']] = {
    id: row['Station ID'],
    name_english: row['English Name'],
    name_chinese: row['Chinese Name'],
    latitude: row['Latitude'].to_f,
    longitude: row['Longitude'].to_f,
    stops: {},
  }
  stationPoints[row['Station Code']] = factory.point(row['Latitude'].to_f,row['Longitude'].to_f).fg_geom
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
    stations[station_code][:stops][r[0..2]] = {
      latitude: closest_coord[1],
      longitude: closest_coord[0]
    }
  end
end

puts "Writing to JSON file"

file = File.open("../src/data/stations.json", "w")
file.puts JSON.pretty_generate(stations)
file.close
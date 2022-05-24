require "csv"

stations_mapping = {}
lines = {}

stations_file = File.read('stations.csv')
csv = CSV.parse(stations_file, headers: true)
csv.each do |row|
  stations_mapping[row['Station']] = row['ID']
end


lines_file = File.read('London tube lines.csv')
csv = CSV.parse(lines_file, headers: true)
csv.each do |row|
  line = row['Tube Line']
  unless lines[line]
    lines[line] = []
  end

  from = stations_mapping[row['From Station']]
  to = stations_mapping[row['To Station']]

  lines[line] << [from, to]
end

lines.each do |line_name, line|
  line.select { |pair1| line.none? { |pair2| pair1[0] == pair2[1] }}.each_with_index do |start_pair, i|
    routing = [start_pair[0]]

    current_pair = start_pair
    while current_pair
      routing << current_pair[1]
      current_pair = line.find { |pair| pair[0] == current_pair[1] && !routing.include?(pair[1])}
    end

    filename = "#{line_name}.csv"

    if i > 0
      filename = "#{line_name}-#{i}.csv"
    end

    CSV.open(filename, "wb") do |csv|
      routing.each do |station|
        csv << [station]
      end
    end
  end
end
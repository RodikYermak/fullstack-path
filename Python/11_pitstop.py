# 🏁 Pit Stop Timing Optimizer 🔧
#
# 1. Ask the user for the total race time in seconds.
# 2. Ask how many pit stops were made.
# 3. Ask for the average pit stop duration (in seconds).
#
# Then:
# - Calculate the total pit stop time.
# - Calculate the percentage of the race spent in the pits.
# - Round the percentage to 2 decimal places.
#
# Finally, print all of the following:
# - Total pit stop time in seconds
# - Percentage of race time spent in pits
# - A final message if pit time > 5% of the race: "You need a new pit crew. 🛠️"
time = float(input('What is the total race time: '))
stops = int(input('How many pit stops were made: '))
duration = int(input('The average pit stop suration: '))

total_pitstop_time = stops * duration
pits_percentage = round(total_pitstop_time / time * 100, 2)

print(time)
print(stops)
print(duration)

print(f'Total pit stop time in {total_pitstop_time} seconds')
print(f'Percentage of race time spent in pits: {pits_percentage}')

if pits_percentage > 5:
    print('You need a new pit crew.')
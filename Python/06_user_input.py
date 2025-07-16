# name = input('What is your name?')
# age = input('What is your age?')
# print(name + age)

f_name = input('What is your first name?')
distance_km = input('Provide distance in km')
distance_miles = float(distance_km) / 1.609
print(f'Greetings, {f_name.title()}. Your km {distance_km} are converted into {round(distance_miles,1)} miles')
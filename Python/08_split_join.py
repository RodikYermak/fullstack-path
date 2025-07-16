csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
#we need to split csv variably be , : and  ; 
# we can try to normalize the list by chaining replace calls and then using split
# print(csv.split(','))

normalized = csv.replace(':', ',').replace(';', ',')
normalized_list = normalized.split(',')

friends_list = normalized.split(',')
print(friends_list)
# From the list above fill a list(friends_list) properly
# with the names of all the friends. One per "slot"
# you may need to run same command several times
# use print() statements to work your way through the exercise

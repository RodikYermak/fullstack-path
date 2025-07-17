# print('Guessing game')
# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game.
# Give user input box: 1. To capture guesses,
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements durng execution, so If you want to see prints during whle loop, then print to the input box

#Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution, so If you want to see prints during whle loop, print to the input box (This is specific to this platform)
# Three Loop Questions:
#1. What do I want to repeat?
#  ->
#2. What do I want to change each time?
#  ->
#3. How long should we repeat?
#  ->

i=0
system_num = 10
while i < 3:
    user_guess = int(input('Guess the number: '))
    if user_guess == system_num:
        print('You Won!')
        break
    elif user_guess < system_num:
        print('Too low')
    elif user_guess > system_num:
        print('Too high')
    i+=1
else:
    print('You lost')

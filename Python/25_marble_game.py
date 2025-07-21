print('test')
# draw a marble from a bag (assume it's random)
# a bag has 10 marbles: 6 green and 4 red
# if you draw a green marble you win same amount that you bet, if you draw a red marble you lose amount you bet
# marble are replaced nto bag after each round
# before draw decide how much you will bet and enter it
# you start the game with 1,000 gold pieces or $
# the number of rounds/draws should be variable
# if you lose half of your money game is over
# print/show out data as you go along, and remember you have to prnt data in the inputprompt
# Bonus: replace two marbles 1 green with a black 10X winner marble, 1 red with a 5X white loser marble

import random
# create a bag with 10 marbles
bag = ('green','green','green','green','green','black','red','red','red','white')
# starting amount of money
start_purse = 1000
# current money amount
purse = start_purse
# result of last round
result = 0
# how many rounds
rounds = 3
# last marble
marble = 'none'
# welcome user to game
print(f'You start the game with {start_purse} gold pieces')
# loop drawing marbles
for draw in range(1, rounds+1):
#   how much was bet
    bet = int(input(f'Current Purse: {purse} Last draw: {marble} \nRound {draw} - How much do you want to bet?: '))
#   draw marble
    marble = random.choice(bag)
#   win or lose
    if marble == 'green':
        result = bet
    elif marble == 'black':
        result = 10 * bet
    elif marble == 'white':
        result = -5 * bet
    else:
        result = -bet
#   calc win or loss/result and new amount/purse
    purse += result
#   lose game if lose half of money
    if purse < 0.5 * start_purse:
        print(f'Game over! You lost to much gold!!!')
        break
#   print relusts
    print(f'purse: {purse}, last result: ({marble}): {result}')
    print('')
# print final results
print('starting/ ending purse: ', start_purse, '/',purse)
print('gain/loss: ', ((purse-start_purse)/start_purse *100),'%')


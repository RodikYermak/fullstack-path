# 🏆 Raffle Prize Picker — Challenge Steps
#
# 1. Ask how many people are entering the raffle (at least 3 names).
# 2. Use a loop to collect their names into a list.
# 3. Ask for exactly 3 prize names (in order) and store them in a list.
# 4. Randomly pick 3 different winners from the participant list.
# 5. Print out who wins which prize and make sure the final one
#    is clearly marked as the Grand Prize. 🏆
#
# Hint: Use loops, lists, and a tool that picks random items without repeats.
num_people = int(input("How many people are entering the raffle?"))
if num_people < 3:
    print("You need at least 3 participants to run the raffle!")
    exit()

participants = []
for i in range(num_people):
    name = input(f"Enter name #{i+1}: ")
    participants.append(name)

prizes = []
for i in range(3):
    prize = input(f"Prize {i+1}: ")
    prizes.append(prize)

import random
winners = random.sample(participants, 3)

print("==== Raffle Results ====")
for i in range(3):
    if i == 2:
        print(f"Grand Winner: {winners[i]} wins the {prizes[i]}!")
    else:
        print(f"-{winners[i]} wins the {prizes[i]}")
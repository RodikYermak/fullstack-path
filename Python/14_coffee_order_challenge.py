# ☕ Coffee Order Queue Challenge
# 1. Set up two variables: one for total price, one for drink count
# 2. Start a while True loop
# 3. Ask for the customer's name
# 4. If the name is "done", break the loop
# 5. Ask for their drink order
# 6. If it's "latte", add 3.50 to total and +1 to drink count
#    If it's "americano", add 3.00 to total and +1 to drink count
#    If it's "espresso", add 2.50 to total and +1 to drink count
# 7. If it's not one of those drinks, print a warning and continue
# 8. After the loop, print total number of drinks and total price

total_price = 0
drink_count = 0

while True:
    name = input("Enter customer name (or type 'done' to finish): ")

    if name == "done":
        break

    drink = input("Enter order for " + name + ": ")

    if drink == "latte":
        total_price += 3.50
        drink_count += 1
    elif drink == "americano":
        total_price += 3.00
        drink_count += 1
    elif drink == "espresso":
        total_price += 2.50
        drink_count += 1
    else:
        print(f"Sorry, {drink} is not on the menu.")
        continue

print("Order queue complete.")
print("Total drink ordered: ", drink_count)
print(f"Total price: ${total_price:.2f}")
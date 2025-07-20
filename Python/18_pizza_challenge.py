print('test')

#  🍕 Pizza Builder — Challenge Steps
#
# 1. Define a Pizza class that stores:
#    - size, crust type, and a list of toppings
# 2. Add a method to add a new topping
# 3. Add a method to remove a topping if it exists
# 4. Add a method to print pizza details:
#    - size, crust, and all toppings (or “No toppings yet!”)
# 5. Create a pizza object, customize it, and print the summary
import platform as pl, string, os

class Pizza:
    def __init__(self, size=10, crust='thin', toppings=None):
        self.size = size
        self.crust = crust
        self.toppings = toppings if toppings is not None else []
    def add_topping(self, topping):
        print(f'Adding topping: {topping}')
        self.toppings.append(topping)
    def remove_topping(self, topping):
        if topping in self.toppings:
            self.toppings.remove(topping)
            print(f'Removed topping: {topping}')
        else:
            print(f"Topping '{topping}' not found")
    def print_details(self):
        print("Pizza details:")
        print(f"    Size: {self.size}")
        print(f"    Crust: {self.crust}")
        if self.toppings:
            print(f"    Toppings: {', '.join(self.toppings)}")
        else:
            print("     No toppings yet!")

p = Pizza()

p.add_topping('cheese')
p.add_topping('philly steak')
p.remove_topping('che')
p.print_details()


print(pl.python_version())
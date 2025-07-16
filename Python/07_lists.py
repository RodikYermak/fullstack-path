# You sell lemonade over two weeks, the lists show number of lemonades sold per week
# Profit for each lemonade sold is $1.5
# Add another day to week 2 list by capturing a number as input
# Combine the two lists into the list called 'sales'
# Calculate/print how much you have earned on
# Best day
# Worst day
# Separately and in total
# Hint: 3 prints in total

sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
daily_sale = input('Today\'s sale')
sales_w2.append(int(daily_sale))
sales = sales_w1 + sales_w2

print(max(sales)*1.5)
print(min(sales)*1.5)
print(sum(sales)*1.5)

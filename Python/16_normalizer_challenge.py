print('test')

# 📱 Phone Number Formatter
#
# 1. Ask the user to enter a U.S. phone number in **any format**.
# 2. Use .strip() to remove any leading/trailing spaces.
# 3. Replace common separators (-, (, ), .) with spaces.
# 4. Use .split() to break into chunks, then .join() to merge the digits.
# 5. Check if the cleaned number has **exactly 10 digits**.
# 6. If yes, format it like this: (123) 456-7890
# 7. If not, print an error message: "Please enter exactly 10 digits."

phone_input = input("Enter a U.S. phone number (any format): ")

cleaned = phone_input.strip()

for ch in ["-", "(", ")", "."]:
    cleaned = cleaned.replace(ch, " ")

parts = cleaned.split()
digits_only = "".join(parts)

if len(digits_only) == 10:
    area = digits_only[0:3]
    mid = digits_only[3:6]
    end = digits_only[6:]
    print(f"Formatted number: ({area}) {mid}-{end}")
else:
    print("Error: Please enter exactly 10 digits.")

# ✅ Test it out!
#
#  - 123-456-7890
#  - (123)4567890
#  - 123. 456 . 7890
#  -    123 456 7890
#  - 1234567890
#  - 123-45-789
#  - abc-456-7890
#  - 12345678901234
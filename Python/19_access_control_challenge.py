# 🛂 Access Control Scanner Challenge
#
# 1. Create a set of revoked badge numbers.
# 2. Create two empty lists: "approved" and "denied".
# 3. Start a loop to collect visitor info:
#    - Ask for the visitor's name (or type "done" to finish).
#    - If the name is "done", exit the loop.
#    - Otherwise, ask for their badge number.
#    - Check if the badge is revoked:
#        • If revoked: add the name to "denied" and display "ACCESS DENIED".
#        • If not: add the name to "approved" and display "ACCESS GRANTED".
# 4. Print the final "Access Summary" for "✅ Approved Visitors" & "⛔️ Denied Visitors":
#    - Sort both lists alphabetically.
#    - Display the total number of approved and denied visitors.


revoked_badges = {'EMP12345', 'EMP12346', 'EMP12347', 'EMP12348', 'EMP12349'} # set
approved = [] # list
denied = [] # list

def summary_print(visitors, label):
    print(f'\n{"✅" if label == "approved" else "⛔️"} Access Summary: {label.capitalize()} Visitors')
    visitors.sort(key=lambda x: x[0].lower())
    for name, badge in visitors:
        print(f'{name} ({badge})')
    print(f'Total {label}: {len(visitors)}')

while True:
    visitor_name = input('What\'s visitor\'s name? ').strip()
    if visitor_name.lower() == 'done':
        break

    badge_number = input('What\'s a badge number? ').strip().upper()

    if not visitor_name or not badge_number:
        print("Name and badge number are required.")
        continue

    if badge_number in revoked_badges:
        print('ACCESS DENIED')
        denied.append((visitor_name, badge_number))
    else:
        print('ACCESS GRANTED')
        approved.append((visitor_name, badge_number))

summary_print(approved, 'approved')
summary_print(denied, 'denied')
print('Project -  Crypto')
# create keys string
# autogenerate the values string by offsetting original string
# create two dictionaries
#user input 'the message' and mode
# run encode or decode
# return result
# clean and beautify the code
def enigma_light():
    keys = 'abcdefghijklmnopqrstuvwxyz !'
    values = keys[-1] + keys[0:-1]
    # print(keys)
    # print(values)
    dict_e = dict(zip(keys, values))
    dict_d = dict(zip(values, keys))
    # print(dict_e)
    # print(dict_d)
    msg = input('Enter your secret message quietly: ')
    mode = input('Crypto mode: encode (e) OR decrypt as default: ')
    if mode.lower() == 'e':
        new_msg = ''.join([dict_e[letter] for letter in msg.lower()])
    else:
        new_msg = ''.join([dict_d[letter] for letter in msg.lower()])

    return new_msg.capitalize()

print(enigma_light())
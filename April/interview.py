"""
Provide library that allows getting and setting fields based on given paths:
Assuming you have a variable with different parts, separated by dots: `USER.part_a.part_b`,
define a data structure that allows get() & set() methods.

Path examples:
USER.general.birth_date
USER.general.name.first_name
USER.general.name.last_name
TEST.something.anything

Usage example:

a = Profile()

a.set_variable(variable='USER.general.name.last_name', value='Last')
a.set_variable(variable='USER.general.name.first_name', value='First')
a.get_variable(variable='USER.general.name.last_name') -> 'Last'
a.get_variable(variable='USER.general.name.first_name') -> 'First'
a.get_variable(variable='USER.general.name') -> { 'first_name': 'First', 'last_name': 'Last' }
a.get_variable(variable='USER.general') -> { 'name': { 'first_name': 'First', 'last_name': 'Last' } }
a.set_variable(variable='USER.education.degree', value='BA')
a.set_variable(variable='USER.education.degree', value='MBA')
a.get_variable(variable='USER.education.degree') -> 'MBA'
a.set_variable(variable='USER.education.years_studied', value=4)
a.get_variable(variable='USER.education.years_studied') -> 4
a.get_variable(variable='USER.test.test.test') -> None	# hasn't been set
"""

# MY ATTEMPT
# class Profile:
#     def __init__(self):
#         pass

#     def set_variable(self, variable, value):
#         self.variable =  {
#             "USER": {
#                 "education": {
#                     "degree": self.value,
#                     "years_studied": self.value
#                 },
#                 "general": {
#                     "name": { 
#                         "last_name": self.value,
#                         "first_name": self.value
#                 },
#             }
#         }
#         self.value = value

#     def get_variable(self, value):
#         return self.value

class Profile:
    def __init__(self):
        self.data = {}

    def set_variable(self, variable, value):
        print(variable)
        dictionary = self.data
        keys_list = variable.split('.')
        print(keys_list)
        print(dictionary)
        for key in keys_list[:-1]:
            dictionary.setdefault(key, {})
        dictionary.update({keys_list[-1]: value})

        print(dictionary)

    def get_variable(self):
        pass

# TEST

a = Profile()

a.set_variable(variable='USER.general.name.last_name', value='Last')
# a.set_variable(variable='USER.general.name.first_name', value='First')
# print(a.get_variable(variable='USER.general.name.last_name')) # 'Last'
# print(a.get_variable(variable='USER.general.name.first_name')) # 'First'
# print(a.get_variable(variable='USER.general.name')) # { 'first_name': 'First', 'last_name': 'Last' }
# print(a.get_variable(variable='USER.general')) # { 'name': { 'first_name': 'First', 'last_name': 'Last' } }
# a.set_variable(variable='USER.education.degree', value='BA')
# a.set_variable(variable='USER.education.degree', value='MBA')
# print(a.get_variable(variable='USER.education.degree')) # 'MBA'
# a.set_variable(variable='USER.education.years_studied', value=4)
# print(a.get_variable(variable='USER.education.years_studied')) # 4
# print(a.get_variable(variable='USER.test.test.test')) # None	(hasn't been set)
# a.set_variable(variable='USER.general.name.USER.general.name', value="name")
# print(a.get_variable(variable='USER.general.name')) # 'name'

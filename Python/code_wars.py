def high(x):
    print('test')

# Manual test cases using built-in assert
def run_tests():
    assert high('man i need a taxi up to ubud') == 'taxi'
    assert high('what time are we climbing up the volcano') == 'volcano'
    assert high('take me to semynak') == 'semynak'
    assert high('aa b') == 'aa'
    assert high('b aa') == 'b'
    assert high('bb d') == 'bb'
    assert high('d bb') == 'd'
    assert high('aaa b') == 'aaa'
    print("All tests passed.")

# Run the tests
# run_tests()
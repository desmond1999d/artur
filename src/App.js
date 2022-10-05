a = 0
b = 0
op = 0
while True:
    print('input a:')
    a = input()
    print('input b:')
    b = input()
    print('input operation: ')
    op = input()
    print('result: ')
    if op == '-':
        print(int(a) - int(b))
    elif op == '+':
        print((int(a) + int(b)))
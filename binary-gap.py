# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

import re
def solution(N):
    result = 0
    binary_list = re.findall('1(0+)1',bin(N))
    print bin(N)
    print binary_list
    if len(binary_list):
        result = len(max(binary_list))
    return result

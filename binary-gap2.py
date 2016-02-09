def solution(N):
    result = 0
    N = '{0:b}'.format(N)
    # print N
    one_positions = [i for i,val in enumerate(N) if val == '1']
    # print one_positions
    for i , val  in enumerate(one_positions[:-1]):
        diff = one_positions[i+1] - one_positions[i] - 1
        # print i , one_positions[i] , one_positions[i+1] , diff
        if diff > result:
            result = diff
    # print result
    return result

'''
sort the array
then devide array and keep deviding until left with single value

'''

def solution(A):
    A.sort()
    flag=True 
    i = 0
    # print 'list is' , A
    while flag == True:
        
        # print 'i value is {i}'.format(i=i)
        if(i == (len(A)-1)):
            result = A[i]
            flag = False
        elif A[i] != A[i+1]:
            result = A[i]
            flag = False
        if i== (len(A)-2):
            flag = False
        i += 2
    return result

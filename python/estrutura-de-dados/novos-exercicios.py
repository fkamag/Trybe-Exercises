#!/bin/python3

# import math
# import os
# import random
# import re
# import sys

#
# Complete the 'gradingStudents' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY grades as parameter.


def gradingStudents(grades):
    # Write your code here
    result = list()
    for i in range(len(grades)):
        if grades[i] < 38:
            result.append(grades[i])
        else:
            x = grades[i]
            y = grades[i] + 5
            for j in range(x, y):
                if j % 5 == 0:
                    if j - x <= 2:
                        result.append(j)
                    else:
                        result.append(x)
    return result


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # grades_count = int(input().strip())

    grades = [80, 96, 18, 73, 78, 60, 60, 15, 45, 15,
              10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]

    # for _ in range(grades_count):
    #     grades_item = int(input().strip())
    #     grades.append(grades_item)

    result = gradingStudents(grades)

    # fptr.write('\n'.join(map(str, result)))
    # fptr.write('\n')

    # fptr.close()
    print(result)

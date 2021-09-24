def ios(strInput, sub= "", i=0):
    if i == len(strInput):
        return [sub]
    else:
        return ios(strInput, sub + strInput[i], i+1) + ios(strInput, sub, i+1)


print(ios("abcde"))
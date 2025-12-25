class Solution:
    def intersectSize(self,a, b):
        # code here
        (a.sort())
        (b.sort())
        iA=[]
        i,j=0,0
        while  i<len(a) and j<len(b):
            if a[i]<b[j]:
                i+=1 
            elif a[i]>b[j]:
                j+=1 
            else:
                iA.append(a[i])
                i+=1
                j+=1
        
        return len(iA)

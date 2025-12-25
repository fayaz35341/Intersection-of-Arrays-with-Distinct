/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
class Solution {
    intersectSize(a, b) {
        // code here
        a.sort(function(x, y) { return x - y; });
        b.sort(function(x, y) { return x - y; });
        let iA=[]
        let i=0
        let j=0
        
        while (i<a.length && j<b.length){
            if (a[i]<b[j]){
                i++
            }
            else if (a[i]>b[j]){
                j++
            }
            else{
                iA.push(a[i])
                i++
                j++
            }
        }
        return iA.length
    }
}

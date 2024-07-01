export function calculateLoan(P, r, n){
    return (P[r(1+r)^n]/[(1+r)^n-1])
}
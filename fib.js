/**
 * Created by ubu12 on 8/2/16.
 */
/**
 *  recursion with memorization
*/

function Solution(n){
    //creare a array to hold the fib.
    memo = new Array(n+1).fill(-1);

    //adding basecase to memo
    memo[0] = 0;
    memo[1] = 1;

    return fib(n,memo);
}

function fib(n,memo){
    if(memo[n] != -1) return memo[n];
    memo[n] = fib(n-2,memo) + fib(n-1, memo);

    console.log(n)

    return memo[n];
}

console.log(Solution(10));
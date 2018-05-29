/*Largest product in a series
Problem 8 
The four adjacent digits in the 1000-digit number that have the greatest product are 
9 × 9 × 8 × 9 = 5832.

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. 
What is the value of this product?*/

/*var num = 73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450;*/

/*var num = 73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511;

var largestProduct = 0;

for(i=0; i < num.toString().length-3; i++){
    let numString = num.toString();
    let num1 = numString.charAt(i);
    let num2 = numString.charAt(i+1);
    let num3 = numString.charAt(i+2);
    let num4 = numString.charAt(i+3);
    let product = num1 * num2 * num3 * num4;
    if(product > largestProduct){
        largestProduct = product;
    }
}

console.log(largestProduct);*/

/*Special Pythagorean triplet
Problem 9 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

/*var solution = false;
var counter = 1;
var triplet = "";

while(solution== false){
    for(i=1; i < (999-counter); i++){
        let num2 = i;
        let num3 = 1000 - i - counter;
        if(counter*counter+num2*num2 == num3*num3){
            triplet= `${counter} ${num2} ${num3}`
            solution= true;
        }
    }
    counter++;
}

console.log(triplet);*/

/*Summation of primes
Problem 10 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

//ok this one is really easy since I already created code that makes a list of primes so I'm gonna skip it

/*Largest product in a grid
Problem 11 
In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 x
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 x
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 x
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 x
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 x
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 x
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 x
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 x
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 x
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 x
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 x
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 x
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 x
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 x
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 x
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 x
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 x
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 x
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 x
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48 x

The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction 
(up, down, left, right, or diagonally) in the 20×20 grid?*/

/*var collection = [];

function populateRow(list){
    //console.log(list);
    // let counter = 0;
    let test = []
    for(let k=0; k<list.length; k++){
        //console.log("list length", k, list.length);
        
        if(list.charAt(k) == " "){
            // console.log("row: " + lidt);
            // console.log("counter: " + counter);
            //console.log(parseInt(`${list.charAt(k-2)}${list.charAt(k-1)}`));
            //console.log(collection);
            test.push(parseInt(`${list.charAt(k-2)}${list.charAt(k-1)}`));
            // counter++;
        }

    }
    collection.push(test)
    //console.log(collection);
    
}

function populate(array){
    // let counter=0;
    for(let i=0; i<array.length; i++){
        //console.log("array length", i, array.length);
        
        if(array.charAt(i) == "x"){
            // const length = i;
            
            //console.log("info " + array.substring(i-60, i));
            populateRow(array.substring(i-60, i))
            // counter++;
        }
    }
}

populate("08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 x49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 x81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 x52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 x22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 x24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 x32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 x67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 x24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 x21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 x78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 x16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 x86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 x19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 x04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 x88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 x04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 x20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 x20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 x01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48 x")

//console.log(collection);

var largestProduct = 0;

for(let i = 0; i < collection.length; i ++){
    for(let k = 0; k < collection[i].length; k++){
        //check down
        if(i<17){
            let product = collection[i][k]*collection[i+1][k]*collection[i+2][k]*collection[i+3][k];
            if(product > largestProduct){
                largestProduct = product;
            }
        }
        //check right
        if(k<17){
            let product = collection[i][k]*collection[i][k+1]*collection[i][k+2]*collection[i][k+3];
            if(product > largestProduct){
                largestProduct=product;
            }
        }
        //check diagonal down right
        if(i<17 && k<17){
            let product = collection[i][k]*collection[i+1][k+1]*collection[i+2][k+2]*collection[i+3][k+3];
            if(product > largestProduct){
                largestProduct = product;
            }
        }
        
        //check diagonal down left
        if(i<17 && k >2){
            let product = collection[i][k]*collection[i+1][k-1]*collection[i+2][k-2]*collection[i+3][k-3];
            if(product > largestProduct){
                largestProduct = product;
            }
        }
    }
}

console.log(largestProduct);*/
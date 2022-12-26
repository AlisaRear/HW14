const palindromeInput = document.getElementById('palindrome_input');
const palindromeRes = document.getElementById('palindrome_res');
function checkPalindrome(){
    const str = palindromeInput.value;
    isPalindrome(str);
}

function isPalindrome(str){
    const strUp = str.toUpperCase();
    for(let i = 0; i<strUp.length/2; i++){
        if(strUp.charAt(i) !== strUp.charAt(strUp.length - i - 1)){
            console.log('kjg');
            palindromeRes.textContent = 'false';
            return;
        }
    }
    palindromeRes.textContent = 'true';
}

const reverseInput = document.getElementById('reverse_input');
const reverseResult = document.getElementById('reverse_result');

function reverseString(){
    const str = reverseInput.value;
    reverseString2(str);
}

function reverseString2(str){
    const reverse = str.split('').reverse().join('');
    reverseResult.textContent = reverse;

}

const stringValue = document.getElementById('string_value');
const characterValue = document.getElementById('character_value');
const resCalc = document.getElementById('res_calc');

function getCount(){
    const str = stringValue.value;
    const c = characterValue.value;
    countChar(str,c);
}

function countChar(str,c){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]===c){
            count++;
        }
    }
    resCalc.textContent = count;
}

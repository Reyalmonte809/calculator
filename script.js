function getpayment(principalAmount, percentRate, numberOfMonths){
    x = principalAmount
    y = percentRate / 12
    z = numberOfMonths
    output = x * ((y*(1+y) ** z) / ((1+y) ** z -1))
    return output;
}

result = getpayment(53000, 7.625 / 100, 15*12)
console.log(result)
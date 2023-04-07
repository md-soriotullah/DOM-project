// Create an Alert function
const setAlert = (msg, type='danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between"> <span>${msg}</span> <button data-bs-dismiss="alert" class="btn-close"></button></p>`
};

// Age Number Checker function useing by Regular Expression
const ageCheck = (number) => {
    let agePattern = /^[0-9]{1,4}$/;
    return agePattern.test(number)
};

/**
 * Marriage age validation
 */
const marriageAgeCheck = (name, age, gender) => {
    if(gender == "Male"){
        let marriage_age = 21;
        if(age >= marriage_age){
            return setAlert(`Hi Mr. ${name}, You are okey for marriage`, 'success')
        }else{
            return setAlert(`Hi Mr. ${name}, you are not okey for marriage. You have to wait ${marriage_age - age} Years`,'warning')
        }
    }else{
        let marriage_age = 18;
        if(age >= marriage_age){
            return setAlert(`Hi Miss. ${name}, You are okey for marriage`, 'success')
        }else{
            return setAlert(`Hi Miss. ${name}, you are not okey for marriage. You have to wait ${marriage_age - age} Years`,'warning')
        }
    }
};

/**
 * Area Calculator
 */
const areaCal = (type, val1, val2 = null) => {
    if(type == 'Rectangle'){
        return setAlert(`The area of Rectangle is ${val1 * val2}`, 'success')
    }else if(type == 'Square'){
        return setAlert(`The area of square is ${val1*val1}`, 'success')
    }else if(type == 'Triangle'){
        return setAlert(`The area of Triangle is ${ 0.5 * (val1 * val2) }`)
    }else if(type == 'Circle'){
        return setAlert(`The area of circle is ${(3.1416 * (val1*val1)).toFixed(2)}`)
    }
}
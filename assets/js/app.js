// Get Elements
const currency_form = document.getElementById('currency-form');
const msg = document.querySelector('.msg');
const msgDetails = document.querySelector('.msg-details');

// Get Values
let amount = currency_form.querySelector('input[name="amount"]');
let currency = currency_form.querySelector('select[name="currency"]');

// Form Submit
currency_form.onsubmit = (e) => {
    e.preventDefault();
    if(amount.value == "" || currency.value == ""){
        msg.innerHTML = setAlert('All fields are requierd')
    }else{
        let rate = 0;
        switch(currency.value){
            case 'USD' :
                rate = 89;
                break;
            case 'CAD' :
                rate = 70 ;
                break;
            case 'POUND' :
                rate = 111;
                break;
            case 'EURO' :
                rate = 95;
                break;
            case 'RUPEE' :
                rate = 1.15;
                break;
        }
        msgDetails.innerHTML = setAlert(`${amount.value} ${currency.value} = ${(amount.value * rate).toFixed(2)} BDT `, 'success')

    }
};


/**
 * Area Calculator code here
 */
//get elements
const area_type = document.getElementById('area-type');
const area_form = document.getElementById('area-form');
const details = document.querySelector('.details');
const rec = document.querySelector('.rec');
const squ = document.querySelector('.squ');
const tri = document.querySelector('.tri');
const cir = document.querySelector('.cir');

// area type value
area_type.onchange = () => {
    if(area_type.value == 'Rectangle'){
        rec.style.display = 'block'
    }else{
        rec.style.display = ''
    }
    if(area_type.value == 'Square'){
        squ.style.display = 'block'
    }else{
        squ.style.display = ''
    }
    if(area_type.value == 'Triangle'){
        tri.style.display = 'block'
    }else{
        tri.style.display = ''
    }
    if(area_type.value == 'Circle'){
        cir.style.display = 'block'
    }else{
        cir.style.display = ''
    }
};

/**
 * form submit
 */
area_form.onsubmit = (e) => {
    e.preventDefault()
    if(area_type.value == 'Rectangle') {
        let length = area_form.querySelector('input[name="length"]').value
        let width = area_form.querySelector('input[name="width"]').value

        details.innerHTML = areaCal(area_type.value, length, width)        
    }else if(area_type.value == 'Square'){
        let side = area_form.querySelector('input[name="side"]').value

        details.innerHTML = areaCal(area_type.value, side)
    }else if(area_type.value == 'Triangle'){
        let base = area_form.querySelector('input[name="base"]').value
        let height = area_form.querySelector('input[name="height"]').value

        details.innerHTML = areaCal(area_type.value, base, height)
    }else if(area_type.value == 'Circle'){
        let radius = area_form.querySelector('input[name="radius"]').value

        details.innerHTML = areaCal(area_type.value, radius)
    }
};
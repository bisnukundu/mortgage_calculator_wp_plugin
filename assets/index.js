// Function to
//
// calculate the mortgage
function bisnu_money(money = 0) {
    return money.toLocaleString("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";
}


var saving_btn_left = document.querySelector("#savings_parent>#left_btn")
var saving_btn_right = document.querySelector("#savings_parent>#right_btn")

var property_btn_left = document.querySelector("#property_parent>#left_btn")
var property_btn_right = document.querySelector("#property_parent>#right_btn")

var years_btn_left = document.querySelector("#years_parent>#left_btn")
var years_btn_right = document.querySelector("#years_parent>#right_btn")


var years_range = document.querySelector('#years_range');
var mortgageYears_input = document.getElementById("mortgage_years");
var property_price_range = document.querySelector('#property_price_range');
var propertyPriceInput = document.getElementById("property_price")
var savings_input_range = document.querySelector('#discount_price_range');
var savings_input = document.getElementById("savings")
var saving_percentage_p = document.querySelector("#savings_parent>#saving_percentage_p");

// Getting parcent of saving
function percent_of_saving(property_value, saving_value) {
    let propertyValue = parseFloat(property_value.value.replace(/[€,.]/g, ""));
    let savingValue = parseFloat(saving_value.value.replace(/[€,.]/g, ""));
    let percentage = (savingValue / propertyValue) * 100;
    let formattedPercentage = percentage.toFixed(0) + "%";
    console.log(formattedPercentage)
    saving_percentage_p.innerText = formattedPercentage;
    return formattedPercentage;
}

function incress_decress(right_btn, left_btn, input_value, range_value, isYears = false) {
    function incress_btn(right_btn, range_value, input_value, isYears = false) {
        right_btn.addEventListener('click', function () {

            if (isYears) {
                input_value.value = Number(input_value.value) + 1;
                range_value.value = Number(input_value.value) + 1
                calculateMortgage();
            } else {
                var numberValue = parseInt(input_value.value.replace(/[€,.]/g, "")) + 1000;
                input_value.value = formatPrice(numberValue)
                range_value.value = numberValue
                calculateMortgage();
            }

        })

    }

    function decress_btn(left_btn, range_value, input_value, isYears = false) {
        left_btn.addEventListener('click', function () {
            if (isYears) {
                input_value.value = Number(input_value.value) - 1;
                range_value.value = Number(input_value.value) - 1
                calculateMortgage();
            } else {
                var numberValue = parseInt(input_value.value.replace(/[€,.]/g, "")) - 1000;
                input_value.value = formatPrice(numberValue)
                range_value.value = numberValue
                calculateMortgage();
            }
        })
    }

    decress_btn(left_btn, range_value, input_value, isYears);
    incress_btn(right_btn, range_value, input_value, isYears);
}


incress_decress(saving_btn_right, saving_btn_left, savings_input, savings_input_range);
incress_decress(property_btn_right, property_btn_left, propertyPriceInput, property_price_range);
incress_decress(years_btn_right, years_btn_left, mortgageYears_input, years_range, true);


function input_range_update(rangeValue, inputValue, format_price = false) {
    if (!format_price) {
        rangeValue.addEventListener("input", function () {
            inputValue.value = rangeValue.value;
        });

        inputValue.addEventListener("input", function () {
            rangeValue.value = inputValue.value;
        });
    } else {
        rangeValue.addEventListener("input", function () {
            inputValue.value = formatPrice(rangeValue.value);
        });


        inputValue.addEventListener("input", function () {
            rangeValue.value = inputValue.value.replace(/\./g, "");
        });
    }

}

input_range_update(years_range, mortgageYears_input);
input_range_update(property_price_range, propertyPriceInput, true);
input_range_update(savings_input_range, savings_input, true);


function calculateMortgage() {
    savings_input_range.setAttribute('max',`${parseFloat(propertyPriceInput.value.replace(/[€,.]/g, ""))}`)
    savings_input_range.setAttribute('value',savings_input.value.replace(/[€,.]/g, ""))


    // ============================
    // gasto static
    var gasto = 2000;

    // Get the input values
    var location = document.getElementById("location").value;


    var propertyPrice = parseFloat(
        propertyPriceInput.value.replace(/\./g, "")
    );


    var savings = parseFloat(
        savings_input.value.replace(/\./g, "")
    );
    var mortgageYears = parseInt(mortgageYears_input.value);
    var interestType = document.getElementById("interest_type").value;
    var interestRate = parseFloat(
        document.getElementById("interest_rate").value.replace("%", "")
    );
    var totalImpuestosGastos = document.querySelector(".totalImpuestosGastos");
    var importeHipoteca = document.querySelector(".importeHipoteca");
    var InteresHipoteca = document.querySelector(".InteresHipoteca");
    var precioDelInmueble = document.querySelector(".precioDelInmueble");
    var costeTotalDeLaCompra = document.querySelector(".costeTotalDeLaCompra");
    var impuestosAndGastos = document.querySelector(".impuestosAndGastos");
    var ahorroAportado = document.querySelector(".ahorroAportado");

    // Calculate the mortgage amount
    var mortgageAmount = propertyPrice - savings;

    // Calculate the monthly interest rate
    var monthlyInterestRate = interestRate / 100 / 12;

    // Calculate the number of monthly payments
    var numberOfPayments = mortgageYears * 12;

    // Calculate the monthly mortgage payment
    var monthlyPayment;
    if (interestType === "fixed") {
        monthlyPayment =
            (mortgageAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    } else if (interestType === "variable") {
        // Implement your logic for variable interest rate calculation
        monthlyPayment =
            (mortgageAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }

    // Total con hipoteca
    var totalHipoteca = monthlyPayment * (mortgageYears * 12);
    totalImpuestosGastos.innerHTML = `<p>${bisnu_money(totalHipoteca)}€</p>`;

    // importeHipoteca
    importeHipoteca.innerHTML = `<p>${bisnu_money(mortgageAmount)}€</p>`;
    // InteresHipoteca------------------
    InteresHipoteca.innerHTML = `<p>${bisnu_money(
        totalHipoteca - mortgageAmount
    )}€</p>`;
    // precioDelInmueble
    precioDelInmueble.innerHTML = `<p>${bisnu_money(propertyPrice)}€</p>`;
    // costeTotalDeLaCompra
    var percent = location;
    console.log(percent);
    costeTotalDeLaCompra.innerHTML = `<p>${bisnu_money(
        propertyPrice + gasto + (propertyPrice * percent) / 100
    )}€</p>`;
    // impuestosAndGastos
    impuestosAndGastos.innerHTML = `<p>${bisnu_money(
        gasto + (propertyPrice * percent) / 100
    )}€</p>`;
    // ahorroAportado
    ahorroAportado.innerHTML = `<p>${bisnu_money(
        savings + gasto + (propertyPrice * percent) / 100
    )}€</p>`;

    // Display the results
    document.getElementById("result_bisnu_one").innerHTML = `
    <p class="result_heading">Tu cuota mensual:</p>
    <h3>${bisnu_money(monthlyPayment)}€</h3>
    <p class="result_sub_heading">Importe hipoteca</p>
    <p>${bisnu_money(mortgageAmount)}€</p>
  `;

    percent_of_saving(propertyPriceInput, savings_input)
}

// Add an event listener to the calculate button
// var calculateButton = document.getElementById("calculate_button");
// calculateButton.addEventListener("click", calculateMortgage);

var inputFields = document.querySelectorAll("#form_bisnu input, #form_bisnu select, .input_range");
inputFields.forEach(function (input) {
    input.addEventListener("change", calculateMortgage);
    input.addEventListener("keyup", calculateMortgage);
});
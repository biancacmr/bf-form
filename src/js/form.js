/************** Global variables ****************/

const requiredFields = ['full-name', 'age', 'height', 'weight',
    'eye-color', 'hair-color', 'cellphone', 'hobbies', 'fav-movie',
    'fav-book', 'games', 'cats-or-dogs', 'pets', 'describe-yourself',
    'passion'];

const requiredCheckboxes = ['smoking', 'drinking', 'personality', 'permission'];

/************** Form execution ****************/

$(function () {
    eventsForm();
    submitForm();
});

// events listeners
function eventsForm() {
    $("#age").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 100) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#age").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 100) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#age").on("blur", function () {
        blurValidation(this, "age")
    });

    $("#height").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 280)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#height").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 280) || (age < 100)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#height").on("blur", function () {
        blurValidation(this, "height");
    });

    $("#weight").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 300)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#weight").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 300) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
        }
    });

    $("#weight").on("blur", function () {
        blurValidation(this, "weight");
    });
}

// when the form is submitted
function submitForm() {
    $("#form").on("submit", function (event) {
        event.preventDefault();

        if (checkFields()) {
            this.submit();
            requiredFields.forEach((field) => {
                hideRequiredMessage(field);
                removeInvalidClass(field);
            });

        } else {
            console.info("Form submission failed.");
        }
    });
}

function checkFields() {
    let valid = true;

    // validating required fields (input number, input text)
    requiredFields.forEach(function (field) {
        let value = $(`#${field}`).val();
        if (!value.trim().length) {
            valid = false;
            addInvalidClass(field);
            showRequiredMessage(field);
        }
    });

    requiredCheckboxes.forEach(function (ckName) {
        let cks = $(`input[name='${ckName}']:checked`).val();

        if (cks == undefined || !cks.trim().length) {
            valid = false;
            addInvalidClass(ckName);
            showRequiredMessage(ckName);
        }

    });

    return valid;
}

/************** Auxiliar functions ****************/

function blurValidation(element, id) {
    let value = $(element).val().toString();
    value = value.replace(/^0+/g, "");
    $(element).val(value);

    value = parseInt(value);
    if (isNaN(value) || (value > 300) || (value < 0)) {
        $(element).val("");
        addInvalidClass(id)
        showInvalidMessage(id);
    } else {
        removeInvalidClass(id)
        hideInvalidMessage(id);
    }
}

function addInvalidClass(field) {
    $(`#${field}`).addClass("invalid");
}

function removeInvalidClass(field) {
    $(`#${field}`).removeClass("invalid");
}

function showRequiredMessage(field) {
    $(`#${field}-error`).show();
}

function hideRequiredMessage(field) {
    $(`#${field}-error`).hide();
}

function showInvalidMessage(field) {
    $(`#${field}-error-invalid`).show();
}

function hideInvalidMessage(field) {
    $(`#${field}-error-invalid`).hide();
}
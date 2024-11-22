const
    $modalRating = document.getElementById('modal-form'),
    $formRating = document.getElementById('form-rating'),
    $modalSuccess = document.getElementById('form-success'),
    $formResult = document.getElementById('rating-result');

const showRating = (rating = null) => {
    if (rating !== null) $formResult.innerText = rating;
    $modalRating.classList.toggle("modal__container--disabled");
    $modalSuccess.classList.toggle("modal__container--disabled");
}

$formRating.addEventListener('submit', event => {
    event.preventDefault(event);

    const FORM_DATA = new FormData(event.target);
    const DATA = Object.fromEntries(FORM_DATA);
    showRating(DATA.rating);
});

$modalSuccess.addEventListener('click', showRating);


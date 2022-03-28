const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const btnAdd = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl = document.querySelector('ion-alert-controller');

btnAdd.addEventListener('click', () => {
    const enteredCourseName = courseNameInput.value;
    const enteredRating = courseRatingInput.value;

    if (enteredCourseName.trim().length <= 0 || enteredRating.trim().length <= 0 || enteredRating < 1 || enteredRating > 5) {
        console.log(alertCtrl)
        alertCtrl.create({
            header: 'Invalid Input',
            message: 'Plz enter a value',
            buttons: ['Okay']
        }).then(alertEl => alertEl.present());
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:</strong> ${enteredRating}/5`;
    courseList.appendChild(newItem);

    courseNameInput.value = '';
    courseRatingInput.value = '';
});
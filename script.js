document.getElementById('selectDateBtn').addEventListener('click', function() {
    document.getElementById('datePicker').click()
})

document.getElementById('datePicker').addEventListener('change', function() {
    document.getElementById('selectDateBtn').innerText = this.value
})

function warningMessage(name) {
    var toastLiveExample = document.querySelector(`.${name}-toast`)

    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}
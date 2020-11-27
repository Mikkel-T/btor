const form = document.getElementById('signupForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const username = formData.get('username')
    const password = formData.get('password')

    const body = {
        username,
        password
    }

    fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                form.reset()
                window.location.href = '/'
            } else {
                alert(result.message)
            }
        })
})
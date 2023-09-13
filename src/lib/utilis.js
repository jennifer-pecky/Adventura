export const postSignup = async (formData, setSuccessMessage, navigate, setErrorMessage) => {

    try {
        const response = await fetch(
            'https://api-for-adventura-app.onrender.com/api/v1/auth/signup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }
        );

        console.log('Response:', response);

        if (response.ok) {
            setSuccessMessage('Sign-up was successful');
            localStorage.setItem('token', '');
            // setIsLoggedIn(true);
            navigate('/stories');
        } else {
            if (response.status === 422) {
                const errorText = await response.text();
                setErrorMessage(errorText);
            } else {
                setErrorMessage('An error occurred during sign-up');
                // setErrorMessage(errorText.message);
            }
        }
    } catch (error) {
        console.error('Error:', error);
        setErrorMessage(error.message);
    }
}
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
            const data = await response.json();
            const token = data.token;

            localStorage.setItem('token', token);

            setSuccessMessage('Sign-up was successful');
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

export const postLogin = async (toast, navigate, setIsLoggedIn, input, setInput) => {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(
            'https://api-for-adventura-app.onrender.com/api/v1/auth/signin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Include the token in the headers
                },
                body: JSON.stringify(input),
            }
        );

        console.log('Response:', response);

        if (response.ok) {
            toast.success('🦄 Login Successful!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            setIsLoggedIn(true);
            setTimeout(() => {
                setInput({
                    email: '',
                    password: '',
                });
                navigate('/stories');
            }, 6000);
        } else {
            toast.warn('🦄 Authentication failed. Please check your credentials', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        toast.warn('🦄 An error occured during authentication', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    }
}
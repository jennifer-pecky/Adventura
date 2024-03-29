import api from "../services/api";

export const postSignup = async (toast, formData, setIsLoggedIn, setSuccessMessage, navigate, setErrorMessage) => {

    try {

        // loading state
        toast.info('🦄 Creating account...', {
            position: 'top-center',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })
        const response = await api.post("auth/signup",
            formData
        )

        console.log('Response:', response);

        toast.dismiss();

        if (response.ok) {
            const data = await response.json();
            const token = data.token;

            localStorage.setItem('token', token);

            setSuccessMessage('Sign-up was successful');
            //Success toast message 

            toast.success('🦄 Sign-up Successful!', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

            setIsLoggedIn(true);
            navigate('/stories');
        } else {
            if (response.status === 422) {
                const errorText = await response.text();
                setErrorMessage(errorText);
            } else {
                setErrorMessage('An error occurred during sign-up');
                // setErrorMessage(errorText.message);
            }
            toast.error('🦄 An error occurred during sign-up!', {
                position: 'top-right',
                autoClose: 4000,
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
        setErrorMessage(error.message);
    }
}

export const postLogin = async (toast, navigate, setIsLoggedIn, input, setInput) => {
    try {
        const token = localStorage.getItem('token');

        // loading state
        toast.info('🦄 Logging in...', {
            position: 'top-center',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })

        // setIsLoading(true);

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

        toast.dismiss();

        // Remove loading state
        // setIsLoading(false);


        if (!response.ok) {
            console.error('Error:', response);
            // Handle error here, for example:
            toast.error('🦄 Login Failed! Please try again.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

            setInput({
                email: '',
                password: '',
            });
            return;
        } else {
            // If login is successful
            toast.success('🦄 Login Successful!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

            setIsLoggedIn(true);
        }
        // Redirect to the desired page after successful login
        setTimeout(() => {
            setInput({
                email: '',
                password: '',
            });
            navigate('/stories');
        }, 2000); // Adjust the delay as needed

    } catch (error) {
        console.error('Error:', error);

        // Handle error here, for example:
        toast.warm('🦄 An error occurred during login. Please try again later.', {
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
};



// import { Link } from 'react-router-dom';
// import '../styles/Head.css';
// import HomeUi from '../components/other/HomeUi';
// import StoryPage from '../components/other/storyPage';
// import card from '../story';
// import { useContext } from 'react';
// import { AppContext } from '../App';
// // import TextToSpeech from '../components/other/TextToSpeech';

// export default function Home() {
//     const { storySelectId, setStorySelectId } = useContext(AppContext);

//     console.log(storySelectId);

//     const handleReadStory = (storyId) => {
//         setStorySelectId(storyId);
//     };

//     return (
//         <section className="">
//             <div className="h-[100vh] flex justify-center items-center home">
//                 <div className="text-[#ffffff] text-center space-y-4 w-[90%]">
//                     <h1 className="flex items-center text-[15px] h-[10vh] md:text-2xl text-white font-poppins ">
//                         {' '}
//                         <span className="hidden md:block"> Welcome to -</span>
//                         <span className="text-4xl font-bold bg-clip-text text-transparent bg-[#8B4513]">
//                             Adventura
//                         </span>{' '}
//                         <span className="items-center"> - Where Stories Unfold</span>
//                     </h1>
//                     <p className="italic text-left text-white md:text-xl text-[17px] p-6]">
//                         Adventura takes storytelling to new heights with the integration{' '}
//                         <br />
//                         of AI narration. As you journey through your chosen stories, our{' '}
//                         <br />
//                         AI collaborates to weave a seamless narrative, adding depth and{' '}
//                         <br />
//                         immersion to your experience. Words come to life with a touch of{' '}
//                         <br />
//                         magic as the AI takes your choices and fashions them into a <br />
//                         compelling tale that captivates your senses.
//                     </p>

//                     <Link to={'/signup'}>
//                         <button className="flex items-center gap-3 p-4 mt-9 bg-[#8B4513] hover:bg-[#000000cc] rounded-md shadow-md transition-all ease-in-out duration-600 text-white font-semibold uppercase text-sm">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 className="w-5 h-5"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
//                                 ></path>
//                             </svg>
//                             Get Started
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//             <div className="mt-10 lg:p-16 w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
//                 {card.map((item) => (
//                     <div className="bg-white border rounded-lg shadow-lg" key={item.id}>
//                         <Link to={`/stories/${item.id}`}>
//                             <img src="story.png" alt="" />
//                             <div className="p-8 bg-[#FFF]">
//                                 <Link to={`/stories/${item.id}`}>
//                                     <h5 className="mb-2 text-2xl tracking-tight text-[#8B4513] font-bold">
//                                         {item.title}
//                                     </h5>
//                                 </Link>
//                                 <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
//                                     {item.description}
//                                 </p>

//                                 {/* <TextToSpeech storyText={item.content} /> */}

//                                 <button
//                                     className="btn mt-5"
//                                     onClick={() => handleReadStory(item.id)}
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 24 24"
//                                         width="24"
//                                         height="24"
//                                     >
//                                         <path fill="none" d="M0 0h24v24H0z"></path>
//                                         <path
//                                             fill="currentColor"
//                                             d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
//                                         ></path>
//                                     </svg>
//                                     <span>Read more</span>
//                                 </button>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}

//                 {storySelectId !== null && (
//                     <StoryPage
//                         title={card.find((story) => story.id === storySelectId).title}
//                         content={card.find((story) => story.id === storySelectId).content}
//                     />
//                 )}
//             </div>

//             <HomeUi />
//         </section>
//     );
// }

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { name, email, password }
        // console.log(user);
        // form.reset();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="flex flex-col w-1/3 mx-auto p-6 rounded-md sm:p-10 bg-gray-300 text-gray-800 mb-12">
                <h1 className="mb-8 text-4xl font-bold text-center">Sign up</h1>
                <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <div className='mb-2'>
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign up" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50" />
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Already have an account?  <Link to='/signin' className='text-blue-600'>Sign in</Link>
                        </p>
                        <h2 className='text-center text-xl'>OR</h2>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>Sign in with google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
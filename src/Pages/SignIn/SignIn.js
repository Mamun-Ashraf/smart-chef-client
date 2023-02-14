
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignIn = () => {

    const { signin, signInWithGoogle } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { email, password }
        // console.log(user);
        // form.reset();

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
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
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign in" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50" />
                        </div>
                        <h2 className='text-center text-xl'>OR</h2>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>Sign in with google</button>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?  <Link to='/signup' className='text-blue-600'>Sign up</Link>
                        </p>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default SignIn;
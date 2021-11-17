import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//Browser
function signIn({ providers }) {
    return (
        <>
        <Header />

        <div className="flex flex-col items-center justify-center min-h-screen py-2 lg:-mt-56 px-14 text-center">
            <img 
                className="w-80"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5ec75da0.png&w=3840&q=75" 
                alt=""
            />
            <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button 
                            className="p-3 bg-blue-500 rounded-lg text-white" 
                            onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

//Server side render
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;
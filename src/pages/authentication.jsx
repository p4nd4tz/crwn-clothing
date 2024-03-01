import SignUp from '../components/sign-up.component'
import SignIn from '../components/sign-in.component'

const Authentication = () => {
    return (
        <div className="flex justify-center gap-32 w-10/12 m-auto">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication
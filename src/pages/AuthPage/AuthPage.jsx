import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
  return (
    <>
      <SignUpForm setUser={setUser} />
      <LogInForm/>
    </>
  );
}

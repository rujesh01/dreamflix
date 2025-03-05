import { signIn } from "@/auth";

const LoginPage = () => {
  return (
    <div>
      <h1>this is login</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
};

export default LoginPage;

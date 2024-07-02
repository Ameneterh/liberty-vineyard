import { TextInput, FileInput, Button, Alert, Tabs } from "flowbite-react";
import { FaSignInAlt } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen  max-w-3xl mx-auto my-10">
      <Tabs variant="underline">
        <Tabs.Item active title="Sign In" tab="sign-in" icon={FaSignInAlt}>
          <SignIn />
        </Tabs.Item>
        <Tabs.Item title="Sign Up" tab="sign-up" icon={GrUserNew}>
          <SignUp />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

import { useRouter } from "next/navigation";

export const WithRouterComponent = () => {
  const router = useRouter();

  const redirectHandler = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>With Router Component</h1>
      <button onClick={redirectHandler}>Redirect</button>
    </div>
  );
};

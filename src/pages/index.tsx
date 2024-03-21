import Image from "next/image";
import { Inter } from "next/font/google";
import { WithAxiosComponent } from "@unit-test-app-pnpm/components/with-axios/with-axios";
import { WithAxiosObservablesComponent } from "@unit-test-app-pnpm/components/with-axios-observables/with-axios-observables";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WithAxiosComponent />
      <WithAxiosObservablesComponent />
    </>
  );
}

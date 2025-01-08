import StartUp from "@/components/StartUp";
import { Redirect, useRouter } from "expo-router";

import useStore from "./lib/store/manage";

export default function Index() {
  const { isShowStartup } = useStore();
  if (isShowStartup) return <Redirect href="/(root)/(tabs)" />;
  return <StartUp />;
}

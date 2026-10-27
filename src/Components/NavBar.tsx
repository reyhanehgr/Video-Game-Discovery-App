import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

interface Props {
  width: string;
  height: string;
}

function NavBar({ width, height }: Props) {
  return (
    <HStack justify="space-between" padding="10px">
      <HStack>
        <Image src={logo} width={width} height={height} />
        <Text>NavBar</Text>
      </HStack>

      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
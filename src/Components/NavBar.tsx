import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
interface Props {
  width: string;
  height: string;
}
function NavBar({ width, height }: Props) {
  return (
    <>
    <HStack width={width} height={height}>
        <Image src={logo} />
        <Text>NavBar</Text>
    </HStack>
    </>
  )
}

export default NavBar
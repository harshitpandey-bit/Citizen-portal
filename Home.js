import { Button, View, Text } from 'react-native';
import {HStack,VStack,Center,Image,Box} from "native-base" 
export default function Home({ navigation }) {
  return (
    <VStack pt="30px" space="3">
        <HStack space={9} justifyContent="center">
          <Box>
          <Image size="60" borderRadius={16} source={ require("./report1.jpg")
        } alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        <Center>Report</Center>
        </Box>
          <Box>
          <Center>
          <Image size="60" borderRadius={16} source={ require("./customer.jpg")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        Support</Center>
        </Box>

        <Box>
          <Image size="60" borderRadius={16} source={require("./user.jpeg")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        <Center>Profile</Center>
        </Box>

        </HStack>
   <HStack space={7} justifyContent="center">
          <Box>
          <Center>
          <Image size="60" borderRadius={16} source={ require("./upload.png")
        } alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        Upload Video 
        </Center>
        </Box>
          <Box>
          <Center>
          <Image size="60" borderRadius={16} source={ require("./sos.png")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        <Text>SOS</Text></Center>
        </Box>

        <Box>
        <Center>
          <Image size="60" borderRadius={16} source={require("./safety.jpeg")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        Safety Guide </Center>
        </Box>

        </HStack>
  <HStack space={7} justifyContent="center">
          <Box>
          <Image size="60" borderRadius={16} source={ require("./status.jpeg")
        } alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        <Center><Text>Status</Text> Updates</Center>
        </Box>
          <Box>
          <Center>
          <Image size="60" borderRadius={16} source={ require("./notification.jpeg")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        Notification</Center>
        </Box>

        <Box>
        <Center>
          <Image size="60" borderRadius={16} source={require("./speeding.jpeg")} alt="Alternate Text"  borderWidth="5" borderColor="white"/ >
        <Text>Over</Text> 
        <Text>Speeding</Text>
        </Center>
        </Box>

        </HStack>
    
    
    </VStack>

  );
}

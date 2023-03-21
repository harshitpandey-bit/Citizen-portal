import React, { useState ,useEffect} from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider,Button ,Text,Link,Image} from "native-base";
 
export default AuthScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");
  const press=()=>{
        props.navigation.navigate('Root',{name:"Home"});
  }
    let states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  return <Center>
      <FormControl maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose State</FormControl.Label>
        <Select         
        minWidth="200" 
        accessibilityLabel="Choose State" 
        placeholder="e.g: Uttar Pradesh" 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

        _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size={5} />}} 
        mt="1">
          {states.map((state)=>
                            <Select.Item label={state} value={state} />
          )}
        </Select>
        <Text>{selectedValue}</Text>
        <FormControl.Label>Choose City</FormControl.Label>
        <Select 
        minWidth="200" 
        accessibilityLabel="Choose Service" 
        placeholder="e.g: Ghaziabad" 
        _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size={5} />}} 
        mt="1">
          {states.map((state)=>
                            <Select.Item label={state} value="ux" />
          )}
        </Select>
        <Button size="md" mt="20px" colorScheme="blue" onPress={press}>
  Save
</Button>

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Sorry! can't Find  you city
        </FormControl.ErrorMessage>
      </FormControl>
      <Text mt="20px">For Any Any queris mail us on <Link>xyz@gmail.com</Link> </Text>
      
    
      <Button mt="30px" colorScheme="orange">  Link With Adharcard </Button>
    </Center>;
};
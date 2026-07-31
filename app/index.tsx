import { View , Text, FlatList, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Account} from "../models/Account";
import { getAccounts } from "../services/accountService";
import { useRouter } from "expo-router";

export default function App() {

  const router=useRouter()

  const [accounts,setAccounts]=useState<Account[]>([])

  useEffect(()=>{
    const loadAccounts=async()=>{
      const accountsData = await getAccounts();
      setAccounts(accountsData);
    };
    loadAccounts();
  },[]);

  const redirecttoAccountDetails=(account : Account)=>{
    router.push({
      pathname:"/account", 
      params:{account:JSON.stringify(account)}
    })
    }


  return (
    <>
    <SafeAreaView>
      <View>
        <Text>Prueba Tecnica React Native</Text>
      </View>
      <View>
        <Text>Cuentas</Text>
      </View>
        <View>
        </View>
    </SafeAreaView>
          <FlatList data={accounts} keyExtractor={(item)=>String(item.id)} 
          style={{padding:20}}
            renderItem={({item})=>
              <Pressable onPress={() => redirecttoAccountDetails(item)}>
              < Text>{item.number}</Text>
              </Pressable>
            }/>
            </>
  );
}

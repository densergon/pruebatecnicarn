import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Account() {
    const { account } = useLocalSearchParams();
    const data = JSON.parse(account);
    // Show object values here:
    return (
        <View>
            {
                account ? (
                    Object.keys(data).map(key => (
                        <Text key={key}>{key}:{key === 'balance' ? '$ ' : ''}{data[key]}</Text>
                    ))
                ) : (
                    <Text>No se encontró la data</Text>
                )
            }
        </View>
    );
}

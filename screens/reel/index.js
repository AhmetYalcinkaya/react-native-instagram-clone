import {View, Text, StyleSheet} from "react-native";

function Reel() {
    return (
        <View style={styles.container}>
            <Text>Reel</Text>
        </View>
    )
}

export default Reel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

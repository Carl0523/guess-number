import {StyleSheet, Text} from 'react-native'
export default function Logo({text, fontSize})
{
   

    return (
        <Text style={{...styles.logoText, fontSize:fontSize}}>{text}</Text>
    )
}


const styles = StyleSheet.create({
    logoText : {
        maxWidth: '90%',
        minWidth: '80%',
        alignSelf: 'center',
        marginBottom: 20,
        fontFamily: 'handjet-bold',
    }
})
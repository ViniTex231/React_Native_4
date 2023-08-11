import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#a7c1eb',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    caixa:{
        width:'80%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        fontSize: 25,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',

    },
    btnOk:{
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: 100,
        height: 50,
        backgroundColor: '#5a7bb0',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    }
})

export default styles

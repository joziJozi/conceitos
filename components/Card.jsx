import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.titulo}>Jozi</Text>
                <Text >Isto é um parágrafo</Text>
            </View>
        </>
    )
}

export default Card


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 2,
        marginBottom: 20,
    },

    titulo: {
        color: 'red',
        fontSize: 30,
        padding: 20,
        marginBottom: 20,
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: 'black'
    },

    paragrafo: {
        fontSize: 20,
    },


})

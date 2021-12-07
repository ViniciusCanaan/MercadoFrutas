import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    useNavigation,
} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../styles/variables';
import { AbacaxiIcon, BananaIcon, MangaIcon, MaçaIcon, PeraIcon, DinheiroIcon } from '../components/Icons';

const Carrinho = () => {

    function handleAddCupom(){
        Alert.alert(
            "Cupom Indisponível",
            "Tente novamente mais tarde",
            [
              { text: "OK", onPress: () => console.log("Pressionou cupom") }
            ]
          );
    }

    function handleConfirmPay(){
        Alert.alert(
            "Podemos fechar seu pedido?",
            "Você tem certeza da sua compra?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelou Pedido"),
                    style: "cancel"
                  },
              { text: "Comprar", onPress: () => console.log("Pedido Efetuado") }
            ]
          );
    }

    return (
        <View style={styles.viewResumeFruits}>
            <View style={styles.viewTextCompras}>
                <Text style={styles.textResumeFruits}>Olá, aqui é o resumo do que está no seu carrinho de compras!!</Text>
            </View>
                <View style={styles.fruitSelection}>
                    <Image source={MaçaIcon} />
                    <Text style={styles.textFruit}>Maçã</Text>
                    <View style={styles.circleNumberMaça}>
                        <Text style={styles.textNumber}></Text>
                    </View>
                </View>
                <View style={styles.fruitSelection}>
                    <Image source={PeraIcon} />
                    <Text style={styles.textFruit}>Pêra</Text>
                    <View style={styles.circleNumberPera}>
                        <Text style={styles.textNumber}></Text>
                    </View>
                </View>
                <View style={styles.fruitSelection}>
                    <Image source={BananaIcon} />
                    <Text style={styles.textFruit}>Banana</Text>
                    <View style={styles.circleNumberBanana}>
                        <Text style={styles.textNumber}></Text>
                    </View>
                </View>      
                <View style={styles.fruitSelection}>
                    <Image source={AbacaxiIcon} />
                    <Text style={styles.textFruit}>Abacaxi</Text>
                    <View style={styles.circleNumberAbacaxi}>
                        <Text style={styles.textNumber}></Text>
                    </View>
                </View>
                <View style={styles.fruitSelection}>
                    <Image source={MangaIcon} />
                    <Text style={styles.textFruit}>Manga</Text>
                    <View style={styles.circleNumberManga}>
                        <Text style={styles.textNumber}></Text>
                    </View>
                </View> 

                <View style={styles.viewResumeCount}>
                    <Text style={styles.textMoney}>Valor Total: </Text>
                </View>

                <View style={styles.viewCupom}>
                <Text style={styles.textSubtitleMoney}>Possui cupom ou vale?</Text>
                    <TextInput style={styles.textCupom}
                        placeholder="código do cupom"
                        maxLength={6}
                    />
                 <TouchableOpacity onPress={handleAddCupom}>
                     <Text style={styles.textButtonApplyCupom}>Aplicar</Text>
                 </TouchableOpacity>
                </View>
                

            <View style={styles.viewPayments}>
                <TouchableOpacity style={styles.buttonPay} onPress={handleConfirmPay}>
                    <Image source={DinheiroIcon} />
                    <Text style={styles.textButton}>Realizar Pedido</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Carrinho;

const styles = StyleSheet.create({
    fruitSelection: {
        width: '100%',
        height: 50,
        backgroundColor: colors.mainBgColor,
        borderRadius: 15,
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    viewResumeFruits: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        paddingTop: 10,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    textFruit: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.black
    },
    circleNumberMaça: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: colors.maça,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleNumberPera: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: colors.pera,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleNumberBanana: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: colors.banana,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleNumberAbacaxi: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: colors.abacaxi,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleNumberManga: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: colors.manga,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNumber: {
        fontSize: 20,
        color: colors.mainBgColor,
        fontWeight: 'bold',
    },
    viewPayments: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPay: {
        backgroundColor: colors.successDarker,
        width: 300,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRemoveAll: {
        backgroundColor: colors.cancel,
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textButton: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    lupaIcon: {
        marginRight: 30
    },
    searchInput: {
        borderRadius: 10,
        backgroundColor: colors.mainBgColor,
        borderWidth: 0.3,
        height: 40,
        paddingLeft: 10,
    },
    goToCartButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.headerColor,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    viewButtonCart: {
        marginBottom: 15,
        marginRight: 15,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    viewTextCompras: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textResumeFruits: {
        fontSize: 16,
        color: colors.black,
        fontWeight: '500'
    },
    viewResumeCount:{
        width: '100%',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingTop: 15,
        paddingLeft:10
    },
    textMoney:{
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    textSubtitleMoney:{
        fontSize: 14,
        color: colors.black,
    },
    viewCupom:{
        width: '100%',
        flexDirection:'row',
        paddingTop: 15,
        paddingLeft:10
    },
    textCupom:{
        backgroundColor:colors.mainBgColor,
        height:50,
    },
    textButtonApplyCupom:{
        color:colors.action
    }

});
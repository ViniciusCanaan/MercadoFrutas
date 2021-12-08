import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    useNavigation,
    useRoute
} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Alert, Button, Modal, Pressable } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../styles/variables';
import { AbacaxiIcon, BananaIcon, MangaIcon, MaçaIcon, PeraIcon } from '../components/Icons';
import logo from '../assets/logo.png';

const Carrinho = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const contMaça = route.params.contMaça;
    const contPera = route.params.contPera;
    const contBanana = route.params.contBanana;
    const contAbacaxi = route.params.contAbacaxi;
    const contManga = route.params.contManga;


    const valorAbacaxi = route.params.valorAbacaxi;
    const valorMaça = route.params.valorMaça;
    const valorPera = route.params.valorPera;
    const valorBanana = route.params.valorBanana;
    const valorManga = route.params.valorManga;

    const totalDoPedido = (valorAbacaxi + valorMaça + valorPera + valorBanana + valorManga)


    const [modalVisible, setModalVisible] = useState(false);
    const [showMaçaInPdf, setShowMaçaInPdf] = useState(false);

    function handleAddCupom() {
        Alert.alert(
            "Cupom Indisponível",
            "Tente novamente mais tarde",
            [
                { text: "OK", onPress: () => console.log("Pressionou cupom") }
            ]
        );
    }

    function handleAlertPay(){
        if(totalDoPedido === 0){
          Alert.alert('Opa','Você não tem nada pra pagar.')
        }else{
            Alert.alert(
                "Podemos fechar seu pedido?",
                "Você tem certeza da sua compra?",
                [
                    {
                        text: "Cancelar",
                        onPress: () => console.log("Cancelou Pedido"),
                        style: "cancel"
                    },
                    { text: "Comprar", onPress: (handleConfirmPay)}
                ]
            );
        }
       
    }

    function handleConfirmPay() {
        setModalVisible(true);
       
    }

    function handleGoHome(){
        setModalVisible(false);
        navigation.navigate('Home')
    }


    return (
        <View style={styles.viewResumeFruits}>
            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={()=> setModalVisible(false)}
            >
                <View style={styles.viewModal}>
                    <View style={styles.conteudoModal}>
                        <Text style={styles.tituloComprovante}>Comprovante</Text>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    
                    <View style={styles.viewSubtitulo}>
                        <Text style={styles.subtituloComprovante}>Segue o resumo das suas compras:</Text>
                        <Text style={styles.subtituloComprovante}>Maçã: R$ {valorMaça}</Text>
                        <Text style={styles.subtituloComprovante}>Pêra: R$ {valorPera}</Text>
                        <Text style={styles.subtituloComprovante}>Banana : R$ {valorBanana}</Text>
                        <Text style={styles.subtituloComprovante}>Abacaxi : R$ {valorAbacaxi}</Text>
                        <Text style={styles.subtituloComprovante}>Manga : R$ {valorManga}</Text>
                        <Text style={styles.valorNotaFiscal}>Valor : R$ {totalDoPedido.toFixed(2)}</Text>

                    </View>
                    <View style={styles.viewPayments}>
                        <Button
                        title='Fechar'
                        onPress={handleGoHome}
                        />
                    </View>
                </View>

            </Modal>
            <View style={styles.viewTextCompras}>
                <Text style={styles.textResumeFruits}>Olá, aqui é o resumo do que está no seu carrinho de compras!!</Text>
            </View>
            <View style={styles.fruitSelection}>
                <Image source={MaçaIcon} />
                <Text style={styles.textFruit}>Maçã</Text>
                <View style={styles.circleNumberMaça}>
                    <Text style={styles.textNumber}>{contMaça}</Text>
                </View>
                <Text>R${valorMaça}</Text>
            </View>
            <View style={styles.fruitSelection}>
                <Image source={PeraIcon} />
                <Text style={styles.textFruit}>Pêra</Text>
                <View style={styles.circleNumberPera}>
                    <Text style={styles.textNumber}>{contPera}</Text>
                </View>
                <Text>R${valorPera}</Text>
            </View>
            <View style={styles.fruitSelection}>
                <Image source={BananaIcon} />
                <Text style={styles.textFruit}>Banana</Text>
                <View style={styles.circleNumberBanana}>
                    <Text style={styles.textNumber}>{contBanana}</Text>
                </View>
                <Text>R${valorBanana}</Text>
            </View>
            <View style={styles.fruitSelection}>
                <Image source={AbacaxiIcon} />
                <Text style={styles.textFruit}>Abacaxi</Text>
                <View style={styles.circleNumberAbacaxi}>
                    <Text style={styles.textNumber}>{contAbacaxi}</Text>
                </View>
                <Text>R${valorAbacaxi}</Text>
            </View>
            <View style={styles.fruitSelection}>
                <Image source={MangaIcon} />
                <Text style={styles.textFruit}>Manga</Text>
                <View style={styles.circleNumberManga}>
                    <Text style={styles.textNumber}>{contManga}</Text>
                </View>
                <Text>R${valorManga}</Text>
            </View>

            <View style={styles.viewStepPayments}>
                <View style={styles.viewResumeCount}>
                    <Text style={styles.textMoney}>Total do pedido: R$ {totalDoPedido.toFixed(2)}  </Text>
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
                    <TouchableOpacity style={styles.buttonPay} onPress={handleAlertPay}>
                        <Text style={styles.textButton}>Realizar Pedido</Text>
                    </TouchableOpacity>

                </View>
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
        width: 350,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    viewTextCompras: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textResumeFruits: {
        fontSize: 16,
        color: colors.black,
        fontWeight: '500'
    },
    viewResumeCount: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 10
    },
    textMoney: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    textSubtitleMoney: {
        fontSize: 14,
        color: colors.black,
    },
    viewCupom: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 10
    },
    textCupom: {
        backgroundColor: colors.mainBgColor,
        height: 35,
    },
    textButtonApplyCupom: {
        color: colors.action
    },
    viewStepPayments: {
        backgroundColor: colors.mainBgColor,
        flex: 2,
        marginTop: 10,
        borderRadius: 10
    },
    viewModal: {
        width: '90%',
        height: '80%',
        backgroundColor: '#B0C4DE',
        alignSelf: 'center',
        marginTop: 30
    },
    conteudoModal: {
        alignItems: 'center',
    },
    tituloComprovante: {
        marginTop: 10,
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    viewSubtitulo: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    subtituloComprovante: {
        marginTop: 10,
        fontSize: 16,
        color: colors.black,
        paddingLeft: 10
    },
    botaoVoltarInicio: {
        backgroundColor: colors.success,
        width: '50%',
        height: 50,
        borderRadius: 20
    },
    viewBotaoVoltarInicio: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    valorNotaFiscal:{
        fontSize: 20,
        marginTop: 15,
        color: colors.action,
        fontWeight: 'bold'
    },
    logo: {
        width: '50%',
        height: 150
      },
});
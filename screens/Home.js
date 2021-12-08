import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    useNavigation,
} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../styles/variables';
import { AbacaxiIcon, BananaIcon, CarrinhoIcon, LixeiraIcon, MangaIcon, MaçaIcon, PeraIcon, LupaIcon, AdicionarIcon, RetirarIcon } from '../components/Icons';

const Home = () => {
    const navigation = useNavigation();

    const [contAbacaxi, setContAbacaxi] = useState(0);
    const [contMaça, setContMaça] = useState(0);
    const [contPera, setContPera] = useState(0);
    const [contBanana, setContBanana] = useState(0);
    const [contManga, setContManga] = useState(0);
    const [mostrarCampo, setMostrarCampo] = useState(false);


    function handleAddAbacaxi() {
        setContAbacaxi(contAbacaxi + 1);
    }


    function handleAddMaça() {
        setContMaça(contMaça + 1);
    }


    function handleAddPera() {
        setContPera(contPera + 1);
    }

    function handleAddBanana() {
        setContBanana(contBanana + 1);
    }

    function handleAddManga() {
        setContManga(contManga + 1);
    }

    ////////////////////////////////////

    function handleRemoveAbacaxi() {
        if(contAbacaxi >=1){
            setContAbacaxi(contAbacaxi - 1);
        }else{
            Alert.alert(`Ooops`,`Você já retirou todas as unidades desse produto`)
        }
    }


    function handleRemoveMaça() {
        if(contMaça >=1){
            setContMaça(contMaça - 1);
        }else{
            Alert.alert(`Ooops`,`Você já retirou todas as unidades desse produto`)
        }  
    }


    function handleRemovePera() {
        if(contPera >=1){
            setContPera(contPera - 1);
        }else{
            Alert.alert(`Ooops`,`Você já retirou todas as unidades desse produto`)
        }  
    }

    function handleRemoveBanana() {
        if(contBanana >=1){
            setContBanana(contBanana - 1);
        }else{
            Alert.alert(`Ooops`,`Você já retirou todas as unidades desse produto`)
        }  
    }

    function handleRemoveManga() {
        if(contManga >= 1 ){
            setContManga(contManga - 1);
        }else{
            Alert.alert(`Ooops`,`Você já retirou todas as unidades desse produto`)
        } 
    }

    function ShowInputSearch() {
        setMostrarCampo(!mostrarCampo);
    }

    function OpenAlertDelete() {
        Alert.alert(
            "Quer mesmo deletar?",
            "Se você deletar, irá retirar todas as frutas selecionadas.",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelei"),
                    style: "cancel"
                },
                { text: "Deletar", onPress: (handleDeleteFruits) }
            ]
        );
    }

    function handleDeleteFruits() {
        setContAbacaxi(contAbacaxi === 0);
        setContMaça(contAbacaxi === 0);
        setContPera(contAbacaxi === 0);
        setContBanana(contAbacaxi === 0);
        setContManga(contAbacaxi === 0);
    }

    function openCart() {
        navigation.navigate('Carrinho')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={ShowInputSearch}>
                    <Image source={LupaIcon} style={styles.lupaIcon} />
                </TouchableOpacity>
            ),
        })
    })

    return (
        <View style={styles.viewResumeFruits}>
            {mostrarCampo &&
                <View>
                    <TextInput style={styles.searchInput}
                        placeholder='Digite sua procura'
                    />
                </View>
            }
                <View style={styles.fruitSelection}>
                    <Image source={MaçaIcon} />
                    <TouchableOpacity onPress={handleRemoveMaça}>	
                    <Image source={RetirarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.textFruit}>Maçã</Text>
                    <TouchableOpacity onPress={handleAddMaça}>
                    <Image source={AdicionarIcon} />
                    </TouchableOpacity>
                    <View style={styles.circleNumberMaça}>
                        <Text style={styles.textNumber}>{contMaça}</Text>
                    </View>
                </View>   

                <View style={styles.fruitSelection}>
                    <Image source={PeraIcon} />
                    <TouchableOpacity onPress={handleRemovePera}>
                    <Image source={RetirarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.textFruit}>Pêra</Text>
                    <TouchableOpacity onPress={handleAddPera}>
                    <Image source={AdicionarIcon} />
                    </TouchableOpacity>
                    <View style={styles.circleNumberPera}>
                        <Text style={styles.textNumber}>{contPera}</Text>
                    </View>
                </View>
           
                <View style={styles.fruitSelection}>
                    <Image source={BananaIcon} />
                    <TouchableOpacity onPress={handleRemoveBanana}>
                    <Image source={RetirarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.textFruit}>Banana</Text>
                    <TouchableOpacity onPress={handleAddBanana}>
                    <Image source={AdicionarIcon} />
                    </TouchableOpacity>
                    <View style={styles.circleNumberBanana}>
                        <Text style={styles.textNumber}>{contBanana}</Text>
                    </View>
                </View>
           
                <View style={styles.fruitSelection}>
                    <Image source={AbacaxiIcon} />
                    <TouchableOpacity onPress={handleRemoveAbacaxi}>
                    <Image source={RetirarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.textFruit}>Abacaxi</Text>
                    <TouchableOpacity onPress={handleAddAbacaxi}>
                    <Image source={AdicionarIcon} />
                    </TouchableOpacity>
                    <View style={styles.circleNumberAbacaxi}>
                        <Text style={styles.textNumber}>{contAbacaxi}</Text>
                    </View>
                </View>
            
                <View style={styles.fruitSelection}>
                    <Image source={MangaIcon} />
                    <TouchableOpacity onPress={handleRemoveManga}>
                    <Image source={RetirarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.textFruit}>Manga</Text>
                    <TouchableOpacity onPress={handleAddManga}>
                    <Image source={AdicionarIcon} />
                    </TouchableOpacity>
                    <View style={styles.circleNumberManga}>
                        <Text style={styles.textNumber}>{contManga}</Text>
                    </View>
                </View>
            
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonRemoveAll} onPress={OpenAlertDelete}>
                    <Image source={LixeiraIcon} />
                    <Text style={styles.textButton}>Limpar Tudo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAddToCart}>
                    <Image source={CarrinhoIcon} />
                    <Text style={styles.textButton}>Colocar no carrinho</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.viewButtonCart}>
                <TouchableOpacity style={styles.goToCartButton} onPress={openCart}>
                    <Image source={CarrinhoIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

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
    viewButton: {
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20
    },
    buttonAddToCart: {
        backgroundColor: colors.action,
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
    }

});
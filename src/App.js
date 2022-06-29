import React from 'react';
import {Linking,Image,StatusBar, SafeAreaView, Text, View, StyleSheet,Pressable} from 'react-native';
//status bar é a barra de notificação

const colorGithub = '#010409'
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4f565e';
const urlToGithub = 'https://github.com/IagoDantas'
const imageProfile = 'https://github.com/IagoDantas.png'


const App = () => {

    const handlePressGoToGithub = async () =>{
        const res = await Linking.canOpenURL(urlToGithub);
        if(res){
            await Linking.openURL(urlToGithub);
        }
    }
    return (
    <SafeAreaView 
    style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image
                accessibilityLabel='Iagona em frente a algumas plantas.' 
                style={style.avatar} source={{uri:imageProfile}}
                />
                <Text accessibilityLabel='Nome: Iago' style={[style.defaultText,style.name]}>Iago Dantas</Text>
                <Text  accessibilityLabelstyle='NickName: IagoDantas' style={[style.defaultText,style.nickname]}>IagoDantas</Text>
                <Text accessibilityLabel="descrição: I'm Iago, Software Developer. Currently I'm working as a Web Developer and Mobile Developer and studying Analysis and systems development, I love technology."  style={[style.defaultText,style.description]}>I'm Iago, Software Developer. Currently I'm working as a Web Developer and Mobile Developer and studying Analysis and systems development, I love technology.
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText,style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
                
            </View>
    </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container:{
        //as divs começam como colunas
        backgroundColor:colorGithub,
        flex:1,//expandir para tela inteira
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
        padding: 20,
    },
    text:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
    },
    avatar:{
        height:200,
        width:200,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2
    },// uma imagem sempre vai precisar de width e height pra aparecer
    //border radius pra ficar redondo é 50% do tamanho da imagem
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop:20,
        fontSize:24,
        fontWeight:'bold',
    },//a propriedade style aceita um array de estilos 
    nickname:{
        fontSize:18,
        color: colorDarkFontGithub,
    },
    description:{
        marginTop:8,
        fontSize:14,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:colorDarkFontGithub,
        borderRadius:10,
        padding:20,
        marginTop:20,
    },
    textButton:{
        fontSize:16,
        fontWeight:'bold',
    },
})
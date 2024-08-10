import {StyleSheet,Text, View} from 'react-native';

export default RowTab = ({height,width,content,backgroundColor,text_color,text_weight}) => {
    const styles = StyleSheet.create({
        tab: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: 3,
            marginRight: 3
        },
        cell: {
            borderColor: "black",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        texto:{
            color: text_color,
            fontWeight: text_weight
        }
    })

    return(
        <View style={styles.tab}>
            {content.map((c) => (
                 <View backgroundColor={backgroundColor} height={height} width={width} style={styles.cell}>
                    <Text color={text_color} style={styles.texto}>{c}</Text>
                 </View>     
             ))}
        </View>
    )
}


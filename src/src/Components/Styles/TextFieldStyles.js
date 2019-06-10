import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const tempHeight = (16 / 9) * width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    inputStyles: {
        borderRadius: 4,
        borderWidth: 1,
        fontSize: Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (2 / 100)
    }
});

export default styles;
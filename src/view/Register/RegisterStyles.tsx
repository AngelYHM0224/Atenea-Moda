import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
},
input: {
    width: '100%',
    height: 40,
    borderColor: '#8e44ad',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
},
registerButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
},
registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
},
});

export default styles;

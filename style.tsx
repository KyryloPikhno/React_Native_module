import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    margin: 5,
  },
  errorTextName: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 158,
    left: 35,
  },
  errorTextUsername: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 172,
    left: 35,
  },
  errorTextPassword: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 186,
    left: 35,
  },
  textGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;

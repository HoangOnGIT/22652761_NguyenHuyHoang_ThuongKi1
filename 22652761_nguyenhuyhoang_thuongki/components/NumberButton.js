import {TouchableOpacity, StyleSheet} from "react-native"

const NumberButton= () => {
  return  <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '3')}>
            3
          </TouchableOpacity>

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    backgroundColor: '#F4F4F4',
    height: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    display: 'flex',
    flexWrap: 4,
    gap: 20,
    marginBottom: 20,
  },
});
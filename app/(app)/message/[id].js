import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  Button,
} from "react-native"

export default function chat() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Display chat messages */}
      <View style={styles.messagesContainer}>
        {[
          { user: "me", text: "Hello" },
          { user: "other", text: "Hi" },
        ].map((message, index) => (
          <View
            key={index}
            style={
              message.user === "me" ? styles.myMessage : styles.otherMessage
            }
          >
            <Text>{message.text}</Text>
          </View>
        ))}
      </View>

      {/* Text input and send button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          // value={this.state.message}
          onChangeText={text => {}}
        />
        <Button title="Send" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
})
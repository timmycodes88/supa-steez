import { Octicons } from "@expo/vector-icons"
import { useState } from "react"
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native"
import { COLORS } from "../../../constants/theme"
import useTheme from "../../../hooks/useTheme"
import Avatar from "@components/Avatar"

export default function Chat() {
  const { theme } = useTheme()
  const [message, setMessage] = useState("")
  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: COLORS[theme].background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Display chat messages */}
      <View style={styles.messagesContainer}>
        {[
          { user: "me", text: "Hello" },
          { user: "Billy Bob", text: "Hi" },
          { user: "Billy Bob", text: "How are you?" },
          { user: "me", text: "This is incredible, making some mock data rn" },
          {
            user: "Billy Bob",
            text: "Oh yea good stuff, now you have a better idea of what this will look like when it comes to really long messages which will defiently happen the more users you get on this app!",
          },
        ].map((message, index) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: message.user === "me" ? "flex-end" : "flex-start",
            }}
          >
            {message.user !== "me" && <Avatar name={message.user} url="" />}
            <View
              key={index}
              style={
                message.user === "me" ? styles.myMessage : styles.otherMessage
              }
            >
              {message.user !== "me" && (
                <Text style={styles.messageAuthor}>{message.user}</Text>
              )}
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Text input and send button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Octicons name="plus" size={24} color={COLORS[theme].primary} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
          returnKeyLabel=""
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
    gap: 8,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    maxWidth: "70%",
    borderRadius: 10,
    marginBottom: 5,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    maxWidth: "70%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  messageAuthor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 16,
    paddingBottom: 40,
  },
  input: {
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
})

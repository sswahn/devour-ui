# devour-ui

## chat
A simple and customizable chat component.
```javascript
const [messages, setMessages] = [
  {user: 'sswahn', text: 'Hello'},
  {user: 'steve', text: 'How are you?'}
]
<Chat
  className="custom-chat"
  username="sswahn"
  data={messages}
  onSubmit={handleSubmitMessage}
/>
```

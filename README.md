# devour-ui


## Usage

Import the components.
```javascript
import {
  Chat,
  Checkbox,
  ConfirmForgotPassword,
  Dropdown,
  ForgotPassword,
  Login,
  Modal,
  Register,
  Search,
  Sidebar,
  Tabs
} from '@sswahn/login'
```

### chat
A simple and customizable chat component with input and display.
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

### checkbox
The Checkbox component allows you to create customizable checkboxes with labels.
```javascript
<Checkbox
  className="custom-checkbox"
  label="Check me"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```

### dropdown
The Dropdown component provides a simple way to create dropdown menus with various options, including optional icons.
```javascript
const dropdownOptions = [
  {icon: FirstIcon, label: 'option one', onClick: handleOptionOne},
  {icon: SecondIcon, label: 'option two', onClick: handleOptionTwo},
  {icon: ThirdIcon, label: 'option three', onClick: handleOptionThree}
]
<Dropdown
  className="custom-dropdown"
  icon={ButtonIcon}
  text="Select an option"
  options={dropdownOptions}
/>
```

### modal
The Modal component allows you to create modal dialogs that can be opened and closed programmatically.
```javascript
<Modal className="custom-modal" open={isOpen} onClose={handleCloseModal}>
  {/* Content for the modal */}
</Modal>
```

### search
The Search component provides an input field for searching, and it allows you to capture search input changes.
```javascript
<Search className="custom-search" onChange={handleSearch} placeholder="Search..." />
```

### sidebar
The Sidebar component helps you create flexible sidebars with an open and close functionality.
```javascript
<Sidebar className="custom-sidebar" open={isOpen} onClose={handleCloseSidebar}>
  {/* Sidebar content */}
</Sidebar>
```

### tabs
```javascript
const tabOptions = [
  {label: 'Tab 1', content: <p>Content for Tab 1</p>},
  {label: 'Tab 2', content: <p>Content for Tab 2</p>},
  {label: 'Tab 3', content: <p>Content for Tab 3</p>}
]

<Tabs className="custom-tabs" options={tabOptions} />
```


## License
devour-ui is [MIT Licensed](https://github.com/sswahn/devour-ui/blob/main/LICENSE)

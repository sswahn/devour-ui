# devour-ui

## Installation
Using npm.
```bash
npm install devour-ui
```

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

### Chat
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

### Checkbox
The Checkbox component allows you to create customizable checkboxes with labels.
```javascript
<Checkbox
  className="custom-checkbox"
  label="Check me"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```

### Confirm Forgot Password
Confirm forgot password form. Using a confirmation code users can reset their passwords.
```javascript
<ConfirmForgotPassword
  className="custom-confirm-forgot-password"
  onSubmit={handleOnSubmit}
/>
```

### Dropdown
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

### Forgot Password
Forgot password form, for requesting a password reset.
```javascript
<ForgotPassword
  className="custom-forgot-password"
  onSubmit={handleOnSubmit}
/>
```

### Login
Creates a user login form, with links to registration, and forgot password forms.
```javascript
<Login
  className="custom-login"
  onSubmit={handleOnSubmit}
  forgotPassword={handleOpenForgotPassword}
  registerUser={handleOpenRegistration}
/>
```

### Modal
The Modal component allows you to create modal dialogs that can be opened and closed programmatically.
```javascript
<Modal className="custom-modal" open={isOpen} onClose={handleCloseModal}>
  {/* Content for the modal */}
</Modal>
```

### Register
Creates a user registration form.
```javascript
<Register
  className="custom-register"
  onSubmit={handleOnSubmit}
/>
```

### Search
The Search component provides an input field for searching, and it allows you to capture search input changes.
```javascript
<Search className="custom-search" onChange={handleSearch} placeholder="Search..." />
```

### Sidebar
The Sidebar component helps you create flexible sidebars with an open and close functionality.
```javascript
<Sidebar className="custom-sidebar" open={isOpen} onClose={handleCloseSidebar}>
  {/* Sidebar content */}
</Sidebar>
```

### Tabs
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

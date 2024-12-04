export default {
  auth: {
    register: {
      title: 'Register',
      email: 'Email',
      password: 'Password',
      confirm_password: 'Confirm Password',
      submit: 'Register',
      password_mismatch: 'Passwords do not match',
      register_failed: 'Registration failed, please try again later'
    },
    login: {
      title: 'Login'
    }
  },
  nav: {
    home: 'Home',
    login: 'Login',
    logout: 'Logout',
    posts: 'Posts',
    users: 'Users',
    register: 'Register'
  },
  users: {
    title: 'Users Management',
    email: 'Email',
    role: 'Role',
    created_at: 'Created At',
    actions: 'Actions',
    edit: 'Edit',
    delete: 'Delete',
    deleteConfirm: 'Are you sure you want to delete this user?',
    addNew: 'Add New User',
    roles: {
      admin: 'Admin',
      user: 'User'
    },
    messages: {
      deleteSuccess: 'User deleted successfully',
      deleteError: 'Failed to delete user',
      loadError: 'Failed to load users'
    }
  },
  pagination: {
    total: "Total {{count}} items",
    previous: "Previous",
    next: "Next",
    page: "Page {{current}} of {{total}}",
    perPage: "Items per page",
    showing: "Showing {{from}} to {{to}} of {{total}} entries"
  }
}; 
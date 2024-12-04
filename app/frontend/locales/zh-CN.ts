export default {
  auth: {
    register: {
      title: '注册',
      email: '邮箱',
      password: '密码',
      confirm_password: '确认密码',
      submit: '注册',
      password_mismatch: '密码不匹配',
      register_failed: '注册失败，请稍后重试'
    },
    login: {
      title: '登录'
    }
  },
  nav: {
    home: '首页',
    login: '登录',
    logout: '退出',
    posts: '文章',
    users: '用户',
    register: '注册'
  },
  users: {
    title: '用户管理',
    email: '邮箱',
    role: '角色',
    created_at: '创建时间',
    actions: '操作',
    edit: '编辑',
    delete: '删除',
    deleteConfirm: '确定要删除这个用户吗？',
    addNew: '添加新用户',
    roles: {
      admin: '管理员',
      user: '普通用户'
    },
    messages: {
      deleteSuccess: '用户删除成功',
      deleteError: '删除用户失败',
      loadError: '加载用户列表失败'
    }
  },
  pagination: {
    total: "共 {{count}} 条记录",
    previous: "上一页",
    next: "下一页",
    page: "第 {{current}}/{{total}} 页",
    perPage: "每页显示",
    showing: "显示第 {{from}} 到 {{to}} 条记录，共 {{total}} 条"
  }
}; 
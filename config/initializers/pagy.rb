require "pagy/extras/metadata"
require "pagy/extras/overflow"

# 默认配置
Pagy::DEFAULT[:items] = 10        # 每页项目数
Pagy::DEFAULT[:size]  = 5         # 导航显示的页码数量
Pagy::DEFAULT[:overflow] = :last_page  # 处理超出范围的页码

# 自定义元数据
# 这些元数据会在 API 响应中返回
Pagy::DEFAULT[:metadata] = [
  :count,        # 总记录数
  :page,         # 当前页码
  :prev,         # 上一页页码
  :next,         # 下一页页码
  :last,         # 最后一页页码
  :pages,        # 总页数
  :from,         # 当前页第一条记录的序号
  :to,           # 当前页最后一条记录的序号
  :series        # 页码序列
]

import * as React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/hooks/use-auth"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    {
      title: t('nav.main'),
      items: [
        {
          title: t('nav.home'),
          url: '/',
        },
        {
          title: t('nav.posts'),
          url: '/posts',
        },
        {
          title: 'Pages1',
          url: '/app/pages1',
        },
        {
          title: 'Pages2',
          url: '/app/pages2',
        },
      ],
    },
    {
      title: t('nav.auth'),
      items: !isAuthenticated ? [
        {
          title: t('nav.login'),
          url: '/app/login',
        },
        {
          title: t('nav.register'),
          url: '/app/register',
        },
      ] : [
        {
          title: t('nav.users'),
          url: '/app/users',
        },
        {
          title: t('nav.logout'),
          url: '#',
          onClick: logout,
          className: "text-red-500 hover:text-red-700"
        },
      ],
    },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={item.className}
                    >
                      {item.onClick ? (
                        <button onClick={item.onClick}>{item.title}</button>
                      ) : (
                        <Link to={item.url}>{item.title}</Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

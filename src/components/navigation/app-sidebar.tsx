"use client"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  ChevronDown,
  Home,
  LucideIcon,
  Settings,
  UserIcon,
  Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { JSX, useState } from 'react';
import NavHeader from './nav-header';
import { NavUser } from './nav-user';
import { ProgressBarLink } from '@/components/custom/progress-bar';
import { UserProfile } from '@dynamic-labs/sdk-react-core';
;

interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
  children?: NavigationItem[];
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}



interface NavigationItemProps extends NavigationItem {
  key?: string;
  isActive?: boolean;
}


export const navSections: NavigationSection[] = [
  {
    title: 'Dashboard',
    items: [
      { title: 'Overview', url: '/dashboard', icon: Home },
      { title: 'Groups', url: '/dashboard/groups', icon: Users },
      { title: 'Transactions', url: '/dashboard/transactions', icon: BarChart3 },
    ],
  },
  {
    title: 'Account',
    items: [
      { title: 'Profile', url: '/dashboard/profile', icon: UserIcon },
      { title: 'Settings', url: '/dashboard/settings', icon: Settings },
    ],
  },
];

const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  url,
  icon: Icon,
  isActive,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (children) {
    const isChildActive = children.some(
      (child) => child.url && pathname === child.url,
    );

    return (
      <SidebarMenuItem>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div
              className={cn(
                'flex items-center justify-between px-3 py-2 rounded-md transition-colors',
                isChildActive
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400',
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    'w-4 h-4',
                    isChildActive
                      ? 'text-primary'
                      : 'text-gray-500 dark:text-gray-400',
                  )}
                />
                <span
                  className={cn(
                    'text-sm font-medium',
                    isChildActive && 'font-semibold text-primary',
                  )}
                >
                  {title}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-gray-500 transition-transform duration-200',
                  isOpen && 'transform rotate-180',
                )}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-6 mt-1 space-y-1">
              {children.map((child) => (
                <NavigationItem
                  key={child.title}
                  {...child}
                  isActive={pathname === child.url}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <ProgressBarLink
          href={url}
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
            pathname === url
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400',
          )}
        >
          <Icon
            className={cn(
              'w-4 h-4',
              pathname === url ? 'text-primary' : 'text-gray-500 dark:text-gray-400',
            )}
          />
          <span
            className={cn(
              'text-sm font-medium',
              pathname === url && 'font-semibold text-primary',
            )}
          >
            {title}
          </span>
        </ProgressBarLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const NavigationSection: React.FC<{ section: NavigationSection }> = ({
  section,
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const anyItemActive = section.items.some((item) =>
    item.url === '/' ? pathname === '/' : pathname.startsWith(item.url),
  );

  return (
    <SidebarGroup>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between px-3 py-2 cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 text-gray-500 transition-transform duration-200',
                isOpen && 'transform rotate-180',
              )}
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {section.items.map((item) => (
                <NavigationItem
                  key={item.title}
                  {...item}
                  isActive={
                    item.url === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.url)
                  }
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  );
};

export function AppSidebar({
  user,
  handleLogOut,
}: {
  user: UserProfile;
  handleLogOut: () => void;
}): JSX.Element {
  return (
    <Sidebar variant="inset">
      <NavHeader />
      <SidebarContent className="space-y-2">
        {navSections.map((section) => (
          <NavigationSection key={section.title} section={section} />
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 dark:border-gray-800">
        <NavUser user={user} handleLogOut={handleLogOut} />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;

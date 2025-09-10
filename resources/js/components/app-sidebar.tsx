import AppearanceToggleTab from '@/components/appearance-tabs';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, ShoppingBag } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Order',
        href: route('order.index'),
        icon: ShoppingBag,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            {/* <Link href="/" prefetch>
                                <AppLogo />
                            </Link> */}
                            <Link href="/">Horestco</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />

                <AppearanceToggleTab className="mx-auto mt-auto mb-5 w-fit" />
            </SidebarContent>

            <SidebarFooter className="border-t">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

interface DropdownMenuItem {
  icon: React.ReactNode
  text: string
  shortcut?: string
  disabled?: boolean
  subItems?: DropdownMenuItem[]
}

interface DropdownMenuGroup {
  label: string
  items: DropdownMenuItem[]
}

interface DropdownMenuDemoProps {
  menuItems: DropdownMenuGroup[]
}

export default function DropdownMenuDemo({ menuItems }: DropdownMenuDemoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuItems.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {group.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <DropdownMenuItem disabled={item.disabled}>
                    {item.icon}
                    <span>{item.text}</span>
                    {item.shortcut && (
                      <DropdownMenuShortcut>
                        {item.shortcut}
                      </DropdownMenuShortcut>
                    )}
                  </DropdownMenuItem>
                  {item.subItems && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        {item.icon}
                        <span>{item.text}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {item.subItems.map((subItem, subItemIndex) => (
                            <DropdownMenuItem
                              key={subItemIndex}
                              disabled={subItem.disabled}
                            >
                              {subItem.icon}
                              <span>{subItem.text}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
            {groupIndex < menuItems.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

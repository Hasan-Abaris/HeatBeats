import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { ChevronDown, UserCog } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

const MenuSubmenu = ({ options, close }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <div className="grid w-[94vw] md:w-[550px] gap-2 p-2 grid-cols-1 md:grid-cols-2">
      {options.map((component, index) => (
        <div key={index}>
          {component?.submenu && component?.submenu?.length !== 0 ? (
            <>
              {/* HoverCard for large screens */}
              <div className="hidden md:block">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div
                      className={cn(
                        "group flex justify-between gap-2 items-center select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {/* <Image
                          className="w-8"
                          src={component?.icon}
                          width={50}
                          height={100}
                          alt=""
                        /> */}
                        {component?.icon && (
                          <component.icon
                            className={`w-8 h-8 ${component?.bgColor} ${component?.textColor} rounded-sm p-1   `}
                          />
                        )}
                        <div className="text-sm font-medium">
                          {component?.title}
                        </div>
                      </div>
                      <ChevronDown
                        className="relative ml-1 h-3 w-3 transition-transform duration-300 group-data-[state=open]:-rotate-90"
                        aria-hidden="true"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="sm:w-64" side="right" align="start">
                    {component.submenu.map((item, subIndex) => (
                      <NavigationMenuLink asChild key={subIndex}>
                        <Link
                          onClick={close}
                          className="flex items-center gap-2 rounded-md p-2 leading-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          href={item?.href}
                        >
                          {item?.icon && (
                            <item.icon
                              className={`w-8 h-8 ${item?.bgColor} ${item?.textColor} rounded-sm p-1  `}
                            />
                          )}
                          {/* <UserCog size={30} className="text-bluedark" /> */}
                          <div className="text-sm font-medium">
                            {item?.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              </div>

              <div className="block md:hidden">
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex justify-between items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {/* <Image
                      className="w-8"
                      src={component?.icon}
                      width={50}
                      height={100}
                      alt=""
                    /> */}
                    {component?.icon && (
                      <component.icon
                        className={`w-8 h-8 ${component?.bgColor} ${component?.textColor} rounded-sm p-1  `}
                      />
                    )}
                    <div className="text-sm font-medium">
                      {component?.title}
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown content */}
                {openDropdown === index && (
                  <div className="bg-white shadow-md rounded-md mt-1 p-2">
                    {component.submenu.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        href={item?.href}
                        onClick={close}
                        className="block p-2 hover:bg-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          {/* <Image
                            className="w-6"
                            src={item?.icon}
                            width={40}
                            height={80}
                            alt=""
                          /> */}
                          {item?.icon && (
                            <item.icon
                              className={`w-8 h-8 ${item?.bgColor} ${item?.textColor} rounded-sm p-1  `}
                            />
                          )}
                          <div className="text-sm font-medium">
                            {item?.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavigationMenuLink asChild>
              <Link
                className={cn(
                  "flex items-center gap-2 select-none rounded-md p-2 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
                href={component?.href}
                onClick={close}
              >
                {/* <Image
                  className="w-8"
                  src={component?.icon}
                  width={50}
                  height={100}
                  alt=""
                /> */}
                {component?.icon && (
                  <component.icon
                    className={`w-8 h-8 ${component?.bgColor} ${component?.textColor} rounded-sm p-1  `}
                  />
                )}
                <div className="text-sm font-medium">{component?.title}</div>
              </Link>
            </NavigationMenuLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuSubmenu;

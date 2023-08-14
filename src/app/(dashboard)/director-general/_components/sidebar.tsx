"use client"
import React from "react"
import { Icons } from "@/components/icons"
import Link from "next/link"
import 'flowbite';

const sidebarData = [
  {
    grp: [
      { title: "Home", href: "/", icon: Icons.home },
      {
        title: "Consult the reports",
        icon: Icons.rapport,
        href: "/director-general/dashboard/reports"
      },
      {
        title: "Calendar",
        icon: Icons.calendar,
        href: "/dashboard/calendar"
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <>
      <aside aria-label="Sidebar">
        <div className="overflow-y-auto rounded">
          <ul className="space-y-2">
            {sidebarData[0].grp.map((item, index) => (
              <div key={index}>
                {item.options ? (
                  <button
                    type="button"
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls={`dropdown-example-${index}`}
                    data-collapse-toggle={`dropdown-example-${index}`}
                  >
                    <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left text-sm">
                      {item.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c1c"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-arrow-down"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={`${item.href}`}
                    className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 text-sm">{item.title}</span>
                  </Link>
                )}

                {item.options && (
                  <ul
                    id={`dropdown-example-${index}`}
                    className="hidden space-y-2 py-2 pl-11"
                  >
                    {item.options.map((option, optIndex) => (
                      <li key={optIndex}>
                        <Link
                          href={`${option.href}`}
                          className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <span className="text-sm">{option.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </aside>
      <p className="mt-5">
        Some notes.
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Cyfer
        </a>
        .
      </p>
      {/* <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script> */}
    </>
  )
}

export default Sidebar

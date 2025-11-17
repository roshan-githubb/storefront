"use client"

import { usePathname } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { CategoryNavbar, NavbarSearch } from "@/components/molecules"
import Image from "next/image"

export const Navbar = ({
  categories,
}: {
  categories: HttpTypes.StoreProductCategory[]
}) => {
  const pathname = usePathname()

  // Check if URL ends with /recommended
  const showCart = pathname?.includes("/recommended")

  return (
    <div className="flex items-center bg-myBlue px-4 md:px-12 py-4 border-b w-full">
      
      {/* Back Arrow */}
      <button className="mt-2 mr-2 flex items-center justify-center rounded hover:bg-gray-200">
        <Image
          src="/images/icons/basil_arrow-up-solid.png"
          alt="Back"
          width={24}
          height={24}
        />
      </button>

      {/* Search Bar */}
      <div className="flex-1">
        <NavbarSearch />
      </div>

      {/* Cart Icon (ONLY visible on /recommended) */}
      {showCart && (
        <button className="ml-3">
          <Image
            src="/images/icons/cart.png"   // put your PNG here
            alt="Cart"
            width={24}
            height={24}
          />
        </button>
      )}
    </div>
  )
}

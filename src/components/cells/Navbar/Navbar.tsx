"use client"

import { usePathname, useRouter } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { CategoryNavbar, NavbarSearch } from "@/components/molecules"
import Image from "next/image"

export default function Navbar({ categories }: { categories: HttpTypes.StoreProductCategory[] }) {
  const pathname = usePathname()
  const router = useRouter()
  const showCart = pathname?.includes("/recommended")

  const showBackArrow = pathname !== "/in"

  return (
    <div className="flex items-center bg-myBlue px-4 md:px-12 py-4 border-b w-full">
    
      {showBackArrow && (
        <button 
        onClick={() => router.back()}
        className="mt-2 mr-2 flex items-center justify-center rounded hover:bg-gray-200">
          <Image src="/images/icons/basil_arrow-up-solid.png" alt="Back" width={24} height={24} />
        </button>
      )}

      <div className="lg:flex-1">
        <NavbarSearch />
      </div>
     
      {showCart && (
        <button className="ml-5 mt-1">
          <Image src="/images/icons/cart.png" alt="Cart" width={24} height={24} />
        </button>
      )}
    </div>
  )
}

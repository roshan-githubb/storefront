"use client"

import Link from "next/link"
import { CartIcon } from "@/icons"
import Image from "next/image"
import { StarRating } from "@/components/atoms"

export const ProductCard = ({}: {}) => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-row md:flex-col gap-3">
      {/* Image Section */}
      <div className="w-[45%] md:w-full flex-shrink-0">
        <Image
          src="/images/product/wireless-headphone.jpg"
          alt="Product"
          width={500}
          height={500}
          className="rounded-xl object-cover w-full h-full md:max-h-64"
        />
      </div>

      {/* Info Section */}
      <div className="w-[55%] md:w-full flex flex-col justify-between">
        <div>
          {/* Title */}
          <Link href={`/items/1`} className="block hover:underline">
            <h2 className="text-[16px] md:text-lg text-black line-clamp-3">
              Premium Wireless Headphones with Noise Cancellation | 42 Hour
              Battery Life
            </h2>
          </Link>

          {/* Rating */}
          <div className="text-sm flex items-center gap-1 mt-1">
            <span className="font-bold text-gray-700">4.5</span>
            <StarRating rate={4.5} starSize={10} />
            <span className="text-xs text-gray-500 ml-1"> (315 reviews)</span>
          </div>

          {/* Small Grey Line */}
          <p className="text-xs text-gray-400 mt-0.5">4K+ bought last month</p>

          {/* Price */}
          <div className="flex items-center gap-3 mt-2">
            {/* Discounted Price */}
            <p className="text-xl font-bold">
              <span className="text-sm">NRs</span>{" "}
              <span className="font-extrabold">2000</span>
            </p>

            {/* Original Price (cut) */}
            <p className="text-sm text-gray-500 line-through">NRs 2500</p>
          </div>

          {/* Savings */}
          <p className="text-sm font-bold mt-1 flex items-center">
            <span className="bg-green-100 text-md text-[#008000] px-2 py-[2px] rounded">
              Savings
            </span>
            <span className="text-gray-400 text-xs ml-2">
              Buy one get one free
            </span>
          </p>

          <span className="text-md">Buy one get one free</span>

          {/* Stock Warning */}
          <p className="text-md text-[#f80707] mt-1">
            Only 3 left in stock — order soon
          </p>

          {/* Delivery Info */}
          <p className="text-xs text-gray-600 mt-1">
            FREE delivery on <strong>Sat, 27 Sept</strong> for members
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium">
          <CartIcon size={16} color="#FFF" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductCard.displayName = "ProductCard"

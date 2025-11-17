"use client"

import React from "react"

const StarIcon = ({ size = 20, fill = "#FA6308", stroke = "#FA6308" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={fill}
    stroke={stroke}
    strokeWidth={stroke ? 1.5 : 0}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.137 3.49a1 1 0 00.95.69h3.665c.969 0 1.371 1.24.588 1.81l-2.965 2.16a1 1 0 00-.364 1.118l1.137 3.49c.3.921-.755 1.688-1.54 1.118l-2.965-2.16a1 1 0 00-1.176 0l-2.965 2.16c-.784.57-1.838-.197-1.54-1.118l1.137-3.49a1 1 0 00-.364-1.118L2.708 9.917c-.783-.57-.38-1.81.588-1.81h3.665a1 1 0 00.95-.69l1.137-3.49z" />
  </svg>
)

export const StarRating = ({ rate, starSize = 20 }: { rate: number; starSize?: number }) => {
  const starColor = "#FA6308"

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const fillPercent = rate - i >= 1 ? 100 : rate - i > 0 ? (rate - i) * 100 : 0

        return (
          <div
            key={i}
            className="relative w-[20px] h-[20px] overflow-hidden"
            style={{ width: starSize, height: starSize }}
          >
            <StarIcon size={starSize} fill="transparent" stroke={starColor} />
            {fillPercent > 0 && (
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fillPercent}%` }}
              >
                <StarIcon size={starSize} fill={starColor} stroke={starColor} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

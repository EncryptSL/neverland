'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? 1
  const per_page = searchParams.get('per_page') ?? 30

  return (
    <div className='d-flex grid gap-2 mt-3 justify-content-center align-items-center flex-wrap'>
      <button
        className='btn btn-primary btn-sm'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`banlist/?page=${Number(page) - 1}&per_page=${per_page}`)
      }}>
        Zpět
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className='btn btn-primary btn-sm'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`banlist/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Další
      </button>
    </div>
  )
}

export default PaginationControls
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  variable: '--font-quicksand',
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700']
})

export default quicksand

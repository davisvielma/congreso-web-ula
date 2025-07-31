import { Loader2Icon } from 'lucide-react'

const Loader = () => {
  return (
    <div className="w-full flex grow justify-center items-center p-5">
      <Loader2Icon className="size-12 text-blue-600 animate-spin" />
    </div>
  )
}

export default Loader
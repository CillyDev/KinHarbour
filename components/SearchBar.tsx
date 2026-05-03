import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function SearchBar() {
  return (
    <Field orientation="horizontal" className="flex justify-start">
      <span className="flex	items-center w-auto p-2.5 gap-x-2">
        <Image alt="seach-bar" width={16} height={16} src="/images/search_4084332.png" />
        <Input type="search" placeholder="Search..." className="rounded-md w-auto" />
      </span>
    </Field>
  )
}

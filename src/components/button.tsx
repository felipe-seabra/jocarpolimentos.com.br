type Props = {
  label: string
}

export function Button({ label }: Props) {
  return (
    <button
      type="button"
      className="px-5 py-4 rounded-xl bg-red-600 text-white transition-all duration-200 hover:brightness-110"
    >
      {label}
    </button>
  )
}

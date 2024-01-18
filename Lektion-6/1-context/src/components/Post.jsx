import { useThemeContext } from "../contexts/ThemeContext"

export const Post = ({ post }) => {

  const { isLightTheme } = useThemeContext()
  return (
    <div className={`border p-2 rounded ${isLightTheme 
    ? 'bg-slate-200 border-slate-400'
    : 'bg-slate-700 border-slate-900'
    }`}>
      <h2 className="font-semibold text-xl">{post.title}</h2>
      <p className="truncate">{post.body}</p>
    </div>
  )
}
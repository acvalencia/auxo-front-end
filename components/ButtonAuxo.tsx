export const ButtonAuxo = ({variant, onClick, children}) => {

  return (
    console.log(variant),
      <button
        className={`px-4 py-2 ${variant==='primary'?'bg-greenBgAuxo':'bg-whiteAuxo'} rounded-lg shadow-sm `}
        onClick={ onClick }
      >
        <div className={`${variant==='primary'?'text-blueAuxo':'text-greenTextAuxo'}`}>
          {children}
        </div>
      </button>
  )
}

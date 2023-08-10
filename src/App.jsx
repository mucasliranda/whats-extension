import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useCallback, useState } from 'react'

export default function App() {
  const [telefone, setTelefone] = useState()

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    window.open(`https://wa.me/${telefone}`)
  }, [telefone])

  return (
    <main className="w-[24rem] h-[24rem] bg-green-500 flex flex-col justify-center items-center">
      <div className="w-[calc(100%-3rem)] h-[calc(100%-3rem)] bg-red-400 flex flex-col justify-center items-center
        rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100
      ">
        <form 
          className="flex flex-col justify-center items-stretch gap-6 text-black"
          onSubmit={onSubmit}
        >
          <h1 
            className="text-lg text-center font-medium text-white"
          >
            Abrir conversa
          </h1>

          <div className='border border-gray-100 pl-2'>
            <PhoneInput 
            defaultCountry='BR'
              placeholder="Digite o número aqui"
              value={telefone}
              onChange={setTelefone}
            />
          </div>

          <button
            type="submit"
            className="
              font-bold py-1 px-2 rounded
              bg-blue-500 text-white 
              hover:bg-blue-700
            "
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}
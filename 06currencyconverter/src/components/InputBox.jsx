import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = ""
}) {

    const id = useId();

  return (
    <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
        <div className='w-1/2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            type="number"
            id={id}
            value={amount}
            placeholder='Ilość'
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            disabled={amountDisabled}
            className='w-full outline-none bg-transparent py-1.5'
            />
        </div>
        <div className="w-1/2 flex flex-col items-end justify-center">
            <label className='text-black/40 mb-2 inline-block text-right'>Waluta</label>
            <select
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            className='rounded-lg px-1 py-1 min-h-0 h-7 bg-gray-200 text-black outline-none cursor-pointer'
            disabled={currencyDisabled}
            >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                {currency}
                </option>
            ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox